import React, {useState, useEffect} from 'react'

import Carousel from 'nuka-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
    Container
} from './styles.js'

export default function Banner({height}) {

    const [image, setImage] = useState('/bannerHome1.webp')
    const [contador, setContador] = useState(0)

    useEffect(() =>{
        setTimeout(()=>{
            setContador(contador +1)
            },8000)
    },[])

    useEffect(() =>{
        setTimeout(()=>{
            setContador(contador +1)
            },8000)

        switch((contador)){
            case 1 :
                setImage('/Banner.svg')
                break
            
            case 2:
                setImage('/bannerHome1.webp')
                break
        }

        if(contador > 2){
            setContador(0)
        }
    },[contador])

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
            
                    <img src="/Banner.svg"/>
              
    
                    <img src="/bannerHome1.webp"/>
            
            </Carousel>
        </Container>
    )
}
