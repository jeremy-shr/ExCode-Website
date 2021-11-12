import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Section = styled.section `
 padding:40px !important;
  border-top: 1px solid #62b22f !important;
  border-top-width: 50px;

`;

const R1 = styled.section `
 display:flex;
 justify-content: space-between !important ;
 align-items: center;
 `
;

const C1 = styled.div `

  display:flex;
  justify-content: space-between !important ;
`;

const C2 = styled.div `
	font-family: 'Raleway', sans-serif, bold ;
	font-style: bold;
    right: 100px ;

`;




function Footer() {

   
    return  (
       
            <Section>
            
                 
                <R1 className = "row1-footer" >
                   <C1 className = "col-md-4" >
                        <NavLink  to="/">
                           <div className='logo'>
                                    <img src="/excode.png" alt="logo" width= "130" />
                                </div>
                         </NavLink>
                      
                            <NavLink  className = "footLink" to="/">Home</NavLink>
                            <NavLink className = "footLink" to="/about">About Us</NavLink>
                            <NavLink  className = "footLink" to="/program">Program</NavLink>
                            <NavLink  className = "footLink"to="/faq">FAQ</NavLink>
                        
                    </C1>
                     <C2 className = "col-md-4">
                        Exeter Entrepreneurs Community Project   &copy; {new Date().getFullYear()}
                    </C2>

                      
                 </R1>
                     
                   
        
               
            </Section>
        ) 
                    }

export default Footer

