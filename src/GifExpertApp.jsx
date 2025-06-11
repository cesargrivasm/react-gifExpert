import { useState } from "react"
import { AddCategory, GifGrid} from "./components";



export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  // console.log(categories);

  const onAddCategory= (newCategory) => {
    if( categories.includes(newCategory)) return;
      // console.log('Valorant');
      console.log(newCategory);
      // categories.push('Valorant');
      setCategories([ newCategory,...categories]);
      // setCategories( cat => [ ...cat, 'Valorant']);
  }
  return (
    <>
    {/* titulo */}
    <h1>GifExpertApp</h1>
    {/* input */}
    {/* <input></input> */}
    <AddCategory 
    // setCategories={setCategories}
    onNewCategory={ (event) => onAddCategory(event)}
    />
    {/* <button onClick={onAddCategory}>Agregar</button> */}

    {/* listado de gif */}

      {
        categories.map( (category ) => (
          <GifGrid key={ category } category={ category }/>
          // (<div key={ category}>
          //   <h3>{category}</h3>
          //       <li>{category}</li>
          // </div>
        ))
          // )
        }
      
      {/* <li>ABC</li>
      <li>XYZ</li>
      <li>123</li> */}
   
      {/* gif item */}


    </>
  )
}

export default GifExpertApp
