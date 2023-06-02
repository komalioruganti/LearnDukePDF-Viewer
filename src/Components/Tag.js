import React from "react";

export default function Tag({ tagname }) {
    return (
        <>
            <div className="tag h-6 w-10 my-1 mx-2 p-1 bg-orange-500 text-xs text-white rounded-2xl font-Roboto text-center">{tagname}</div>
        </>
    );
}
