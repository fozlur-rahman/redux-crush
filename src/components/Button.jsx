import React from "react";

const Button = ({ children, type, hander }) => {
    return (
        <div
            onClick={hander}
            className={`${
                type === "danger" ? "bg-red-500" : "bg-green-500"
            } rounded py-1 px-4 text-slate-50 font-semibold cursor-pointer`}
        >
            {children}
        </div>
    );
};

export default Button;
