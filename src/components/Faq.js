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
                    <TypeWriter typing={0.3}><span style={{ color: "#468845" }}>&lt;FAQ&gt;</span></TypeWriter>

                </Title>
            </FaqSection>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='container'>
                    <ButtonFaq title={'What is Ex{code}?'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est at tellus rhoncus, ac ornare nisl viverra. Nullam consequat tristique nunc auctor ultricies. Nullam sollicitudin molestie placerat. Suspendisse laoreet turpis et lorem tincidunt, tincidunt commodo sapien scelerisque. Nam tristique elementum aliquet. Praesent a semper libero. Morbi dui orci, laoreet id ex et, commodo tempor purus. Pellentesque faucibus diam sed molestie accumsan. Quisque nec iaculis ante. Proin lacinia nunc sed lorem cursus, ac sollicitudin dui cursus. Nullam ut imperdiet odio. Duis gravida tortor leo. Integer lacinia elementum placerat. Fusce odio ante, mattis eu purus et, consequat tempus felis. Praesent eros ante, venenatis in maximus sit amet, dignissim vel arcu. Nam tempor lobortis elementum. '} />
                    <ButtonFaq title={'Lorem Ipsum'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est at tellus rhoncus, ac ornare nisl viverra. Nullam consequat tristique nunc auctor ultricies. Nullam sollicitudin molestie placerat. Suspendisse laoreet turpis et lorem tincidunt, tincidunt commodo sapien scelerisque. Nam tristique elementum aliquet. Praesent a semper libero. Morbi dui orci, laoreet id ex et, commodo tempor purus. Pellentesque faucibus diam sed molestie accumsan. Quisque nec iaculis ante. Proin lacinia nunc sed lorem cursus, ac sollicitudin dui cursus. Nullam ut imperdiet odio. Duis gravida tortor leo. Integer lacinia elementum placerat. Fusce odio ante, mattis eu purus et, consequat tempus felis. Praesent eros ante, venenatis in maximus sit amet, dignissim vel arcu. Nam tempor lobortis elementum. '} />
                    <ButtonFaq title={'Lorem Ipsum'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est at tellus rhoncus, ac ornare nisl viverra. Nullam consequat tristique nunc auctor ultricies. Nullam sollicitudin molestie placerat. Suspendisse laoreet turpis et lorem tincidunt, tincidunt commodo sapien scelerisque. Nam tristique elementum aliquet. Praesent a semper libero. Morbi dui orci, laoreet id ex et, commodo tempor purus. Pellentesque faucibus diam sed molestie accumsan. Quisque nec iaculis ante. Proin lacinia nunc sed lorem cursus, ac sollicitudin dui cursus. Nullam ut imperdiet odio. Duis gravida tortor leo. Integer lacinia elementum placerat. Fusce odio ante, mattis eu purus et, consequat tempus felis. Praesent eros ante, venenatis in maximus sit amet, dignissim vel arcu. Nam tempor lobortis elementum. '} />
                    <ButtonFaq title={'Lorem Ipsum'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est at tellus rhoncus, ac ornare nisl viverra. Nullam consequat tristique nunc auctor ultricies. Nullam sollicitudin molestie placerat. Suspendisse laoreet turpis et lorem tincidunt, tincidunt commodo sapien scelerisque. Nam tristique elementum aliquet. Praesent a semper libero. Morbi dui orci, laoreet id ex et, commodo tempor purus. Pellentesque faucibus diam sed molestie accumsan. Quisque nec iaculis ante. Proin lacinia nunc sed lorem cursus, ac sollicitudin dui cursus. Nullam ut imperdiet odio. Duis gravida tortor leo. Integer lacinia elementum placerat. Fusce odio ante, mattis eu purus et, consequat tempus felis. Praesent eros ante, venenatis in maximus sit amet, dignissim vel arcu. Nam tempor lobortis elementum. '} />
                    <ButtonFaq title={'Lorem Ipsum'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est at tellus rhoncus, ac ornare nisl viverra. Nullam consequat tristique nunc auctor ultricies. Nullam sollicitudin molestie placerat. Suspendisse laoreet turpis et lorem tincidunt, tincidunt commodo sapien scelerisque. Nam tristique elementum aliquet. Praesent a semper libero. Morbi dui orci, laoreet id ex et, commodo tempor purus. Pellentesque faucibus diam sed molestie accumsan. Quisque nec iaculis ante. Proin lacinia nunc sed lorem cursus, ac sollicitudin dui cursus. Nullam ut imperdiet odio. Duis gravida tortor leo. Integer lacinia elementum placerat. Fusce odio ante, mattis eu purus et, consequat tempus felis. Praesent eros ante, venenatis in maximus sit amet, dignissim vel arcu. Nam tempor lobortis elementum. '} />
                    <ButtonFaq title={'Lorem Ipsum'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est at tellus rhoncus, ac ornare nisl viverra. Nullam consequat tristique nunc auctor ultricies. Nullam sollicitudin molestie placerat. Suspendisse laoreet turpis et lorem tincidunt, tincidunt commodo sapien scelerisque. Nam tristique elementum aliquet. Praesent a semper libero. Morbi dui orci, laoreet id ex et, commodo tempor purus. Pellentesque faucibus diam sed molestie accumsan. Quisque nec iaculis ante. Proin lacinia nunc sed lorem cursus, ac sollicitudin dui cursus. Nullam ut imperdiet odio. Duis gravida tortor leo. Integer lacinia elementum placerat. Fusce odio ante, mattis eu purus et, consequat tempus felis. Praesent eros ante, venenatis in maximus sit amet, dignissim vel arcu. Nam tempor lobortis elementum. '} />
                    <ButtonFaq title={'Lorem Ipsum'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est at tellus rhoncus, ac ornare nisl viverra. Nullam consequat tristique nunc auctor ultricies. Nullam sollicitudin molestie placerat. Suspendisse laoreet turpis et lorem tincidunt, tincidunt commodo sapien scelerisque. Nam tristique elementum aliquet. Praesent a semper libero. Morbi dui orci, laoreet id ex et, commodo tempor purus. Pellentesque faucibus diam sed molestie accumsan. Quisque nec iaculis ante. Proin lacinia nunc sed lorem cursus, ac sollicitudin dui cursus. Nullam ut imperdiet odio. Duis gravida tortor leo. Integer lacinia elementum placerat. Fusce odio ante, mattis eu purus et, consequat tempus felis. Praesent eros ante, venenatis in maximus sit amet, dignissim vel arcu. Nam tempor lobortis elementum. '} />
                    <ButtonFaq title={'Lorem Ipsum'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est at tellus rhoncus, ac ornare nisl viverra. Nullam consequat tristique nunc auctor ultricies. Nullam sollicitudin molestie placerat. Suspendisse laoreet turpis et lorem tincidunt, tincidunt commodo sapien scelerisque. Nam tristique elementum aliquet. Praesent a semper libero. Morbi dui orci, laoreet id ex et, commodo tempor purus. Pellentesque faucibus diam sed molestie accumsan. Quisque nec iaculis ante. Proin lacinia nunc sed lorem cursus, ac sollicitudin dui cursus. Nullam ut imperdiet odio. Duis gravida tortor leo. Integer lacinia elementum placerat. Fusce odio ante, mattis eu purus et, consequat tempus felis. Praesent eros ante, venenatis in maximus sit amet, dignissim vel arcu. Nam tempor lobortis elementum. '} />
                    <ButtonFaq title={'Lorem Ipsum'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est at tellus rhoncus, ac ornare nisl viverra. Nullam consequat tristique nunc auctor ultricies. Nullam sollicitudin molestie placerat. Suspendisse laoreet turpis et lorem tincidunt, tincidunt commodo sapien scelerisque. Nam tristique elementum aliquet. Praesent a semper libero. Morbi dui orci, laoreet id ex et, commodo tempor purus. Pellentesque faucibus diam sed molestie accumsan. Quisque nec iaculis ante. Proin lacinia nunc sed lorem cursus, ac sollicitudin dui cursus. Nullam ut imperdiet odio. Duis gravida tortor leo. Integer lacinia elementum placerat. Fusce odio ante, mattis eu purus et, consequat tempus felis. Praesent eros ante, venenatis in maximus sit amet, dignissim vel arcu. Nam tempor lobortis elementum. '} />
                    </div>
                </div>
            </div>
        </>
    );
}



export default Faq;