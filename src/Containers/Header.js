import {Navbar} from './Navbar'

import React from 'react'
// import { Alert } from './Alert'

export const Header = (props) => {
    return (
        <div >
            <Navbar navBrand = "Text Utils" home= "Home" about = "About" mode = {props.mode} toggler ={props.toggler}/>
            {/* <Navbar  about = "About" /> */}
            {/* <Alert alert={props.alert}/> */}
        </div>
    )
}
