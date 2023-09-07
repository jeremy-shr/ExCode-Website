import React from "react";
import styled from 'styled-components';
import Burger from "./Burger";
import RightNavbar from "./RightNav";
import { NavLink, Link } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsLink, BsFacebook } from "react-icons/bs";

const FirstContainer = styled.div`
    display:flex;
    column-gap: 20px;

    .socialBtn {
        padding-top: 11px;
    }

    @media screen and (max-width: 370px) {
		.socialBtn {
            display:none;
        }
	  }
`

const Nav = styled.nav`
    width: 100%;
    height: 10%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    position: absolute;

    .logo {
        padding: 15px 0;
    }

    ul {
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        
        li {
            padding: 18px 10px;
        }
    }
`

function Navbar() {
    return (
        <Nav>
            <FirstContainer>
                <NavLink to="/">
                    <div className='logo'>
                        <img src="/excode.png" alt="logo" width="130" />
                    </div>
                </NavLink>
                <NavLink target="_blank" to="https://www.instagram.com/exeter_entrepreneurs/" className="socialBtn"><BsInstagram /></NavLink>
                <NavLink target="_blank" to="https://www.linkedin.com/company/exeter-entrepreneurs-society/?viewAsMember=true" className="socialBtn"><BsLinkedin /></NavLink>
                <NavLink target="_blank" to="https://www.facebook.com/ExeterEntrepreneurs/" className="socialBtn"><BsFacebook /></NavLink>
                <NavLink target="_blank" to="https://linktr.ee/exeterentrepreneurs" className="socialBtn"><BsLink /></NavLink>
            </FirstContainer>
            <Burger />
        </Nav>
    )
}

export default Navbar;