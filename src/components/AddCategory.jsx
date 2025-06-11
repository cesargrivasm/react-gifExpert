// import React from 'react'
import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({target}) => {
        // console.log(event.target.value);
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
       event.preventDefault();
       if( inputValue.trim().length <=1) return;
      //  setCategories( categories => [ inputValue, ...categories]);
      onNewCategory(inputValue.trim());
       setInputValue('');
    }
  return (
    // <h3>    
    //   AddCategory
    // </h3>

    <form onSubmit={ onSubmit }>
        <input type="text"
    placeholder="Buscar Gifs"
    value={inputValue}
    onChange={ (event) => onInputChange(event) } 
    />
    </form>
    
   
  )
}

// export default AddC  ategory
