import React from "react";
import PropTypes from "prop-types";

function Card({ username, btnText = "Default" }) {
  // here we are injecting variable (username)which we have created in app jsx //
  //btntext's default value will (Click here) if it is not specified in app jsx  // we can use this ({btnTetx || "Click Here"}) this syntax
  return (
    <>
      <div class="relative h-[400px] w-[300px] rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          class="z-0 h-full w-full rounded-lg object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class="text-lg font-semibold text-white">{username}</h1>
          {/* here we passed the variable to get its value in our card  */}
          <p class="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button class="mt-2 hover:bg-white hover:text-black  inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnText} →
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
