// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'


// const NavLinks = [
//     {
//         name: 'Home',
//         to: '/',
//     },
//     {
//         name: 'About',
//         to: '/about',
//     },
//     {
//         name: 'Contact',
//         to: '/contact',
//     },
//     {
//         name: 'Counter',
//         to: '/counter'
//     },
//     {
//         name: 'Password-Generator',
//         to: '/password'
//     },
//     {
//         name: 'GitHub',
//         to: '/github'
//     }


// ]

// function Header() {
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false)

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen)
//     }

//     return (
//         <header className=" w-full z-20 bg-white sticky top-0 shadow">
//             <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
//                 <div className="inline-flex items-center space-x-2">
//                     <Link className='text-cyan-600 font-bold text-xl' to='/'><span>React.Js</span></Link>
//                 </div>
//                 <div className="hidden grow items-start lg:flex">
//                     <ul className="ml-12 inline-flex space-x-8">
//                         {NavLinks.map((item) => (
//                             <li key={item.name}>
//                                 <NavLink
//                                     to={item.to}
//                                     className={({ isActive }) => `inline-flex ${isActive ? "text-cyan-500" : "text-gray-800"} items-center text-sm font-semibold  hover:text-cyan-500 duration-200`}>
//                                     {item.name}
//                                 </NavLink>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="hidden space-x-2 lg:block">
//                     <button
//                         type="button"
//                         className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                     >
//                         Sign In
//                     </button>
//                     <button
//                         type="button"
//                         className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                     >
//                         Log In
//                     </button>
//                 </div>
//                 <div className="lg:hidden">
//                     <Menu onClick={toggleMenu} className="h-6 w-6  cursor-pointer" />
//                 </div>
//                 {isMenuOpen && (
//                     <div className="absolute  inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
//                         <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
//                             <div className="px-5 pb-6 pt-5">
//                                 <div className="flex items-center justify-between">
//                                     <div className="inline-flex items-center space-x-2">
//                                         <span className="font-bold text-cyan-600">React.Js</span>
//                                     </div>
//                                     <div className="-mr-2">
//                                         <button
//                                             type="button"
//                                             onClick={toggleMenu}
//                                             className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                                         >
//                                             <span className="sr-only">Close menu</span>
//                                             <X className="h-6 w-6" aria-hidden="true" />
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="mt-6 ">
//                                     <nav className="grid gap-y-4">
//                                         {NavLinks.map((item) => (
//                                             <NavLink
//                                                 to={item.to}
//                                                 className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50">
//                                                 {item.name}

//                                             </NavLink>
//                                         ))}
//                                     </nav>
//                                 </div>
//                                 <div className="mt-2 space-y-2">
//                                     <button
//                                         type="button"
//                                         className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                                     >
//                                         Sign In
//                                     </button>
//                                     <button
//                                         type="button"
//                                         className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                                     >
//                                         Log In
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </header>
//     )
// }
// export default Header



















import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NavLinks = [
    {
        name: 'Home',
        to: '/',
    },
    {
        name: 'About',
        to: '/about',
    },
    {
        name: 'Contact',
        to: '/contact',
    },
    {
        name: 'Counter',
        to: '/counter'
    },
    {
        name: 'Password-Generator',
        to: '/password'
    },
    {
        name: 'GitHub',
        to: '/github'
    }
]

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1024)
        if (window.innerWidth >= 1024) {
            setIsMenuOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <header className="w-full z-20 bg-white sticky top-0 shadow transition-all duration-300">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <Link className='text-cyan-600 font-bold text-xl' to='/'><span>React.Js</span></Link>
                </div>
                <div className={`grow items-start transition-all duration-300 ${isDesktop ? 'flex' : 'hidden'}`}>
                    <ul className="ml-12 inline-flex space-x-8">
                        {NavLinks.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) => `inline-flex items-center text-sm font-semibold ${isActive ? "text-cyan-500" : "text-gray-800"} hover:text-cyan-500 duration-200`}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`space-x-2 transition-all duration-300 ${isDesktop ? 'block' : 'hidden'}`}>
                    <button
                        type="button"
                        className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Sign In
                    </button>
                    <button
                        type="button"
                        className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Log In
                    </button>
                </div>
                <div className={`lg:hidden transition-all duration-300 ${isDesktop ? 'hidden' : 'block'}`}>
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                <div className={`absolute inset-x-0 top-0 z-50 origin-top-right transform transition-transform duration-300 lg:hidden ${isMenuOpen ? 'scale-y-100 ' : 'scale-y-0  pointer-events-none'}`}>
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pb-6 pt-5">
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center space-x-2">
                                    <span className="font-bold text-cyan-600">React.Js</span>
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        onClick={toggleMenu}
                                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <X className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-4">
                                    {NavLinks.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.to}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50">
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </nav>
                            </div>
                            <div className="mt-2 space-y-2">
                                <button
                                    type="button"
                                    className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Sign In
                                </button>
                                <button
                                    type="button"
                                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
