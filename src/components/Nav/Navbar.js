import React from "react";
import styled from 'styled-components';
import Burger from "./Burger";
import RightNavbar from "./RightNav";
 ;

const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

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
    return(
        <Nav>
            <div className='logo'>
                <img src="/excode.png" alt="logo" width= "130" />
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar;