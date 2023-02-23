import { useState } from "react";


export const AddCategory = ({ onAddValue }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if(value.length <=1)return;
        setInputValue('');
        onAddValue( value );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gif"
                value={ inputValue }    
                onChange={ onInputChange }
            />
        </form>
    );


}