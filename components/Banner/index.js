import React, {useState, useEffect} from 'react'

import Carousel from 'nuka-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
    Container
} from './styles.js'

export default function Banner({height}) {

    const [image, setImage] = useState('/bannerHome1.webp')
    const [contador, setContador] = useState(0)
    const [windowWidth, setWindowWidth] = useState(Number)

    useEffect(() =>{
        setTimeout(()=>{
            setContador(contador +1)
            },8000)
    },[])

    useEffect(() =>{
        setWindowWidth(screen.width)

        console.log(screen.width)
    },[])

    return (
        <Container height = '500' >
             <Carousel 
             autoplay
             autoplayInterval = {8000}
             renderCenterLeftControls={({ previousSlide }) => (
                <button style = {{display: 'none'}} onClick={previousSlide}/>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button style = {{display: 'none'}}  onClick={nextSlide}/>
            )}  >
                    <img src={windowWidth > 452? "/Banner.svg": 'banner1Mobile.jpeg'}/>

                    <img src={windowWidth > 452? "/bannerHome1.webp": 'banner2Mobile.png'}/>
            
            </Carousel>
        </Container>
    )
}
