import React, {Component} from 'react'
import InnerText from '../InnerComponent/InnerText'
import box from  '../../interfaces/Box.interface'
import './Box.css'

export class Box extends Component<{
  box: box
}> {

    onLinkClick = (id: number, text: string, color: string = 'blue') => {
      console.log(id, color)
    }

   render() {
     const { id, text, color} = this.props.box
      return(
         <article className="layout">
             <div className="container">
                  <div className="box" style={{background: color}}>
                    <InnerText key={id} box={this.props.box}/>
                  </div>
                  <h5 onClick={(event: any) => this.onLinkClick(id, text, color)}>{text}</h5>
             </div>
         </article>
      );
   }
}

export default Box
