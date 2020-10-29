import { Button } from '@rmwc/button';
import React, { Dispatch, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';

type Props = {
  article: IArticle,
  removeArticle: (article: IArticle) => void
}

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const { colors } = useContext(ThemeContext);

  const deleteArticle = useCallback(
    (article: IArticle) => 
    dispatch(removeArticle(article)),[dispatch, removeArticle]
  );

  return (
    <div className="article">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <Button
        style={{ background: colors.primary }}
        onClick={() => deleteArticle(article)} 
        label="Delete Article"
        raised
      />
    </div>
  );
}