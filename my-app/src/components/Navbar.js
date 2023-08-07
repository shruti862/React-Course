import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
export default function (props) {
  /*const handleColor=()=>{
    if(document.getElementsByName('colo')==='1'){
      document.body.style.backgroundColor='blue';
    }
    else if(document.getElementsByName("colo")==='2'){
      document.body.style.backgroundColor='green';
    }
    else if(document.getElementsByName("colo")==='3'){
      document.body.style.backgroundColor='red';
    }
    else if(document.getElementsByName("colo")==='4'){
      document.body.style.backgroundColor='yellow';
    }
  }*/
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        {/*<form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>*/}
        
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired,
aboutText:PropTypes.string}

Navbar.defaultProps = {
    title:'Set title here',
    aboutText:'About text here'
  };

