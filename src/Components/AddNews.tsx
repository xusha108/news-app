import React, {useState} from 'react';
import 'materialize-css';
import {Modal, Button} from 'react-materialize';

const AddNews: React.FC<any> = (props) => {

  const [state, setState] = useState({   
    title: '',
    description: '',
    created_by: ''
  })  

  const inputValue = function (el) {
    const newState = {...state}
    newState[el.name] = el.value
    setState(newState)     
  } 

  const submit = function () {
    props.addArticle(state)

    setState({   
      title: '',
      description: '',
      created_by: ''
    })
  }
  
  return(    
    <Modal      
      header='ADD YOUR ARTICLE'
      trigger={<Button waves='light'>ADD NEWS</Button>}>
     
      <div className='input-field col s8 px1'>    
        <input placeholder='Enter title' name='title' value={state.title} type='text' onChange={ (el) => {inputValue(el.target)} }  />         
      </div>

      <div className='input-field col s6 px1'>   
        <input placeholder='Enter text' name='description'  value={state.description} type='text'onChange={ (el) => {inputValue(el.target)} } />              
      </div>

      <div className='input-field col s6 px1'>   
        <input placeholder='Enter author' name='created_by'  value={state.created_by} type='text'onChange={ (el) => {inputValue(el.target)} } />              
      </div>

      <div className='modal-footer'>
        <a href='#!' className='modal-close waves-effect waves-green btn-flat'  onClick={ () => {submit()} } >ADD ARTICLE</a>
      </div>     
    </Modal>
  )
}

export default AddNews;