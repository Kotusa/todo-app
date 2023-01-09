import ky from 'ky';

const createDataSource = (baseUrl) => {
  const dataSource = ky.create({
    prefixUrl: `${baseUrl}`,
  });

  return dataSource;
};

export default createDataSource;
