import React from "react"; 

export const Loading = () => {
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse da-3x" fa-fw text-primary></span>
            <p>Loading...</p>
        </div>
    );
}