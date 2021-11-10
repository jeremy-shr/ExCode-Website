import React from "react";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
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
	padding-top: 150px;
	padding-bottom: 150px;
`;

const R3 = styled.section`
	height: 250px;
	background-color: #468845;
	display: flex !important;
  	flex-direction: column;
  	align-items: center;
  	justify-content: center;
`;

const BracketLanding1 = styled.div`
	display: flex;`

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

const Bracket1 = styled.h1`

color: #62b22f;
font-size: 170px;
font-family: 'Ubuntu', sans-serif;
position: absolute;
left: 175px;

div {
	position: absolute;
    bottom: -180px;
}

`;

const Bracket2 = styled.h1`

color: #62b22f;
font-size: 150px;
font-family: 'Ubuntu', sans-serif;
position: absolute;
right: 175px;



`;

function Home() {
	return (
		<>
			<R1 className="row-landing-sec1">

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



			<R2 className="row-landing-sec2">
				<div style={{ paddingLeft: '250px', paddingRight: '250px' }}>

						<BracketLanding1>
							<Bracket1><div
								dangerouslySetInnerHTML={{ __html: "{" }}
							/></Bracket1>
							<div>
								<SubTitle>What's ExCode:</SubTitle>
								<div>
									<Paragraph>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Consequuntur corrupti, ducimus, qui iste incidunt
										perspiciatis saepe asperiores commodi magni beatae quis odit
										dicta blanditiis officiis recusandae id assumenda! Unde,
										dignissimos?
									</Paragraph>
								</div>
							</div>
						</BracketLanding1>



						<SubTitle>Why Apply:</SubTitle>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consequuntur corrupti, ducimus, qui iste incidunt
							perspiciatis saepe asperiores commodi magni beatae quis odit
							dicta blanditiis officiis recusandae id assumenda! Unde,
							dignissimos?
						</Paragraph>

						<BracketLanding1>
							<div>
								<SubTitle>For Whom:</SubTitle>
								<Paragraph>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Consequuntur corrupti, ducimus, qui iste incidunt
									perspiciatis saepe asperiores commodi magni beatae quis odit
									dicta blanditiis officiis recusandae id assumenda! Unde,
									dignissimos?
								</Paragraph>
							</div>
							<Bracket2><div
								dangerouslySetInnerHTML={{ __html: "}" }}
							/></Bracket2>
						</BracketLanding1>
				</div>
			</R2>

			<R3 className="row-landing-sec3">
				<div>
					<Signup>Want to join the Bootcamp?</Signup>
					<NavLink to="/program">
						<Button className="program-button" variant="outline-success" href="/program" size="lg">Program</Button>{' '}
					</NavLink>
				</div>


			</R3>
		</>
	);
}

export default Home;
