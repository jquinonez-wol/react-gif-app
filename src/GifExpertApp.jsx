import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Naruto' ]);

    const onAddCategory = (value) => {
        setCategories([...categories, value])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddValue={ value => onAddCategory(value) }></AddCategory>
            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={category}
                    />
                ))
                
            }
        </>
        
    )
}