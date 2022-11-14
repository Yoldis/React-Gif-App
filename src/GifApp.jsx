import {useState} from 'react';
import {AddCategory, GifGrid} from './components'

export const GifApp = () => {
    const [categories, setCategories] = useState(['Pavo']);


    const addCategories = (onNewCategory) => {

        if(categories.includes(onNewCategory)) return;
        setCategories([onNewCategory, ...categories])
    }

  return (
    <>
      <h1>GifApp</h1>

      <AddCategory
        //   onAddCategory={setCategories}
        onNewCategory={addCategories}
      />

        {categories.map((category) => {
          return (
            <GifGrid key={category} category={category} />
          );
          
        })}
    </>
  );
}
