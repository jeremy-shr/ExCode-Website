import React from "react";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";

const Title = styled.h1`
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

const Paragraph = styled.p``;

const SubTitle = styled.h2`
	
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
			

			{/* <SubWrapper> */}
			<div className = "row-landing-sec2">
			  <div className="col-md-8">
				<SubTitle>What's ExCode?</SubTitle>
				<Paragraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Consequuntur corrupti, ducimus, qui iste incidunt
					perspiciatis saepe asperiores commodi magni beatae quis odit
					dicta blanditiis officiis recusandae id assumenda! Unde,
					dignissimos?
				</Paragraph>
				  </div>
				</div>
			{/* </SubWrapper> */}
			<div className = "row-landing-sec3">
			  <div className="col-md-8">
			<SubTitle>Why Apply?</SubTitle>
				<Paragraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Consequuntur corrupti, ducimus, qui iste incidunt
					perspiciatis saepe asperiores commodi magni beatae quis odit
					dicta blanditiis officiis recusandae id assumenda! Unde,
					dignissimos?
				</Paragraph>
				</div>
				</div>
			<div className = "row-landing-sec4">
			  <div className="col-md-8">
			<SubTitle>For Whom?</SubTitle>
				<Paragraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Consequuntur corrupti, ducimus, qui iste incidunt
					perspiciatis saepe asperiores commodi magni beatae quis odit
					dicta blanditiis officiis recusandae id assumenda! Unde,
					dignissimos?
				</Paragraph>
				</div>
				</div>
		</>
	);
}

export default Home;
