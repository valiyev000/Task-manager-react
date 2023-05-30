import React from 'react'
import searchIcon from './imgs/search-icon.svg'

export default function MainTop() {
    return (
        <section className='mainTop'>
            <form action="#" method="post">
                <img src={searchIcon} alt="search-icon" />
                <input type="text" name="search-box" id="search-box" placeholder='Search items' />
            </form>
            <button>New item</button>
        </section>
    )
}