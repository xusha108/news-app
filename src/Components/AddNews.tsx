import React from 'react';
import 'materialize-css';
import {Modal, Button} from 'react-materialize';

const AddNews: React.FC = () => {
  return(    
    <Modal      
      header='ADD YOUR ARTICLE'
      trigger={<Button waves='light'>ADD NEWS</Button>}>
     
      <div className='input-field col s8 px1'>    
        <input placeholder='Enter title'  type='text' />         
      </div>

      <div className='input-field col s6 px1'>    
        <input placeholder='Enter text'  type='text' />          
      </div>
      <div className='modal-footer'>
        <a href='#!' className='modal-close waves-effect waves-green btn-flat'>ADD ARTICLE</a>
      </div>
    </Modal>
  )
}


export default AddNews;