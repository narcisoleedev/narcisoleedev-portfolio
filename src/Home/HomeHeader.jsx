import React, {useState} from "react";
import '../styles.css'

const HomeHeader = () => {
    const tabsItems = ["projects", "resume"]
    return(
        <>
        <div id="nome">
                        <p style={{fontWeight: "bold"}}>Guilherme Lee</p>
                    </div>
                    <nav id="tabs">
                        <ul id="tabs-list">
                            {
                                tabsItems.map(row=>{
                                    return <li className="tabs-items">{row}</li>;
                                })
                            }
                        </ul>
                    </nav>
        
        </>
    )
}

export default HomeHeader;

