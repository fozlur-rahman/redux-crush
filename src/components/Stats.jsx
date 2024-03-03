import React from "react";

const Stats = ({ totalCount }) => {
    return (
        <div className="bg-white h-auto p-10 text-4xl font-serif italic">
            total: {totalCount}
        </div>
    );
};

export default Stats;
