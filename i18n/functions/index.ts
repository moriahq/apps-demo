import { i18n } from '@giteeteam/apps-team-api';

export const run = async () => {
  return `This is webtrigger result:${i18n.t('opensource')}`;
};
