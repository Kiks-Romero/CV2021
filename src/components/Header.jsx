import React, { Component } from 'react'
import profile from '../img/profile.jpg'

class Header extends Component{

    render(){

      return(    
        <div id='header'>
            <div className="container infoHeader">
                <div className="row">
                    <div className="col-md-6 mt-auto">
                        <div className="foto">
                            <img src={profile} alt="foto" className="mx-auto d-block" />
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="text-center formacion mt-5">
                            <h2 className="display-4 ">Formación</h2>
                            <p>Instituto Politecnico Nacional<br/>
                            Escuela Superior de Ingenieria Mecanica y Electrica<br/>
                            Especialidad: Computacion<br/>
                            2012-2017
                            </p>
                            <p>Idiomas: Español-natal, Ingles intermedio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
    }
}
export default Header