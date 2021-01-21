import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/SliderData'

export default function Home() {
    
    return (
        <div>
            <ImageSlider slides={SliderData}/>
            <Hero/>
            <Cards/>
        </div>
    )
}
