import React, {Component} from 'react';
import { connect } from "react-redux";
import { getNews, removeNews } from "../redux/actions/getNewsAction";

import NavBar from './NavBar';
import AddNews from './AddNews';

interface FormProps {
  getNews: Function;  
  get: Function;  
  remove: Function;  
  news:  Array<any>; 
  index: Record<string, any>;
  dispatch: Function;  
  removeHandler: (id:number) => void; 
  removeItem: boolean;
  openModal: Function;
}

class Home extends Component<FormProps> {

  state ={
    removeItem: false,
  }
  
  removeHandler = (id:number) => { 
    this.setState( {removeItem: true} )      
    this.props.remove(id);
  }

  componentDidMount() {
    // const saveLocalArticles = localStorage.getItem('articles');
    // this.setState({ saveLocalArticles });
    this.props.get();
  }

  render() {
    const {news} = this.props
   // console.log('newsMount', news)

  //  localStorage.getItem ('articles');
  //   const storageArticles = localStorage.news.split(',').map( (item: ) => {
  //        return parseInt(item)         
  //   });
   
   let htmlNews = news.length && news.map((item) => {           
    return (                 
        <div className='news-block-item center-align mt2 pad orange lighten-5 z-depth-3' key={item.id}>              
          <h3 className='' >{item.title}</h3>
          <div className='flow-text mt2' >{item.description}</div>                
          <div className='right-align mt2'>{`Created ${item.created_at}`}</div>
          <div className="icon right-align pad" onClick={() => {this.removeHandler(item.id)}}>
            <i className="material-icons prefix right-align ">delete</i>
          </div>
        </div>    
    );
  })
    return (
      <>
        <NavBar />    
        <div className='container'>   
        <AddNews />       
          {htmlNews}          
       </div>           
      </>
    );
  }
}

const mapStateToProps = (store:any) => ({
  ...store.getArticles
  
});

const mapDispatchToProps = (dispatch: any) => {   
  return {
    get: () => { dispatch( getNews() ) },
    remove: (id:number) => { dispatch( removeNews(id) ) } 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);





    