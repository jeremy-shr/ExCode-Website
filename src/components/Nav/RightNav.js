import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    flex-direction: column !important;

    li {
        padding: 18px 10px;
    }

    @media {
        flex-flow: column nowrap;
        display: flex;
        background-color: #0D2538;
        position: fixed;
        flex-direction: column;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100%;
        padding-top: 3.5rem;
        transition: transform 0.5s ease-in-out;

        li {
            color: #fff;
        }
    }
    `

function RightNavbar({open}) {
    return (
        <Ul open={open}>
             <NavLink
            to={'/home'} style={{ textDecoration: "none", color: 'white' }}>
                Home
            </NavLink>
            <NavLink
            to={'/about'}  style={{ textDecoration: "none", color: 'white' }}>
                About Us
            </NavLink>
            <NavLink
            to={'/faq'} style={{ textDecoration: "none", color: 'white' }}>
                FAQ
            </NavLink>
        </Ul>
    )
}

export default RightNavbar;