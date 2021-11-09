import React from "react";
import styled from "styled-components";

const Title = styled.h1`
	font-size: 30px;
	text-align: center;
`;

const Wrapper = styled.section`
	position: absolute;
	top: 120px;
	right: 430px;
	width: 500px;
	padding: 4em;
	border: 1px solid black;
	border-radius: 5px;
`;

const Paragraph = styled.p``;

const WhatTitle = styled.h2`
	top: 200px;
	left: 200px;
`;

const SubWrapper = styled.section`
	position: absolute;
	width: 150px;
	top: 750px;
	left: 200px;
	padding: 4em;
	border: 1px solid black;
	border-radius: 5px;
`;

const ForTitle = styled.h2`
	position: absolute;
	top: 750px;
	right: 200px;
`;

function Home() {
	return (
		<>
			<Wrapper>
				<Title>The Leading Student Run Coding Bootcamp in the UK</Title>
				<Paragraph>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Facilis, esse cupiditate. Quas, praesentium asperiores? Ea,
					voluptates provident dicta enim nostrum facilis commodi quas
					illum officiis libero quod sequi nemo error.
				</Paragraph>
			</Wrapper>

			<SubWrapper>
				<WhatTitle>Why Apply?</WhatTitle>
				<Paragraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Consequuntur corrupti, ducimus, qui iste incidunt
					perspiciatis saepe asperiores commodi magni beatae quis odit
					dicta blanditiis officiis recusandae id assumenda! Unde,
					dignissimos?
				</Paragraph>
			</SubWrapper>
			<ForTitle>For Whom?</ForTitle>
		</>
	);
}

export default Home;
