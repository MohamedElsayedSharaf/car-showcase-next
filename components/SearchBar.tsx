"use client"
import React, { useState } from 'react'
import {SearchManfacturer} from './'

function SearchBar() {
    const [manfacturer, setManfacturer] = useState('')
    const handleSearch = () => {}
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManfacturer
                manufacturer={manfacturer}
                setManuFacturer={setManfacturer}
                />
            </div>
        </form>
    )
}

export default SearchBar
