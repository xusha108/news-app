import {News} from '../../interfaces/interfaces';

export const getNews:Function = (data: any) => {  
  return { 
    type: 'GET_NEWS',
    payload: data.news  
  }
}

export const removeNews = (payload: number) => {
  return { 
      type: 'REMOVE_NEWS',
      payload  
  }
}

export const addArticle = (payload: News) => {
  console.log('action', payload )
  return { 
      type: 'ADD_ARTICLE',
      payload  
  }
}