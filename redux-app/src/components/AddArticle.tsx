import React, { FormEvent, useContext, useState } from 'react';
import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button';
import '@rmwc/textfield/styles';
import '@rmwc/button/styles';
import { ThemeContext } from 'styled-components';

type Props = {
  saveArticle: (article: IArticle | any) => void;
}

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = useState<IArticle | {}>();

  const handleArticleData = (e: FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  }

  const addNewArticle = (e: FormEvent) => {
    e.preventDefault();
    saveArticle(article);
  }

  const { text, colors, title } = useContext(ThemeContext);

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <TextField
        type="text" 
        id="title" 
        placeholder="Title" 
        onChange={handleArticleData}
        outlined
        required
        label="Title"
        style={{ 
          background: title === 'dark' ? colors.secondary : '#fff',
          borderColor: colors.secondary
        }}
      />
      <TextField 
        type="text" 
        id="body" 
        placeholder="Description" 
        onChange={handleArticleData}
        outlined
        required
        label="Description"
        style={{ 
          background: title === 'dark' ? colors.secondary : '#fff',
          borderColor: colors.secondary
        }}
      />
      <Button 
        disabled={article === undefined ? true : false}
        label="Add Article"
        raised
        style={{ background: colors.primary,
          color: title === 'dark' ? text : '#fff' 
        }}
      />
    </form>
  );
}