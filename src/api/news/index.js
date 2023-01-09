import config from '@config';

import createDataSource from '../createDataSource';

const BASE_PATHNAME = 'everything';

export default () => {
  const dataSource = createDataSource(`${config.api.url}`);

  const getList = () => {
    return dataSource
      .get(BASE_PATHNAME, {
        searchParams: { apiKey: config.api.key, q: 'business', pageSize: 5, sortBy: 'publishedAt' },
        retry: {
          limit: 1,
          methods: ['get'],
          statusCodes: [429],
          backoffLimit: 3000,
        },
        timeout: false,
      })
      .json();
  };

  return {
    getList,
  };
};
