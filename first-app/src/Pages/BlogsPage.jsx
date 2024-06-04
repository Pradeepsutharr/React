import React from 'react'
import Blogs from '../Components/Blogs'
import ReviewSlider from '../Components/ReviewSlider'
import Hero from '../Components/Hero'

function BlogsPage() {
    return (
        <>
            <Hero heading={"Blogs"} />
            <Blogs blogHeading={""} allBlog={""} blogPB={"pb-2"} secP={"pt-20"} />
            <Blogs blogHeading={""} allBlog={""} blogPB={"pb-2"} secP={"py-5"} />
            <Blogs blogHeading={""} allBlog={""} blogPB={"pb-20"} secP={"pb-20"} />
            <ReviewSlider />
        </>
    )
}

export default BlogsPage
