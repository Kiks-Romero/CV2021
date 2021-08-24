import React,{Component} from 'react';

class ListItem extends Component{

   hoverHijo(id,icon){
      this.props.hoverPadre(id,icon)
   }

    render(){
     return(
        <>
        <li className="list-group-item">
               <ul onMouseEnter={()=>{
                  this.hoverHijo(this.props.skills.id,this.props.skills.icon)
                  }
               }
               onMouseLeave={()=>{
                  this.hoverHijo(0,"base")
               }}
               >{this.props.skills.skill}
               </ul>
         </li>
        </>
     )
            
    }
 }

export default ListItem;