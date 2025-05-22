import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsLink, BsFacebook } from "react-icons/bs";

const Section = styled.section`
 padding:20px !important;
  border-top: 1px solid #62b22f !important;
  border-top-width: 50px;
`;

const R1 = styled.section`
 display:flex;
 justify-content: space-between !important ;
 align-items: center;
 `;

const C1 = styled.div`
  display:flex;
  justify-content:left;
  column-gap: 5px;
  max-width:80%;
  min-width:60%;
`;

const C2 = styled.div`
	font-family: 'Raleway', sans-serif, bold ;
	font-style: bold;

`;




function Footer() {


  return (

    <Section className='container-fluid'>


      <R1 className="row" >
        <C1 className="col-md-4">
          <NavLink to="/">
            <div className='logo'>
              <img src="/excode.png" alt="logo" width="130" />
            </div>
          </NavLink>
          <NavLink className="footLink" to="/">Home</NavLink>
          <NavLink className="footLink" to="/about">About Us</NavLink>
          <NavLink className="footLink" to="/program">Programme</NavLink>

          <NavLink target="_blank" to="https://www.instagram.com/excode_exeter/" className="socialBtn"><BsInstagram /></NavLink>
          <NavLink target="_blank" to="https://www.linkedin.com/company/google-developer-student-club-exeter/" className="socialBtn"><BsLinkedin /></NavLink>
          <NavLink target="_blank" to="https://linktr.ee/gdscexeter" className="socialBtn"><BsLink /></NavLink>
        </C1>

        <C2 className="col-md-4">
          Google Developer Student Club - University of Exeter   &copy; {new Date().getFullYear()}
        </C2>
      </R1>




    </Section>
  )
}

export default Footer

