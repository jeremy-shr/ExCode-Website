import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from "react-bootstrap/Carousel";
import "./AboutUs.css";

const Title = styled.h1`
	font-family: "Ubuntu", sans-serif;
	font-size: 4.375vw;
	font-weight: 600;
`;

const SubTitle = styled.h2`
	font-family: "Ubuntu", sans-serif;
	font-weight: 900;
	font-size: 3.61vw;
	margin-left: 147px;
	margin-top: 120px;
	color: #468845;
`;

const SubtitleContainer = styled.div`

	width: 50vw;

	@media screen and (max-width: 830px) {
		display: none;
	  }
`;

const ImageContain = styled.div`
	padding: 40px;

	@media screen and (max-width: 830px) {
		display: none;
	  }
`;

const TitleContain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 50px;

	p {
		font-size: 1.15vw;
	}

	@media screen and (max-width: 830px) {
		padding: 20px;
	  }
`;

const BackgroundImageContainer = styled.div`
	background-image: url("/carouselBackground.png");
	background-size: cover;
	height: 69vw;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding-right: 0 !important;
	padding-left: 0 !important;

	h2 {
		position: relative;
		color: #468845;
		font-size: 3.6vw;
	}

`;

const FirstContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
`;

const GreenBox = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
	background-color: #468845;
	width: 50vw;

	
	h3 {
		text-align: center;
		font-family: "Raleway", sans-serif;
		font-size: 2.7vw;
		font-weight: 600;
		color: #fff;
		margin-bottom: 90%;
	}

	p {
		text-align: center;
		font-family: "Raleway", sans-serif;
		font-size: 1.38vw;
		margin-bottom: 60%;
	}

	@media screen and (max-width: 830px) {
		width: 100vw;

		h3 {
			text-align: center;
			font-family: "Raleway", sans-serif;
			font-size: 2.7vw;
			font-weight: 600;
			color: #fff;
			margin-bottom: 75%;
		}
	
		p {
			text-align: center;
			font-family: "Raleway", sans-serif;
			font-size: 1.38vw;
			margin-bottom: 20%;
		}
	  }

`;

const TeamTitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
`;

const TeamContainer1 = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;
	justify-content: space-evenly;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 6.8vh;
		font-family: "Ubuntu";
		font-weight: 600;
	}

	h4 {
		margin-top: 2.7vh;
	}

	h5 {
		font-size: 1.25vw;
		color: grey;
	}
`;

const TeamContainer2 = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;
	justify-content: space-evenly;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 6.8vh;
		margin-bottom: 16.4vh;
		font-family: "Ubuntu";
		font-weight: 600;
	}

	h4 {
		margin-top: 2.7vh;
	}

	h5 {
		font-size: 1.25vw;
		color: grey;
	}
`;

function About() {
	return (
		<>
			<FirstContainer className="container-fluid">
				<div className='row'>
				<ImageContain className="col-md-4">
					<img
						src="profile-pic.jpg"
						alt="About Pic"
						style={{
							borderRadius: "50%",
							maxWidth: "48vh",
							width: "50vw",
							maxHeight: "70vh",
							height: "60vw",
							marginLeft: "22%",
							marginBottom: "50%",
							objectFit: "cover",
						}}
					/>
				</ImageContain>
				<TitleContain className="col">
					<div className="container">
						<Title>
							The
							<br />
						</Title>
						<img
							src="/excode.png"
							alt="Brand Logo"
							style={{ width: "350px" }}
						/>
						<Title>Mission</Title>
						<p style={{ width: "500" }}>
							Initially founded in 2016, as an after-school coding
							workshop, ExCode’s growth has been unprecedented,
							with the vision to be able to give any university
							student access to the resources and teaching needed
							to be able to learn to code.
						</p>

						<p style={{ width: "500" }}>
							The potential was clear so through the Exeter
							Entrepreneurs community backing, rising popularity
							and belief in the project, ExCode is now recognised
							as the leading student-run coding bootcamp in the
							UK.
						</p>

						<p style={{ width: "500" }}>
							We are fully aware that the majority of coding
							bootcamps and computer-science degree programs come
							with massive financial paywalls, therefore we are
							committed to being completely FREE to ensure anyone
							can enroll in our bootcamp. This is thanks to our
							many sponsors who continue to support the programs
							and believe in our mission.
						</p>

						<p style={{ width: "500" }}>
							We are currently partnered with the Exeter
							Artificial Intelligence society (X-AI) to deliver
							our course fully in Python, the most accessible
							programming language for learners and are backed by
							the University of Exeter to help foster core
							programming concepts across all the academic
							colleges.
						</p>
					</div>
				</TitleContain>
				</div>
			</FirstContainer>
			<BackgroundImageContainer className="container-fluid">
				<SubtitleContainer>
					<SubTitle>&lt;Our Values&gt;</SubTitle>
				</SubtitleContainer>

				<GreenBox className="container-fluid">
					<Carousel className="carousel-size">
						<Carousel.Item>
							<img
								className="d-block w-50"
								src="/undraw_pair_programming.svg"
								alt="First slide"
								style={{ height: "68.5vw" }}
							/>
							<Carousel.Caption>
								<h3>Equality</h3>
								<p className="carousel-text">
									Our classes aim to equal the number of women
									and men in the technology sector, with our
									current enrolment almost evenly split with
									53% men and 47% women.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-50"
								src="/undraw_code_typing.svg"
								alt="Second slide"
								style={{ height: "68.5vw" }}
							/>

							<Carousel.Caption>
								<h3>Opportunity</h3>
								<p className="carousel-text">
									The bootcamp continues to be completely
									free, to ensure anyone at the University of
									Exeter is able to learn to code no matter
									their financial situation
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-50"
								src="/undraw_source_code.svg"
								alt="Third slide"
								style={{ height: "68.5vw" }}
							/>

							<Carousel.Caption>
								<h3>Multidisciplinary</h3>
								<p className="carousel-text">
									We believe that the ability to program is a
									fundamental skill in the modern day world,
									so no matter what academic background you
									have you can apply
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</GreenBox>
			</BackgroundImageContainer>

			{/* <TeamTitleContainer>
				<SubTitle>&lt;Our Team&gt;</SubTitle>
			</TeamTitleContainer>
			<TeamContainer1>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
					/>
					<h4>Martin Brett</h4>
					<h5>Lead Proffesor</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
					/>
					<h4>My Name</h4>
					<h5>Teacher Assistant</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
					/>
					<h4>My Name</h4>
					<h5>Teacher Assistant</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
					/>
					<h4>My Name</h4>
					<h5>Teacher Assistant</h5>
				</div>
			</TeamContainer1>

			<TeamContainer2>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
					/>
					<h4>My Name</h4>
					<h5>Teacher Assistant</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
					/>
					<h4>My Name</h4>
					<h5>Teacher Assistant</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
					/>
					<h4>My Name</h4>
					<h5>Teacher Assistant</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
					/>
					<h4>My Name</h4>
					<h5>Teacher Assistant</h5>
				</div>
			</TeamContainer2> */}
		</>
	);
}

export default About;
