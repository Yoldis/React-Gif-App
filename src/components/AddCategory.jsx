import {useState} from 'react'

export const AddCategory = ({onAddCategory, onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim())
        // onAddCategory(categories => [inputValue, ...categories]);
        setinputValue('');
    }

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}
