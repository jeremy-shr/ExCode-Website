import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./AboutUs.css";

const Title = styled.h1`
	font-family: "Ubuntu", sans-serif;
	font-size: 3.5em;
	font-weight: 600;
	@media screen and (max-width: 830px) {
		font-size: 2.8em
	  }
`;

const TitleLogo = styled.img`
	width: 350px;
	@media screen and (max-width: 400px) {
		width: 200px;
	  }
`;

const ValuesCont = styled.section`
	height: fit-content;
	min-height: 95vh;

	@media screen and (max-width: 830px) {
		min-height: 75vh;
	  }
	
`;

const SubTitle = styled.h2`
	font-family: "Ubuntu", sans-serif;
	font-weight: 900;
	font-size: 3.5em;
	padding-left: 50px;
	padding-bottom: 30px;
	color: #468845;

	@media screen and (max-width: 830px) {
		font-size: 2.5em;
	  }
`;

const TitleContain = styled.div`
	height: fit-content;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 50px;
	padding-right: 0 !important;

	p {
		padding-top: 6px;
		font-size: 1em;
	}

	@media screen and (max-width: 830px) {
		padding: 20px;
		padding-top: 60px;
	  }
`;

const FirstContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
`;

const GreenBox = styled.div`
	height: 500px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-color: #468845;
	width: 520px;
	border-radius: 5px;
	max-width: 100vw;
	margin-bottom: 30px;

	
	h3 {
		text-align: center;
		font-family: "Raleway", sans-serif;
		font-size: 2em;
		font-weight: 600;
		color: #fff;
	}

	p {
		text-align: center;
		font-family: "Raleway", sans-serif;
		font-size: 1.2em;
	}

	@media screen and (max-width: 830px) {

		h3 {
			font-family: "Raleway", sans-serif;
			font-size: 2em;
			font-weight: 600;
			color: #fff;
		}
	
		p {
			font-family: "Raleway", sans-serif;
			font-size: 1em;
		}
	  }
`;


function About() {
	return (
		<>
			<FirstContainer className="container-fluid">
				<div className='row'>

					<TitleContain className="col">
						<div className="container">
							<Title>
								The
								<br />
							</Title>
							<TitleLogo
								src="/excode.png"
								alt="Brand Logo"
							/>
							<Title style={{ marginBottom: "15px" }}>Mission</Title>
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
								Currently led by our Head of Tech, Jeremy Shorter, and a cohort of highly skilled workshop leaders, ExCode delivers an accessible and essential introduction to Python. We are backed by the University of Exeter to help foster core programming concepts across all the academic colleges.
							</p>
						</div>
					</TitleContain>
				</div>
			</FirstContainer>

			<ValuesCont>

				<SubTitle>&lt;Our Values&gt;</SubTitle>
				<GreenBox className="container-fluid">
					<Carousel className="carousel-size">
						<Carousel.Item>
							<img
								className="d-block w-50"
								src="/undraw_pair_programming.svg"
								alt="First slide"
								style={{ height: "400px", transform: "translateY(-40px)" }}
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
								style={{ height: "400px", transform: "translateY(-40px)" }}
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
								style={{ height: "400px", transform: "translateY(-40px)" }}
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
			</ValuesCont>
		</>
	);
}

export default About;
