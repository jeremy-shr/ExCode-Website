import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    flex-direction: column !important;
    z-index: 1;

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
    return (
        <Ul open={open}>
             <NavLink
            to={'/'} style={{ textDecoration: "none", color: 'white', fontSize: '53px' }}>
                Home
            </NavLink>
            <NavLink
            to={'/program'} style={{ textDecoration: "none", color: 'white', fontSize: '53px' }}>
                Program
            </NavLink>
            <NavLink
            to={'/about'}  style={{ textDecoration: "none", color: 'white', fontSize: '53px' }}>
                About Us
            </NavLink>
            <NavLink
            to={'/faq'} style={{ textDecoration: "none", color: 'white', fontSize: '53px' }}>
                FAQ
            </NavLink>
        </Ul>
    )
}

export default RightNavbar;