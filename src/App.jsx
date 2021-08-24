import React, {Component} from 'react'
import "bootstrap"
import Nav from './components/Nav'
import Header from  './components/Header'
import './css/main.css'
import AcercaDe from './components/Acercade'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

class App extends Component{
    render(){
      return(
        <>
        <Nav/>
        <Header/>
        <AcercaDe/>
        <Contacto/>
        <Footer/>
        </>
      );
    }
}

export default App;