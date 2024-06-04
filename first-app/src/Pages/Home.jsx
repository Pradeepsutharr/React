import React from 'react'
import Material from '../Components/Material'
import WhyChooseUs from '../Components/WhyChooseUs'
import Homepage from '../Components/Hero'
import ModernInterior from '../Components/ModernInterior'
import ReviewSlider from '../Components/ReviewSlider'
import Blogs from '../Components/Blogs'

export default function Home() {
    return (
        <>
            <Homepage heading={"Modern Interior"} headingSpan={"Design Studio"} />
            <Material />
            <WhyChooseUs />
            <ModernInterior />
            <ReviewSlider />
            <Blogs blogHeading={"Recent Blogs"} allBlog={"View All Posts"} blogPB={"lg:pb-20"} secP={"py-20"} />
        </>
    )
}
