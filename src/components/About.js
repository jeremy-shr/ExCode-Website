import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./AboutUs.css";

const Title = styled.h1`
	font-family: "Ubuntu", sans-serif;
	font-size: 60px;
`;

const SubTitle = styled.h2`
	font-family: "Ubuntu", sans-serif;
	font-weight: 900;
	font-size: 52px;
	margin-left: 147px;
	margin-top: 120px;
	color: #62b22f;
`;

const ImageContain = styled.div`
	padding: 50px;
`;

const TitleContain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 50px;
`;

const BackgroundImageContainer = styled.div`
	background-image: url("/carouselBackground.png");
	background-size: cover;
	height: 1000px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	h2 {
		position: relative;
		color: #62b22f;
		font-size: 52px;
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
	height: 800px;
	width: 1000px;
	margin-top: 100px;
	margin-right: 50px;
	margin-bottom: 100px;

	h3 {
		text-align: center;
		font-family: "Raleway", sans-serif;
		font-size: 40px;
		font-weight: 600;
		color: #fff;
		margin-bottom: 70%;
	}

	p {
		text-align: center;
		font-family: "Raleway", sans-serif;
		font-size: 20px;
		margin-bottom: -10%;
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
		margin-top: 50px;
		font-family: "Ubuntu";
		font-weight: 600;
	}

	h4 {
		margin-top: 20px;
	}

	h5 {
		font-size: 18px;
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
		margin-top: 50px;
		margin-bottom: 120px;
		font-family: "Ubuntu";
		font-weight: 600;
	}

	h4 {
		margin-top: 20px;
	}

	h5 {
		font-size: 18px;
		color: grey;
	}
`;

function About() {
	return (
		<>
			<FirstContainer className="container-fluid">
				<ImageContain className="container">
					<img
						src="profile-pic.jpg"
						alt="About Pic"
						style={{
							borderRadius: 300,
							height: 350,
							width: 350,
							marginLeft: "22%",
							marginBottom: "5%",
						}}
					/>
				</ImageContain>
				<TitleContain className="container">
					<Title>
						The
						<br />
					</Title>
					<img
						src="/excode.png"
						alt="Brand Logo"
						style={{ height: 90, width: 430 }}
					/>
					<Title>Mission</Title>
					<p style={{ width: "500" }}>
						Initially founded in 2016, as an after-school coding
						workshop, ExCode’s growth has been unprecedented, with
						the vision to be able to give any university student
						access to the resources and teaching needed to be able
						to learn to code. The potential was clear so through the
						Exeter Entrepreneurs community backing, rising
						popularity and belief in the project, ExCode is now
						recognised as the leading student-run coding bootcamp in
						the UK. We are fully aware that the majority of coding
						bootcamps and computer-science degree programs come with
						massive financial paywalls, therefore we are committed
						to being completely FREE to ensure anyone can enroll in
						our bootcamp. This is thanks to our many sponsors who
						continue to support the programs and believe in our
						mission. We are currently partnered with the Exeter
						Artificial Intelligence society (X-AI) to deliver our
						course fully in Python, the most accessible programming
						language for learners and are backed by the University
						of Exeter to help foster core programming concepts
						across all the academic colleges.
					</p>
				</TitleContain>
			</FirstContainer>
			<BackgroundImageContainer className="container-fluid">
				<div className="container">
					<SubTitle>&lt;Our Values&gt;</SubTitle>
				</div>

				<GreenBox>
					<Carousel className="carousel-size">
						<Carousel.Item>
							<img
								className="d-block w-50"
								src="/undraw_pair_programming.svg"
								alt="First slide"
								style={{ height: 500 }}
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
								style={{ height: 500 }}
							/>

							<Carousel.Caption>
								<h3>Opportunity</h3>
								<p className="carousel-text">
									placeholder text
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-50"
								src="/undraw_source_code.svg"
								alt="Third slide"
								style={{ height: 500 }}
							/>

							<Carousel.Caption>
								<h3>Multidisciplinary</h3>
								<p className="carousel-text">
									Placeholder text
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</GreenBox>
			</BackgroundImageContainer>

			<TeamTitleContainer>
				<SubTitle>&lt;Our Team&gt;</SubTitle>
			</TeamTitleContainer>
			<TeamContainer1>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
						style={{ borderRadius: 300 }}
					/>
					<h4>Martin Brett</h4>
					<h5>Lead Proffesor</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
						style={{ borderRadius: 300 }}
					/>
					<h4>My Name</h4>
					<h5>Teacher Assitant</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
						style={{ borderRadius: 300 }}
					/>
					<h4>My Name</h4>
					<h5>Teacher Assitant</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
						style={{ borderRadius: 300 }}
					/>
					<h4>My Name</h4>
					<h5>Teacher Assitant</h5>
				</div>
			</TeamContainer1>

			<TeamContainer2>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
						style={{ borderRadius: 300 }}
					/>
					<h4>My Name</h4>
					<h5>Teacher Assitant</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
						style={{ borderRadius: 300 }}
					/>
					<h4>My Name</h4>
					<h5>Teacher Assitant</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
						style={{ borderRadius: 300 }}
					/>
					<h4>My Name</h4>
					<h5>Teacher Assitant</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
						style={{ borderRadius: 300 }}
					/>
					<h4>My Name</h4>
					<h5>Teacher Assitant</h5>
				</div>
			</TeamContainer2>
		</>
	);
}

export default About;
