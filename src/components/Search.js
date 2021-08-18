import React, {useRef, useEffect} from 'react';
import { useGlobalContext } from '../context';
import "../index.css"

function Search() {
  const {setSearchText} = useGlobalContext();
  const searchValue = useRef("")

  useEffect(() => {
    searchValue.current.focus();
  })

  const searchBeer = () => {
    setSearchText(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <label htmlFor="name" >Search : </label>
        <input type="text" id="name" className="search-input" ref={searchValue} onChange={searchBeer} />
      </form>
    </div>
  )
}

export default Search
