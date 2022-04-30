import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
    

    const onSearchValuechange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <>
        <input 
            className="TodoSearch" 
            placeholder="Search..." 
            value={searchValue}
            onChange={onSearchValuechange}
        />
        <p>{searchValue}</p>
        </>
    )
}

export { TodoSearch };