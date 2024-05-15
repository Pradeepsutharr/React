import { useState, useEffect } from "react";

import React from 'react'

function Counter() {

    let [count, setcount] = useState(0);
    //count is a variable which will be updated my setcount function

    const addValue = () => {
        // console.log('value Added',Math.floor(Math.random()+1));
        // count = count + 1;
        // setcount(count);
        // console.log("clicked", count);

        if (count < 7) {
            count = count + 1;
            setcount(count);
            console.log("value", count);
        }
    };

    const removeValue = () => {
        // count = count - 1;
        // setcount(count);
        // console.log("clicked", count);

        if (count > 0) {
            count = count - 1;
            setcount(count);
            console.log("value", count);
        }
    };

    return (
        <>
            <div className=" bg-gray-900 text-white py-20 flex  flex-col gap-3 text-center">
                <h1 className="text-6xl font-bold">{count}</h1>
                <p className="font-medium text-2xl">Current Count is : {count}</p>
                <div><button className="bg-black border border-gray-200 py-2 px-3 rounded-md text-white " onClick={addValue}>Add Count</button></div>
                <div><button className="bg-black border border-gray-200 py-2 px-3 rounded-md text-white sss" onClick={removeValue}>Remove Count</button></div>
            </div>
        </>
    );
}

export default Counter
