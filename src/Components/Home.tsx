import React, {useEffect} from 'react';
import NavBar from './NavBar';
import AddNews from './AddNews';
import {News} from '../interfaces/interfaces';
import Articles from './Articles';
interface IHome {
  news?:  News[];
  remove: Function;
  add: Function;
  saveToStore: Function; 
}

export default function Home(props: IHome) { 
  useEffect( () => {  
    props.saveToStore()
    
      // eslint-disable-next-line
  }, [])
  
  const removeHandler = (id:number) => {         
    props.remove(id);
  }

  const addArticle = (data) => {
    props.add(data)
  }

  const {news = []} = props 
  let count = news.length
    
  return (
    <>
      <NavBar />    
      <div className='container'>   
        <AddNews addArticle={addArticle} /> 
        <h5 className='center-align'>Count: {count} </h5> 
        {
          news.length 
            ? <Articles removeHandler={removeHandler} news={news}/>
            : null
        }
      </div>           
    </>
  );
}







    