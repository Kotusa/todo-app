import React, { Fragment, useContext } from 'react';
import { useQuery } from 'react-query';
import cn from 'classnames';

import { Container } from '@atoms';
import { Marquee } from '@molecules';
import { Todos } from '@organisms';
import { NewsContext } from '@context';
import api from '@api';

const Home = () => {
  const { newsVisibility } = useContext(NewsContext);

  const {
    data: news,
    error: newsFetchError,
    isLoading: isLoadingNews,
  } = useQuery('news', api.news.getList, { refetchOnWindowFocus: false, retry: false });

  const showNews = !newsFetchError && !isLoadingNews && newsVisibility;

  return (
    <Fragment>
      <Container maxWidth="sm" className={cn('height')}>
        <Todos />
      </Container>

      {showNews && <Marquee source={news?.articles} />}
    </Fragment>
  );
};

export default Home;
