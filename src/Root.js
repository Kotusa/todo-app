import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';

import { COLOR } from '@constants/todos';
import { App } from '@templates';
import { TodosContext, NewsContext, ApplicationContext } from '@context';
import { commonTheme } from '@theme';

const queryClient = new QueryClient();

const Root = () => {
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  const [newsVisibility, setNewsVisibility] = useState(true);

  const [todos, setTodos] = useState({
    '2023-01-09': [
      {
        id: 1,
        title: 'Visit David',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        color: COLOR.RED,
        done: false,
      },
      {
        id: 2,
        title: 'Feed the dog',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        color: COLOR.BLUE,
        done: true,
      },
    ],
  });

  const applicationState = useMemo(
    () => ({
      drawerVisibility,
      toggleDrawerVisibility: (value) => setDrawerVisibility(value),
    }),
    [drawerVisibility],
  );

  const newsState = useMemo(
    () => ({
      newsVisibility,
      toggleNewsVisibility: (value) => setNewsVisibility(value),
    }),
    [newsVisibility],
  );

  const todosState = useMemo(
    () => ({
      todos,
      updateTodos: (value) => setTodos(value),
    }),
    [todos],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationContext.Provider value={applicationState}>
        <TodosContext.Provider value={todosState}>
          <NewsContext.Provider value={newsState}>
            <ThemeProvider theme={commonTheme}>
              <Router>
                <App />
              </Router>
            </ThemeProvider>
          </NewsContext.Provider>
        </TodosContext.Provider>
      </ApplicationContext.Provider>
    </QueryClientProvider>
  );
};

export default Root;
