import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ReactTyped } from "react-typed"

const cardItems = [
    {
        image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        title: 'About Macbook',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
        tag1: "#Macbook",
        tag2: '#Apple',
        tag3: '#Laptop',
        btnText: 'Read'
    },
    {
        image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        title: 'About Macbook',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
        tag1: "#Macbook",
        tag2: '#Apple',
        tag3: '#Laptop',
        btnText: 'Read'
    },
    {
        image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        title: 'About Macbook',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
        tag1: "#Macbook",
        tag2: '#Apple',
        tag3: '#Laptop',
        btnText: 'Read'
    },
    {
        image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        title: 'About Macbook',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
        tag1: "#Macbook",
        tag2: '#Apple',
        tag3: '#Laptop',
        btnText: 'Read'
    },

]

function Home() {
    return (
        <>
            <section className='py-10 bg-gray-900'>
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col md:w-1/2 w-full p-2 text-center md:text-left ">
                            <h1 className='text-6xl text-white font-bold '>Hello, Its Me</h1>
                            <h2 className='text-6xl my-5 text-cyan-500 font-bold ' s>Pradeep Suthar</h2>
                            <p className='text-white text-5xl font-regular'>And I'm A <ReactTyped className='text-cyan-500 font-medium' strings={["Designer", "Coder", "Developer"]}
                                typeSpeed={30}
                                backSpeed={30}
                                backDelay={1500}
                                showCursor={false}
                                cursorChar='|'
                                loop
                            /> </p>

                            {/* <a className='border-2 mt-8 text-2xl text-white py-2 px-4 rounded-lg border-cyan-600 inline-block' href="">My Resume</a> */}

                        </div>

                        <div className="col md:w-1/2 w-full p-2"></div>
                    </div>
                </div>
            </section>

            <section className='py-10'>
                <div className="container mx-auto">
                    <div className="grid gap-4 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                        {cardItems.map((item) => (
                            <div className='col'>
                                <div className=" rounded-md border">
                                    <img
                                        src={item.image}
                                        alt="Laptop"
                                        className="h-[200px] w-full rounded-t-md object-cover"
                                    />
                                    <div className="p-4">
                                        <h1 className="inline-flex items-center text-lg font-semibold">
                                            {item.title} &nbsp; <ArrowUpRight className="h-4 w-4" />
                                        </h1>
                                        <p className="mt-3 text-sm text-gray-600">
                                            {item.description}
                                        </p>


                                        <div className="mt-4">
                                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                                {item.tag1}
                                            </span>
                                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                                {item.tag2}
                                            </span>
                                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                                {item.tag3}
                                            </span>
                                        </div>


                                        <button type="button"
                                            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                                            {item.btnText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
