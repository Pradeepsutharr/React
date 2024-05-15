import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

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
            <section className="mx-auto w-full max-w-7xl">
                <div className="relative  items-center justify-between overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                    <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                            <h2 className="text-4xl font-bold sm:text-5xl">
                                My First React App
                                <span className="hidden sm:block text-4xl">Designer</span>
                            </h2>

                            <Link className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                                to="/"
                            >
                                <svg
                                    fill="white"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>
                                &nbsp; Hire now
                            </Link>
                        </div>
                    </div>

                    <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                        <img className="w-96 animate-spin-slow" src="https://cdn.sanity.io/images/3do82whm/next/db46b4cac4f279d6f29c4a10e289307d7bd2df31-1000x667.png?w=1000&h=667&fit=clip&auto=format" alt="image1" />
                    </div>
                </div>
            </section>

            <section className='py-10'>
                <div className="container mx-auto">
                    <div className="flex  justify-center  flex-wrap">
                        {cardItems.map((item) => (
                            <div className='xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-2'>
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
