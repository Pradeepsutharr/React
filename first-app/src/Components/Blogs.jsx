import React from "react";
import { Link } from "react-router-dom";

function Blogs({ blogHeading, allBlog, blogPB, secP }) {
  return (
    <section className={`${secP}  bg-gray-100`}>
      <div className={`container mx-auto ${blogPB} pb-0`}>
        <div className="flex justify-between">
          <h2 className="text-3xl text-gray-800  font-medium">{blogHeading}</h2>
          <Link
            to="/blogs"
            className="underline font-semibold text-gray-800 text-sm"
          >
            {allBlog}
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-y-4">
          <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <Link className="blog-content">
              <div className="blog-img overflow-hidden rounded-2xl">
                <img src="images/post-1.jpg" alt="" />
              </div>
              <div className="blog-text mt-4">
                <h4 className="text-md font-bold mb-1">
                  First Time Home Owner Ideas
                </h4>
                <p className="text-gray-700">
                  by{" "}
                  <span className="font-semibold text-gray-900">
                    Kristin Watson
                  </span>{" "}
                  on{" "}
                  <span className="font-semibold text-gray-900">
                    Dec 19, 2021
                  </span>
                </p>
              </div>
            </Link>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <Link className="blog-content">
              <div className="blog-img overflow-hidden rounded-2xl">
                <img src="images/post-2.jpg" alt="" />
              </div>
              <div className="blog-text mt-4">
                <h4 className="text-md font-bold mb-1">
                  First Time Home Owner Ideas
                </h4>
                <p className="text-gray-700">
                  by{" "}
                  <span className="font-semibold text-gray-900">
                    Kristin Watson
                  </span>{" "}
                  on{" "}
                  <span className="font-semibold text-gray-900">
                    Dec 19, 2021
                  </span>
                </p>
              </div>
            </Link>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <Link className="blog-content">
              <div className="blog-img overflow-hidden rounded-2xl">
                <img src="images/post-3.jpg" alt="" />
              </div>
              <div className="blog-text mt-4">
                <h4 className="text-md font-bold mb-1">
                  First Time Home Owner Ideas
                </h4>
                <p className="text-gray-700">
                  by{" "}
                  <span className="font-semibold text-gray-900">
                    Kristin Watson
                  </span>{" "}
                  on{" "}
                  <span className="font-semibold text-gray-900">
                    Dec 19, 2021
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Blogs;
