export type ViewProps = Record<string, any>;
export type OptionsProps = Record<string, any>;

export type CommonViewProp = {
  id?: string;
  echartData?: any;
  option?: any;
  isListView?: boolean;
  isNoData?: boolean;
  isLoading?: boolean;
};
