import * as C from './styles'
import {NavBar} from '../NavBar'
import React from 'react'
import Logo from '../../assets/images/logo.png'



export const Header = () => {
    return(
        <C.Container>
             <img width="375px" height="115px" src={Logo} alt="Foto" />
            <hr className="h-sm mb-2 bg-white w-full"/>
            <NavBar/>
        </C.Container>
    )
}