import React from "react";
import styled, { css } from 'styled-components';
import { NavLink } from "react-router-dom";
import Burger from "./Burger";
import { BsInstagram, BsLinkedin, BsLink, BsFacebook } from "react-icons/bs";

const SocialsCont = styled.div`
    padding: 18px 10px;
    display: flex;
    column-gap: 10px;

    *:hover{
        color:white !important;
    }
`

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

    & span{
        transition: 1s;
      }


    & span:hover {
        font-size: 7vw;
    }
  
   

    flex-flow: column nowrap;
    display: flex;
    background-color: #468845;
    position: fixed;
    flex-direction: column;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.5s ease-in-out;

    NavLink {
        color: #fff;
    }
    
`

function RightNavbar({ open }) {

    return (
        <Ul open={open}>
            <div className="rightNavbarflex">

                <h3>&lt;</h3>
                <NavLink
                    to={'/'} onClick={<Burger open={!open} />} style={{ textDecoration: "none", color: 'white', fontSize: '5vw' }}>
                    <span>Home </span>
                </NavLink>
                <h3>&gt;</h3>
            </div>
            <NavLink
                to="/about" onClick={<Burger open={!open} />} style={{ textDecoration: "none", color: 'white', fontSize: '5vw' }}>
                <span> About Us </span>
            </NavLink>
            <NavLink
                to="/program" onClick={<Burger open={!open} />} style={{ textDecoration: "none", color: 'white', fontSize: '5vw' }}>
                <span> Programme </span>
            </NavLink>

            <NavLink
                to="/faq" onClick={<Burger open={!open} />} style={{ textDecoration: "none", color: 'white', fontSize: '5vw' }}>
                <span> FAQ </span>
            </NavLink>
            <NavLink
                to="https://forms.gle/GvFEWiH4yMVDESNr5" target="_none" onClick={<Burger open={!open} />} style={{ textDecoration: "none", color: 'white', fontSize: '5vw' }}>
                <span> Register </span>
            </NavLink>
            <SocialsCont>
                <NavLink target="_blank" to="https://www.instagram.com/excode_exeter/" className="socialBtn"><BsInstagram /></NavLink>
                <NavLink target="_blank" to="https://www.linkedin.com/company/google-developer-student-club-exeter/" className="socialBtn"><BsLinkedin /></NavLink>
                <NavLink target="_blank" to="https://linktr.ee/gdscexeter" className="socialBtn"><BsLink /></NavLink>
            </SocialsCont>
        </Ul>
    )
}

export default RightNavbar;