import React from 'react'

export const About = (props) => {
    return (
        <div className="container" style={{backgroundColor: props.mode==='light'?'white':'#262530', color: props.mode==='light'?'black':'white', marginTop:"70px", height:"15rem", padding: "1rem"}}>
            <h2 className="text-center my-3">{props.heading}</h2>
            <p className="text-center" style={{margin:"70px 80px 0 80px"}}>This is a Text Utiliy web application where you can manipulate with a given text like changing every character to its case or lower case and you can also remove extra spaces.</p>
        </div> 
        
    )
}
