import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import styled from "styled-components";
import TypeWriter from 'react-typewriter';
import ButtonFaq from './ButtonFaq.js'

import './styles.css';

const Title = styled.h1`
	font-family: "Ubuntu", sans-serif;
	font-style: bold;
	font-size: 53px;
    color: #62B22F
`;

const FaqSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100px;
    background: #fff;
    `;

function Faq() {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    return (
        <>
            <FaqSection>
                <Title>
                    &lt;FAQ&gt;

                </Title>
            </FaqSection>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='container'>
                    <ButtonFaq title={'Who runs ExCode?'} message={'ExCode is a community project of Exeter Entrepreneurs and so the team is chosen by their committee every year to enable the continued growth and success of the bootcamp.'} />
                    <ButtonFaq title={'When can I join the bootcamp?'} message={'The bootcamp runs term 1 of every academic year, with classes on Tuesdays at 18:30. The bootcamp this year starts on the 28th September!'} />
                    <ButtonFaq title={'Do I need any prior experience?'} message={'No prior experience is needed! The course is built to introduce beginners to the fundamentals of programming so we encourage you to join as long as you are motivated and willing to learn.'} />
                    <ButtonFaq title={'Are there any requirements to enroll?'} message={'The only requirement is you must be a member of Exeter Entrepreneurs for you to enrol in the bootcamp. This can be done using your student number on the Exeter Guild Website. '} />
                    <ButtonFaq title={'What do I need to do to receive my certificate?'} message={'There will be a test at the end of the program to assess the skills you have been working on throughout the bootcamp, if you pass then you will be eligible to receive a certificate signed by your TA and our Lead Professor accrediting you in Python. Just make sure you attend all your classes and go over the topics before the final session! '} />
                    <ButtonFaq title={'Can I join class remotely?'} message={'Yes of course, all our classes can be joined through Zoom and are recorded so you can watch them after the session is over. Just make sure to let your TA know that you won’t be attending in person! '} />
                   
                    </div>
                </div>
            </div>
        </>
    );
}



export default Faq;