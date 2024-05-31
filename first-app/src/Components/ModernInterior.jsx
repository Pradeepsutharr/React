import React from 'react'

function ModernInterior() {
    return (
        <section>
            <div className="container mx-auto">
                <div className="row">
                    <div className="md:w-7/12 w-full">
                        <div className="image-grid justify-between grid grid-cols-12 grid-row-12 relative">
                            <div className="relative grid  col-start-1 col-end-8 row-start-1 row-end-7"> <img className='' src="images/img-grid-1.jpg" alt="" /></div>
                            <div className="relative grid ps-4 col-start-8 col-end-12 row-start-1 row-end-6"><img className='' src="images/img-grid-2.jpg" alt="" /></div>
                            <div className="relative grid col-start-6 col-end-12 row-start-6 row-end-12"><img className='' src="images/img-grid-3.jpg" alt="" /></div>



                        </div>
                    </div>

                    <div className="5/12"></div>
                </div>
            </div>

        </section>
    )
}

export default ModernInterior
