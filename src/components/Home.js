import React from "react";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";

const Title = styled.h1`
	font-family: 'Raleway', sans-serif;
	font-style: bold;
	font-size: 53px;
`;

const R1 = styled.section`
  background-image: url("/course.png");
  height: 600px;
  background-size:cover;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const R2 = styled.section`
	height: 950px;
	display: flex !important;
  	flex-direction: column;
  	align-items: center;
  	justify-content: center;
`;

const R3 = styled.section`
	height: 250px;
	background-color: #468845;
	display: flex !important;
  	flex-direction: column;
  	align-items: center;
  	justify-content: center;
`;

const Signup = styled.h2`
	color: #fff;
	font-family: 'Ubuntu';
	font-size: 50px;
	font-weight: bold;
`;

const Paragraph = styled.p`
	font-size: 20px;
	margin-bottom: 75px;
	text-align: justify;
`;

const SubTitle = styled.h2`
	color: #62b22f;
	font-size: 60px;
	font-family: 'Ubuntu', sans-serif;
`;

const Bracket1 = styled.h1 `

color: #62b22f;
font-size: 150px;
font-family: 'Ubuntu', sans-serif;

`;

const Bracket2 = styled.h1 `

color: #62b22f;
font-size: 150px;
font-family: 'Ubuntu', sans-serif;



`;

function Home() {
	return (
		<>
		<R1 className = "row-landing-sec1">
		
		   <div className="col-md-6">
				
				<Title>The Leading Student Run</Title>
				<Title>Coding Bootcamp In The UK</Title> 
				<Paragraph>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Facilis, esse cupiditate. Quas, praesentium asperiores? Ea,
					voluptates provident dicta enim nostrum facilis commodi quas
					illum officiis libero quod sequi nemo error.
				</Paragraph>
				
			  </div>
			 
			</R1>
			

		
			<R2 className = "row-landing-sec2">
			  <div className="col-md-8">
			  <Bracket1><div 
      dangerouslySetInnerHTML={{__html: "{"}}
    /></Bracket1>
				<SubTitle>What's ExCode:</SubTitle>
				<Paragraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Consequuntur corrupti, ducimus, qui iste incidunt
					perspiciatis saepe asperiores commodi magni beatae quis odit
					dicta blanditiis officiis recusandae id assumenda! Unde,
					dignissimos?
				</Paragraph>
				 
	
			
			<SubTitle>Why Apply:</SubTitle>
				<Paragraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Consequuntur corrupti, ducimus, qui iste incidunt
					perspiciatis saepe asperiores commodi magni beatae quis odit
					dicta blanditiis officiis recusandae id assumenda! Unde,
					dignissimos?
				</Paragraph>
				
		
			<SubTitle>For Whom:</SubTitle>
				<Paragraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Consequuntur corrupti, ducimus, qui iste incidunt
					perspiciatis saepe asperiores commodi magni beatae quis odit
					dicta blanditiis officiis recusandae id assumenda! Unde,
					dignissimos?
				</Paragraph>
				<Bracket2><div 
      dangerouslySetInnerHTML={{__html: "}"}}
    /></Bracket2>
				</div>
				</R2>

			<R3 className="row-landing-sec3">
			<div className="col-md-6">
				<Signup>Want to join the Bootcamp?</Signup>
				<Button className="program-button" variant="outline-success" href="/program" size="lg">Program</Button>{' '}
			</div>
			

			</R3>
		</>
	);
}

export default Home;
