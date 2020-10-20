import React from 'react';

const Search: React.FC = () => {
  return (
    <div className="row mt2 ">
       <div className="input-field center-align ">
          <i className="material-icons prefix">search</i>
          <input id="icon_prefix" placeholder='Search..' type="text" className="validate" />
          <label htmlFor="icon_prefix"></label>
        </div>    
  </div>
  );
}

export default Search;