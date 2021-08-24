import React from 'react';
import img2 from '../img/logosLenguajes.png'
import photoshop from '../img/photoshop.jpeg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHtml5,faCss3,faJs,faSass,faNodeJs,faBootstrap,faWordpress,faGit,faGithub,faReact} from '@fortawesome/free-brands-svg-icons'

const FUENTE =[faHtml5,faCss3,faJs,faSass,faNodeJs,faBootstrap,faWordpress,faGit,faGithub,faReact]

function PicSkill(props){
    return(
        <>
        <div className="col-md-6">
        {props.icon!== "base"
        ?<div className="container text-center datos">
        <p><FontAwesomeIcon className="picSkill" icon={FUENTE[(props.id)-1]} pulse/></p>
        </div>
        :(props.id===11
            ?<img src={photoshop} alt="logos" /* style="width: 100%;" */ className="mt-5 logo"/>
            :<img src={img2} alt="logos" /* style="width: 100%;" */ className="mt-5 logo"/>)
        }     
        </div>
        </>
    )
}

export default PicSkill