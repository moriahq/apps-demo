import { i18n } from '@giteeteam/apps-api';

export const run = (): string => {
  return `This is webtrigger result:${i18n.t('opensource')}`;
};
