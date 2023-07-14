import React, { useEffect, useState } from "react";

const HomePage = (props) => {
    console.log("Render: HomePage")

    return (
        <div className="home-page">
            <h1>{props.state.Counter}</h1>
            STUFF!
        </div>
    )

}

export default HomePage
