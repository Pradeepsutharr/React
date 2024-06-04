import React from 'react'
import Services from '../Components/Services'
import Hero from '../Components/Hero'
import Material from '../Components/Material'
import ReviewSlider from '../Components/ReviewSlider'
function ServicesPage() {
    return (
        <>
            <Hero heading={"Services"} />
            <Services />
            <Material />
            <ReviewSlider />

        </>
    )
}

export default ServicesPage
