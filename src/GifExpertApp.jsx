import {useState} from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([  ]);

  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return ;

      // setCategories(cat => [...cat, 'Category2'])
      setCategories([newCategory, ...categories]);
  }

 

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          // setCategories = {setCategories} 
          onNewCategory = {onAddCategory}      
        />

        {/* Listado de gif */}
          {categories.map((category) => 
            (<GifGrid key = {category} category={category}/>) 
          )}

          {/* gif item */}
    </>
  )
}
