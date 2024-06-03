import React from 'react'
import Material from '../Components/Material'
import WhyChooseUs from '../Components/WhyChooseUs'
import Homepage from '../Components/HomepageHero'
import ModernInterior from '../Components/ModernInterior'
import ReviewSlider from '../Components/ReviewSlider'
import Blogs from '../Components/Blogs'

export default function Home() {
    return (
        <>
            <Homepage />
            <Material />
            <WhyChooseUs />
            <ModernInterior />
            <ReviewSlider />
            <Blogs />
        </>
    )
}


