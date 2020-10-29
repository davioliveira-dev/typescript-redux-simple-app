import React, { Dispatch, useCallback, useState } from 'react';
import { Fab } from '@rmwc/fab';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AddArticle } from './components/AddArticle';
import { Article } from './components/Article';
import { addArticle, removeArticle } from './store/actionCreators';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

export const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles, shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();
  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)), [dispatch]
  );

  const [theme, setTheme] = useState(lightTheme);
  
  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }, [theme.title]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Fab 
          icon="brush" 
          ripple 
          className="fab-button"
          onClick={toggleTheme}
          style={{ background: theme.colors.primary }}
        />
        <h1>My Articles</h1>
        <AddArticle saveArticle={saveArticle} />
        {articles.map((article: IArticle) => (
          <Article 
            key={article.id} 
            article={article} 
            removeArticle={removeArticle}
          />
        ))}
      </main>
    </ThemeProvider>
  );
}

export default App;