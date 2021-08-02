import React from 'react'
import { Nav, Bars, NavManu, NavLink, NavBtnLink, NavBtn } from './Navbar'

export const NavbarIndex = () => {
    return (
        <>
            <Nav>
                <NavLink to="/" />
                <Bars />
                <NavManu>
                    <NavLink to="/"> Home </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/register">Register</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to="/addAd">Add new ad</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to="/login">Sing in</NavBtnLink>
                    </NavBtn>
                </NavManu>
            </Nav>
        </>
    );
}