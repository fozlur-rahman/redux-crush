import React from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = ({ count, onIncrement, onDecrement }) => {
    return (
        <div className="h-auto p-5 flex flex-col justify-center items-center bg-white shadow rounded space-y-5">
            <Count count={count} />
            <div className="flex   space-x-5">
                <Button type={"danger"} hander={onIncrement}>
                    Incress
                </Button>
                <Button hander={onDecrement}>Deccress</Button>
            </div>
        </div>
    );
};

export default Counter;
