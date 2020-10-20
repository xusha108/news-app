import React, {Component} from 'react';
import { connect } from "react-redux";
import { getNews } from "../redux/actions/getNewsAction";

import NavBar from './NavBar';
import Search from './Search';


interface FormProps {
  getNews: Function;  
  get: Function;  
  news:  Array<any>;
  item: Record<string, any>;
  index: Record<string, any>;
  dispatch: Function;   
}

class Home extends Component<FormProps> {

  componentDidMount() {
    this.props.get();
  }

  render() {
    const {news} = this.props
    console.log('newsMount', news)

    
    return (
      <>
        <NavBar />
        <div className='container'>
        <Search />
          {news.length && news.map((item) => {           
            return (
              <div className='news-block-item center-align mt2 pad teal lighten-4 z-depth-3' key={item.id}>              
                <h3 className='' >{item.title}</h3>
                <div className='flow-text mt2' >{item.description}</div>                
                <div className='right-align mt2'>{`Created ${item.created_at}`}</div>
              </div>
            );
          })}
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
    get: () => { dispatch( getNews() ) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);





    