import React from "react";

function ModernInterior() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="md:w-7/12 w-full ">
            <div className="image-grid justify-between grid grid-cols-12 grid-row-13 relative">
              <div className="relative grid  col-start-1 col-end-9 row-start-1 row-end-8">
                {" "}
                <img
                  className="rounded-xl"
                  src="images/img-grid-1.jpg"
                  alt=""
                />
              </div>
              <div className="relative grid ps-4 col-start-9 col-end-13 row-start-1 row-end-6">
                <img
                  className="rounded-xl"
                  src="images/img-grid-2.jpg"
                  alt=""
                />
              </div>
              <div className="relative grid pt-4 col-start-7 col-end-13 row-start-6 row-end-13">
                <img
                  className="rounded-xl"
                  src="images/img-grid-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="md:w-5/12 w-full ps-5 ">
            <div classname="content">
              <h2 className="text-4xl text-gray-800 font-medium ">
                We Help You Make Modern Interior Design
              </h2>
              <p className="text-gray-400 leading-7">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada
              </p>

              <ul className=""></ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModernInterior;
