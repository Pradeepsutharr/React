import React from 'react'
import Shop from '../Components/Shop'

function ShopPage() {
    return (
        <>
            <section className='bg-[#3b5d50] pt-20 pb-[9rem]'>
                <div className="container mx-auto">
                    <div className="heading">
                        <h2 className='text-6xl font-bold text-white'>Shop</h2>
                    </div>
                </div>
            </section>
            <Shop />
        </>
    )
}

export default ShopPage
