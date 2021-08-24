import { Component } from "react";
import {skills} from "../data/data.json"
import ListItem from "./ListItem"
import PicSkill from "./PicSkill";


class AcercaDe extends Component{
    constructor(props){
        super(props)
        this.state={id:0,icon:"base"}
  
    }

    _handleHover(id,icon) {
        this.setState({id,icon})
    }

    render(){
        return(
            <div id="acercade" className="fondo">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-group list-group-flush text-center text-primary">
                                {skills.map(skill => 
                                    (
                                        <>
                                            <ListItem hoverPadre={this._handleHover.bind(this)} key={skill.key}  skills={skill}/>
                                        </>
                                    ))
                                }
                            </ul>
                        </div>
                        <PicSkill id={this.state.id} icon={this.state.icon}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default AcercaDe