import { connect } from 'react-redux';
import Home from './Home';
import {News} from '../interfaces/interfaces';
import { getNews, removeNews, addArticle } from '../redux/actions/getNewsAction';
import Service from '../Service/Service';

const mapStateToProps = (store:any) => {
  return {...store}  
};

const mapDispatchToProps = (dispatch: any) => {  
  return {
    saveToStore: (data: News[]) => {
       Service().then( (res) => {
         dispatch( getNews({news: res.data.data.articles}) )  
        })},            
    remove: (id:number) => { dispatch( removeNews(id) ) },
    add: (data: News) => { dispatch( addArticle(data) ) }, 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);