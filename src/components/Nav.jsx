import React, { Component } from 'react'

class Nav extends Component{
  render(){
    return(
      <>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark">
        <div className="container">
          <div className="col d-flex justify-content-start">
            <a className="navbar-brand text-center nombre" href='null'><b>Luis Enrique Romero Martínez</b><em className="nav">Junior front end</em></a>
          </div>
    
          <div className="justify-content-end">
            <button className="navbar-toggler aling-items-center " type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" arua-current="page" href="#header">Foto</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#acercade">Acerca de</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacto">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
    
        </div>
      </nav>
      </>
      )
    }
}
export default Nav;