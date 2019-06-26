import React, { Component, MouseEvent } from 'react'
import './Carousel.css'
import Icarousel from '../../interfaces/CarouselInterface'
import data from '../../data/Carousel'
export class Carousel extends Component<any, any> {
    slideTimer: any;
    constructor(props: any) {
        super(props)
        console.log(props)
        
        this.state = {
            images: data,
            currentImageIndex: 0
        }
        this.slideTimer=""
    }
    componentDidMount () {
      this.slideTimer=setInterval(()=> {
            this.nextSlide()
            console.log(this.state.currentImageIndex)
        },3000)
        
    }
    componentWillMount(){
        clearInterval(this.slideTimer);
    }
   private randomSlide=(selectedIndex: number):void=> {
        console.log(selectedIndex);
        this.setState({
            currentImageIndex: selectedIndex
        })
    }
    private previousSlide=():void=> {
        console.log('previous Slide')
        const lastIndex = this.state.images.length - 1
        const { currentImageIndex } = this.state
        const shouldResetIndex = currentImageIndex === 0
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1

        this.setState({
            currentImageIndex: index
        })
    }
    
    private nextSlide() {
        console.log('next Slide')
        const lastIndex = this.state.images.length - 1
        const { currentImageIndex } = this.state
        const shouldResetIndex = currentImageIndex === lastIndex
        const index = shouldResetIndex ? 0 : currentImageIndex + 1

        this.setState({
            currentImageIndex: index
        })
    }
    render() {
        return <div className="Slideshow-container">
                {this.state.images.map((item: any, index: number) => {
                    
                    return (
                        <div style={{ display: (index === this.state.currentImageIndex) ? 'block' : '' }} className={`mySlides fade`}>
                           
                                <div  className="carousel-inner">
                                    <div className="carousel-item" style={{ backgroundColor: (index === this.state.currentImageIndex) ? 'red' : 'yellow' }}>
                                        <img src={item.url} style={{width:'100%'}} className="img-responsive" />
                                        <p className="carousel-image-label">{item.title}</p>

                                    </div>

                                </div>

                            
                        </div>
                   )
                })}
            <div className="carousel-caption">
                <p>
                    <button type="button" className="btnPrev" onClick={(event: MouseEvent) => this.previousSlide()}>&lt;</button>
                    <button type="button" className="btnNext" onClick={(event: any) => this.nextSlide()}>&gt;</button>
                </p>
                <div className="btnlistCarousel">
                    {this.state.images.map((item: [], index: number) => {
                        return (
                            <a className={`dot slider ${(index === this.state.currentImageIndex) ? 'active' : ''} `} onClick={(e: any) => this.randomSlide(index)}></a>
                            // <button type="button" onClick={(event: any) => this.randomSlide(index)}>{index}</button>
                        )
                    })}
                </div>
                

            </div>
        </div>
    }
}

export default Carousel


interface Istate{
    currentImageIndex:number;
    images: Array<Icarousel>
}