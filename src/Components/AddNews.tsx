import React, {useState} from 'react';
import 'materialize-css';
import {Modal, Button} from 'react-materialize';

const AddNews: React.FC<any> = (props) => {

  const [state, setState] = useState({   
    title: '',
    description: '',
    created_at: ''
  })  

  const inputValue = function (el) {
    const newState = {...state}
    newState[el.name] = el.value
    setState(newState)     
  } 
  
  return(    
    <Modal      
      header='ADD YOUR ARTICLE'
      trigger={<Button waves='light'>ADD NEWS</Button>}>
     
      <div className='input-field col s8 px1'>    
        <input placeholder='Enter title' name='title' type='text' onChange={ (el) => {inputValue(el.target)} }  />         
      </div>

      <div className='input-field col s6 px1'>   
      <input placeholder='Enter text' name='description' type='text'onChange={ (el) => {inputValue(el.target)} } />              
      </div>

      <div className='input-field col s6 px1'>   
      <input placeholder='Enter author' name='created_at' type='text'onChange={ (el) => {inputValue(el.target)} } />              
      </div>

      <div className='modal-footer'>
        <a href='#!' className='modal-close waves-effect waves-green btn-flat'  onClick={ () => {props.addArticle(state)} } >ADD ARTICLE</a>
      </div>     
    </Modal>
  )
}


export default AddNews;