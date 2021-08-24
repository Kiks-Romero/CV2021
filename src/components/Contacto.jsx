import { Component } from "react";
// import '../fonts/css/all.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMobile, faAt, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
 
class Contacto extends Component{
    render(){
        return(
            <section id="contacto" className="cont">
        <div className="container text-center datos">
            <p><FontAwesomeIcon icon={faMobile}/> : 5531331678</p>
            <p><FontAwesomeIcon icon={faAt}/> : luiskiqueromero@gmail.com</p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt}/> : Pachuca de soto</p>
        </div>
    </section>
        )
    }
}
export default Contacto