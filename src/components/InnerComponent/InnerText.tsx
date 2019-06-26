import React, {Component} from 'react'
import box from  '../../interfaces/Box.interface'
import  './InnerText.css'

export class InnerText extends Component<{
  box: box
}> {

   render() {
        const{text1, value1, text2, value2, text3, value3} = this.props.box
        return(
           <div className="innertext">
            <div>
              <p className="text">{text1}</p>
              <span>{value1}</span>
            </div>
            <div>
              <p className="text">{text2}</p>
              <span>{value2}</span>
            </div>
            <div>
              <p className="text">{text3}</p>
              <span>{value3}</span>
            </div>
           </div>
        )

   }
}

export default InnerText
