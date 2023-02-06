const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const hasha = require("hasha");
const autoprefixer = require("autoprefixer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBar = require("webpackbar");

const distOutputPath = "dist";
const appPrefix = "chart-basic";

// output配置
const outputConfig = (isProd) =>
  isProd
    ? {
        filename: "[name]/index.js",
        path: path.resolve(__dirname, distOutputPath),
        publicPath: "./",
        libraryTarget: "commonjs2",
      }
    : {
        filename: "[name]/index.js",
        path: path.resolve(__dirname, distOutputPath),
        publicPath: "/",
        libraryTarget: "commonjs2",
      };

const getLocalIdent = ({ resourcePath }, localIdentName, localName) => {
  if (localName === appPrefix) {
    return localName;
  }
  if (
    /\.global\.(css|less)$/.test(resourcePath) ||
    /node_modules/.test(resourcePath)
  ) {
    // 不做cssModule 处理的
    return localName;
  }
  return `${localName}__${hasha(resourcePath + localName, {
    algorithm: "md5",
  }).slice(0, 8)}`;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (cliEnv = {}, argv) => {
  const mode = argv.mode;

  if (!["production", "development"].includes(mode)) {
    throw new Error(
      "The mode is required for NODE_ENV, BABEL_ENV but was not specified."
    );
  }

  const isProd = mode === "production";

  const classNamesConfig = {
    loader: "@ecomfe/class-names-loader",
    options: {
      classNamesModule: require.resolve("classnames"),
    },
  };
  // 生产环境使用 MiniCssExtractPlugin
  // const extractOrStyleLoaderConfig = isProd ? MiniCssExtractPlugin.loader : 'style-loader';
  const extractOrStyleLoaderConfig = "style-loader";

  const cssLoaderConfig = {
    loader: "css-loader",
    options: {
      modules: { getLocalIdent },
      importLoaders: 1,
    },
  };

  const lessLoaderConfig = {
    loader: "less-loader",
    options: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          "ant-prefix": appPrefix,
        },
      },
    },
  };

  const postcssLoaderConfig = {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [autoprefixer],
      },
    },
  };
  const webpackConfig = {
    entry: {
      "chart-bar-demo": "./src/components/chart-bar-demo",
    },
    mode: isProd ? "production" : "development",
    output: outputConfig(isProd),
    resolve: {
      extensions: [".js", ".css", ".jsx", ".tsx", ".ts"],
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
    devServer: {
      port: 8000,
      hot: true, // 由于微前端热重载不支持局部更新，开启本项可使用全量刷新
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
      },
    },
    plugins: [
      new WebpackBar(),
      isProd &&
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
          chunkFilename: "[name].[contenthash].chunk.css",
        }),
      new CleanWebpackPlugin(),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["babel-loader", "ts-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css/,
          use: [
            classNamesConfig,
            extractOrStyleLoaderConfig,
            "css-loader",
            postcssLoaderConfig,
          ],
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            classNamesConfig,
            extractOrStyleLoaderConfig,
            cssLoaderConfig,
            postcssLoaderConfig,
            lessLoaderConfig,
          ],
        },
        {
          test: /\.less$/,
          include: /node_modules/,
          use: [extractOrStyleLoaderConfig, "css-loader", lessLoaderConfig],
        },
        // 静态资源
        {
          test: /\.(png|jpg|gif)$/i,
          type: "asset/resource",
          generator: {
            filename: "resource/[hash][ext][query]",
          },
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    },
  };

  webpackConfig.externals = [
    {
      react: "commonjs2 react",
      "react-dom": "commonjs2 react-dom",
      //   antd: 'commonjs2 antd',
      formik: "commonjs2 formik",
      swr: "commonjs2 swr",
      axios: "commonjs2 axios",
      classnames: "commonjs2 classnames",
      echarts: "commonjs2 echarts",
    },
    function ({ _context, request }, callback) {
      if (request.startsWith("proxima-sdk")) {
        return callback(null, "commonjs2 " + request);
      }
      // 继续下一步且不外部化引用
      callback();
    },
  ];

  return webpackConfig;
};
