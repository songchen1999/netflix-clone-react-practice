import React from "react";
import pz from './pz.png'
import "./Cover.css"

export default function Cover(props){

    return <div className="Cover" style={{backgroundImage: `url(${pz})`, backgroundSize: "cover", backgroundPosition:"center center"}}>

        <div className="Content">
            
            <h1>title</h1>


            <div className="buttonGroup">
            <button>one</button>
            <button>two two</button>
            </div>


            <p>dasfadsfadsfadsssssfadsfadsfasdfadsfdasfadsfdasf</p>
        </div>
        

    </div>

}