import React, {Component} from 'react';
import { connect } from "react-redux";
import { getNews } from "../redux/actions/ajaxAction";

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
    console.log('news', news)
    return (
      <>
        <NavBar />
        <Search />
        <div className='container'>
          {/* {news.map((item, index) => {
            return (
              <div className='product' key={`prod-${index}`}>              
                <div className='title'>{item.title}</div>
                <div className='description'>{item.description}</div>                
                <div className='created_at'>{item.created_at}</div>                   
                <div className='author'>{item.author}</div> 
              </div>
            );
          })} */}
       </div>       
      </>
    );
  }
}

const mapStateToProps = (store:any) => ({
  ...store.news  
});

const mapDispatchToProps = (dispatch: any) => {   
  return {
    get: () => { getNews() }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);





    