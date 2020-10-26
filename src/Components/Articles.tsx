import React from 'react'

export default function Articles(props) {  
  return props.news.map((item, index) => {           
      return (                 
          <div className='news-block-item center-align mt2 pad orange lighten-5 z-depth-3' key={index}>              
            <h3 className='' >{item.title}</h3>
            <div className='flow-text mt2' >{item.description}</div>                
            <div className='right-align mt2'>{`Created ${item.created_at}`}</div>
            <div className="icon right-align pad" onClick={() => {props.removeHandler(item.id)}}>
              <i className="material-icons prefix right-align ">delete</i>
            </div>
          </div>    
      )
  })
}
