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
                    <ButtonFaq title={'Who runs ExCode?'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est at tellus rhoncus, ac ornare nisl viverra. Nullam consequat tristique nunc auctor ultricies. Nullam sollicitudin molestie placerat. Suspendisse laoreet turpis et lorem tincidunt, tincidunt commodo sapien scelerisque. Nam tristique elementum aliquet. Praesent a semper libero. Morbi dui orci, laoreet id ex et, commodo tempor purus. Pellentesque faucibus diam sed molestie accumsan. Quisque nec iaculis ante. Proin lacinia nunc sed lorem cursus, ac sollicitudin dui cursus. Nullam ut imperdiet odio. Duis gravida tortor leo. Integer lacinia elementum placerat. Fusce odio ante, mattis eu purus et, consequat tempus felis. Praesent eros ante, venenatis in maximus sit amet, dignissim vel arcu. Nam tempor lobortis elementum. '} />
                    <ButtonFaq title={'When does the bootcamp start?'} message={'The bootcamp runs term 1 of every academic year, with classes on Tuesdays at 18:30. The bootcamp this year starts on the 28th September!'} />
                    <ButtonFaq title={'Do I need any prior experience?'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est at tellus rhoncus, ac ornare nisl viverra. Nullam consequat tristique nunc auctor ultricies. Nullam sollicitudin molestie placerat. Suspendisse laoreet turpis et lorem tincidunt, tincidunt commodo sapien scelerisque. Nam tristique elementum aliquet. Praesent a semper libero. Morbi dui orci, laoreet id ex et, commodo tempor purus. Pellentesque faucibus diam sed molestie accumsan. Quisque nec iaculis ante. Proin lacinia nunc sed lorem cursus, ac sollicitudin dui cursus. Nullam ut imperdiet odio. Duis gravida tortor leo. Integer lacinia elementum placerat. Fusce odio ante, mattis eu purus et, consequat tempus felis. Praesent eros ante, venenatis in maximus sit amet, dignissim vel arcu. Nam tempor lobortis elementum. '} />
                    <ButtonFaq title={'Are there any application requirements?'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est at tellus rhoncus, ac ornare nisl viverra. Nullam consequat tristique nunc auctor ultricies. Nullam sollicitudin molestie placerat. Suspendisse laoreet turpis et lorem tincidunt, tincidunt commodo sapien scelerisque. Nam tristique elementum aliquet. Praesent a semper libero. Morbi dui orci, laoreet id ex et, commodo tempor purus. Pellentesque faucibus diam sed molestie accumsan. Quisque nec iaculis ante. Proin lacinia nunc sed lorem cursus, ac sollicitudin dui cursus. Nullam ut imperdiet odio. Duis gravida tortor leo. Integer lacinia elementum placerat. Fusce odio ante, mattis eu purus et, consequat tempus felis. Praesent eros ante, venenatis in maximus sit amet, dignissim vel arcu. Nam tempor lobortis elementum. '} />
                    <ButtonFaq title={'What do I need to do to receive my certificate?'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est at tellus rhoncus, ac ornare nisl viverra. Nullam consequat tristique nunc auctor ultricies. Nullam sollicitudin molestie placerat. Suspendisse laoreet turpis et lorem tincidunt, tincidunt commodo sapien scelerisque. Nam tristique elementum aliquet. Praesent a semper libero. Morbi dui orci, laoreet id ex et, commodo tempor purus. Pellentesque faucibus diam sed molestie accumsan. Quisque nec iaculis ante. Proin lacinia nunc sed lorem cursus, ac sollicitudin dui cursus. Nullam ut imperdiet odio. Duis gravida tortor leo. Integer lacinia elementum placerat. Fusce odio ante, mattis eu purus et, consequat tempus felis. Praesent eros ante, venenatis in maximus sit amet, dignissim vel arcu. Nam tempor lobortis elementum. '} />
                    <ButtonFaq title={'Can I join class remotely?'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est at tellus rhoncus, ac ornare nisl viverra. Nullam consequat tristique nunc auctor ultricies. Nullam sollicitudin molestie placerat. Suspendisse laoreet turpis et lorem tincidunt, tincidunt commodo sapien scelerisque. Nam tristique elementum aliquet. Praesent a semper libero. Morbi dui orci, laoreet id ex et, commodo tempor purus. Pellentesque faucibus diam sed molestie accumsan. Quisque nec iaculis ante. Proin lacinia nunc sed lorem cursus, ac sollicitudin dui cursus. Nullam ut imperdiet odio. Duis gravida tortor leo. Integer lacinia elementum placerat. Fusce odio ante, mattis eu purus et, consequat tempus felis. Praesent eros ante, venenatis in maximus sit amet, dignissim vel arcu. Nam tempor lobortis elementum. '} />
                   
                    </div>
                </div>
            </div>
        </>
    );
}



export default Faq;