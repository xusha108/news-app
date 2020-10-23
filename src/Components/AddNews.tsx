import React from 'react';
import 'materialize-css';
import {Modal, Button} from 'react-materialize';

interface IAddArticle {
  handlerNews: () => void;
}

const AddNews: React.FC<IAddArticle> = (props) => {
  return(    
    <Modal      
      header='ADD YOUR ARTICLE'
      trigger={<Button waves='light'>ADD NEWS</Button>}>
     
      <div className='input-field col s8 px1'>    
        <input placeholder='Enter title' name='title' type='text' />         
      </div>

      <div className='input-field col s6 px1'>   
      <input placeholder='Enter text' name='text' type='text'onChange={ ():void => {props.handlerNews()}} />              
      </div>

      <div className='modal-footer'>
        <a href='#!' className='modal-close waves-effect waves-green btn-flat'>ADD ARTICLE</a>
      </div>
    </Modal>
  )
}


export default AddNews;