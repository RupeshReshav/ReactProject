import React, {Component} from 'react'
import Box from '../Box/Box'
import './BoxList.css'

export class BoxLists extends Component<{
  boxes: any[]
}> {
   render() {
     const { boxes } = this.props

       return <section className="boxlist">
        { boxes.map((box:any, index:number) => {
          return(
            <Box key={box.id} box={box}/>
          )
        }) }
       </section>
   }
}

export default BoxLists
