
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const NavBar =(props)=> {
  const [text, setText] = useState('');
  const handleSearchChange = (event) => {
    setText(event.target.value);
  }
  
  const handleClick = (event) => {
    // console.log(event.target[0].value)
    props.toggleFind(event.target[0].value);
    // <Link to='/find'/>
  }

 
    return (
      <nav className="nav fixed-top " style={{ background: 'black', color: 'white' }}>
        <h3>News Express {text} </h3>
        {/* <form className="d-flex" role="search" action='#' style={{ margin: 'auto' }} onSubmit={handleClick}>
          <input className="form-control me-2" type="search" placeholder="Search" value={text} onChange={handleSearchChange} />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </nav>
    )
  

}

export default NavBar