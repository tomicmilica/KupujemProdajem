import React from 'react'
import { Nav, Bars, NavManu, NavLink, NavBtnLink, NavBtn } from './Navbar'

export const NavbarIndex = () => {
    const signOut = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>
            <Nav>
                <NavLink to="/" />
                <Bars />
                <NavManu>
                    <NavLink to="/"> Home </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/login">Sign in</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to="/register">Register</NavBtnLink>
                    </NavBtn>
                    {localStorage.getItem('token') && <NavBtn>
                        <NavBtnLink to="/addAd">Add new ad</NavBtnLink>
                    </NavBtn>
                    }
                    {localStorage.getItem('token') && <NavBtn>
                        <NavBtnLink to="/" onClick={signOut}>Sign out</NavBtnLink>
                    </NavBtn>
                    }
                </NavManu>
            </Nav>
        </>
    );
}