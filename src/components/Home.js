import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
	font-family: "Raleway", sans-serif;
	font-style: bold;
	font-size: 53px;
`;

const R1 = styled.section`
	background-image: url("/course.png");
	height: 600px;
	background-size: cover;
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

const R4 = styled.section`
	display: flex;
	justify-content: space-evenly;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	height: 400px;
	margin: 0 20px 0 20px;

`;

const R5 = styled.section`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding-left: 84px;
`;

const ImgName = styled.h3`
	font-family: "Raleway";
	float: right;
	padding-right: 218px;
	margin-bottom: 0;
	font-size: 20px;
`;

const ImgSubName = styled.p`
	font-family: "Raleway";
	float: right;
	padding-right: 150px;
	font-size: 19px;
	color: grey;
`;

const SubParagraph = styled.p`
	font-family: "Raleway";
	font-weight: 600;
	width: 400px;
	text-align: justify;
	color: #62b22f;
`;

const BracketLanding1 = styled.div`
	display: flex;`

const Signup = styled.h2`
	color: #fff;
	font-family: "Ubuntu";
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
	font-family: "Ubuntu", sans-serif;
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
					<Title>The &lt;Leading&gt; Student Run</Title>
					<Title>Coding Bootcamp In The UK</Title>
					<Paragraph>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Facilis, esse cupiditate. Quas, praesentium
						asperiores? Ea, voluptates provident dicta enim nostrum
						facilis commodi quas illum officiis libero quod sequi
						nemo error.
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
						<Button
							className="program-button"
							variant="outline-success"
							href="/program"
							size="lg"
						>
							Program
						</Button>{" "}
					</NavLink>
				</div>
			</R3>

		
			<div className='container-fluid'>
				<div className='row'>
				<div className="col-sm">
					<SubParagraph>
						/* Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Aut repellendus tempore ducimus consectetur
						deleniti. Rerum quidem quod quam in natus ipsam ex, unde
						voluptatibus excepturi eligendi molestiae laboriosam
						sunt reprehenderit? *\
					</SubParagraph>
					<ImgName>Zachary Dive</ImgName>
					<ImgSubName>Co-Founder of Mint.io</ImgSubName>
					<img
						src="/profile-pic.jpg"
						alt="Quoter pic"
						style={{
							height: 50,
							width: 50,
							border: 1,
							borderRadius: 50,
						}}
					/>
				</div>
				<div className="col-sm">
					<SubParagraph>
						/* Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Aut repellendus tempore ducimus consectetur
						deleniti. Rerum quidem quod quam in natus ipsam ex, unde
						voluptatibus excepturi eligendi molestiae laboriosam
						sunt reprehenderit? *\
					</SubParagraph>
					<ImgName>Zachary Dive</ImgName>
					<ImgSubName>Co-Founder of Mint.io</ImgSubName>
					<img
						src="/profile-pic.jpg"
						alt="Quoter pic"
						style={{
							height: 50,
							width: 50,
							border: 1,
							borderRadius: 50,
						}}
					/>
				</div>
				<div className="col-sm">
					<SubParagraph>
						/* Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Aut repellendus tempore ducimus consectetur
						deleniti. Rerum quidem quod quam in natus ipsam ex, unde
						voluptatibus excepturi eligendi molestiae laboriosam
						sunt reprehenderit? *\
					</SubParagraph>
					<div className='container-fluid'>
					<div className='row'>
						<div className='col-md'>
						<img
						src="/profile-pic.jpg"
						alt="Quoter pic"
						style={{
							height: 50,
							width: 50,
							border: 1,
							borderRadius: 50,
						}}
					/>
						</div>
						<div className='col-md'>
							<div className='row' style={{width: "353px"}}>
					<ImgName>Zachary Dive</ImgName>
					</div>
					<div className='row' style={{width: "353px"}}>
					<ImgSubName>Co-Founder of Mint.io</ImgSubName>
					</div>
					</div>
					</div>
				</div>
				</div>
				</div>
				</div>
			

			<R5 className="row-landing-sec5">
				<SubTitle>&lt;Have any questions?&gt;</SubTitle>
				<p
					style={{
						fontFamily: "Raleway",
						fontWeight: 400,
						fontSize: 25,
						paddingLeft: 25,
					}}
				>
					Visit the FAQ and learn more about our program!
				</p>
				<NavLink to="/faq">
					<Button
						className="faq-button"
						variant="outline-success"
						href="/faq"
						size="lg"
					>
						FAQ
					</Button>{" "}
				</NavLink>
			</R5>
		</>
	);
}

export default Home;
