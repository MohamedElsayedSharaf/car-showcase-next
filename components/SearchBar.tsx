"use client"
import React, { useState } from 'react'
import SearchManfacturer from './SearchManfacturer'

const SearchBar = () => {
    const [manufacturer, setManuFacturer] = useState('')
    const handleSearch = () => {}
    return (
        <>
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManfacturer
                manufacturer={manufacturer}
                setManuFacturer={setManuFacturer}
                />
            </div>
        </form>
        </>
    )
}

export default SearchBar
