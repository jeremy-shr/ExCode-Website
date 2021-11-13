import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import Burger from "./Burger";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    flex-direction: column !important;
    z-index: 10;

    NavLink {
        padding: 18px 10px;
    }

    @media {
        flex-flow: column nowrap;
        display: flex;
        background-color: #468845;
        position: fixed;
        flex-direction: column;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        padding-top: 3.5rem;
        transition: transform 0.5s ease-in-out;

        NavLink {
            color: #fff;
        }
    }
    `

function RightNavbar({open}) {
    const isOpen = true;

    return (
        <Ul open={open}>
             <NavLink
            to={'/'} onClick={<Burger open={!open}/>} style={{ textDecoration: "none", color: 'white', fontSize: '5vw' }}>
                Home
            </NavLink>
            <NavLink
            to={'/about'} onClick={<Burger open={!open}/>}  style={{ textDecoration: "none", color: 'white', fontSize: '5vw' }}>
                About Us
            </NavLink>
            <NavLink
            to={'/program'} onClick={<Burger open={!open}/>} style={{ textDecoration: "none", color: 'white', fontSize: '5vw' }}>
                Program
            </NavLink>
            
            <NavLink
            to={'/faq'} onClick={<Burger open={!open}/>} style={{ textDecoration: "none", color: 'white', fontSize: '5vw' }}>
                FAQ
            </NavLink>
        </Ul>
    )
}

export default RightNavbar;