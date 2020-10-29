import * as actionTypes from './actionTypes';

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    article,
    type: actionTypes.ADD_ARTICLE
  }

  return simulateHttpRequest(action);
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    article,
    type: actionTypes.REMOVE_ARTICLE
  }

  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 100);
  }
}
