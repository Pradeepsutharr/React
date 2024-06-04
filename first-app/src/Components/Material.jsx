import React from 'react'
import { Link } from 'react-router-dom'
function Material() {
    return (
        <section className='crafted py-20 bg-gray-100'>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-y-5 py-8 ">
                    <div className="w-full md:w-1/4 p-2">
                        <div className="text">
                            <h2 className='text-4xl text-gray-800 font-medium'>Crafted with excellent material.</h2>
                            <p className='text-gray-600 my-7 '>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            <button className='duration-300 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-900 border-gray-800 px-7 py-3'>Explore</button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 p-2">
                        <Link className="product-card text-center pb-10 block">
                            <div className="product-img mb-4"><img className='w-full' src="images/product-1.png" alt="" /></div>
                            <h3 className='text-lg text-gray-800 font-medium mb-2'>Nordic Chair</h3>
                            <h2 className='text-gray-800 font-bold text-2xl'>$50.00</h2>
                            <div className="add-btn">
                                <Link className='absolute left-2/4 translate-x-[-50%] '><i className="p-2 rounded-full !flex justify-center items-center w-[40px] h-[40px] text-white bg-gray-800 fa-solid fa-plus"></i></Link>
                            </div>
                        </Link>
                    </div>

                    <div className="w-full md:w-1/4 p-2">
                        <Link className="product-card text-center pb-10 block">
                            <div className="product-img mb-4"><img className='w-full' src="images/product-2.png" alt="" /></div>
                            <h3 className='text-lg text-gray-800 font-medium mb-2'>Kruzo Aero Chair</h3>
                            <h2 className='text-gray-800 font-bold text-2xl'>$78.00</h2>
                            <div className="add-btn">
                                <Link className='absolute left-2/4 translate-x-[-50%] '><i className="p-2 rounded-full !flex justify-center items-center w-[40px] h-[40px] text-white bg-gray-800 fa-solid fa-plus"></i></Link>
                            </div>
                        </Link>
                    </div>

                    <div className="w-full md:w-1/4 p-2">
                        <Link className="product-card text-center pb-10 block">
                            <div className="product-img mb-4"><img className='w-full' src="images/product-3.png" alt="" /></div>
                            <h3 className='text-lg text-gray-800 font-medium mb-2'>Ergonomic Chair</h3>
                            <h2 className='text-gray-800 font-bold text-2xl'>$43.00</h2>
                            <div className="add-btn">
                                <Link className='absolute left-2/4 translate-x-[-50%] '><i className="p-2 rounded-full !flex justify-center items-center w-[40px] h-[40px] text-white bg-gray-800 fa-solid fa-plus"></i></Link>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Material
