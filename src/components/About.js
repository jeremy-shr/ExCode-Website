import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./AboutUs.css";

const Title = styled.h1`
	font-family: "Ubuntu", sans-serif;
	font-size: 53px;
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
		margin-bottom: 90%;
	}

	p {
		text-align: center;
		font-family: "Raleway", sans-serif;
		font-size: 20px;
		margin-bottom: -1%;
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
						}}
					/>
				</ImageContain>
				<TitleContain className="container">
					<Title>
						The <strong>EX</strong>Code Mission
					</Title>
					<p style={{ width: "500" }}>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Possimus, explicabo. Atque ipsam architecto neque
						laborum, at, ab quis eveniet voluptate fuga quod
						sapiente dignissimos nobis totam consequatur nam
						recusandae vero? Lorem ipsum dolor sit amet consectetur,
						adipisicing elit. Soluta iusto labore molestias ratione
						accusantium nobis perferendis ullam voluptatem sapiente,
						cupiditate voluptatum quibusdam unde animi enim
						explicabo sint minima eligendi corporis?
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
									Nulla vitae elit libero, a pharetra augue
									mollis interdum.
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
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
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
									Praesent commodo cursus magna, vel
									scelerisque nisl consectetur.
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
					<h4>My Name</h4>
					<h5>My Role</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
						style={{ borderRadius: 300 }}
					/>
					<h4>My Name</h4>
					<h5>My Role</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
						style={{ borderRadius: 300 }}
					/>
					<h4>My Name</h4>
					<h5>My Role</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
						style={{ borderRadius: 300 }}
					/>
					<h4>My Name</h4>
					<h5>My Role</h5>
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
					<h5>My Role</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
						style={{ borderRadius: 300 }}
					/>
					<h4>My Name</h4>
					<h5>My Role</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
						style={{ borderRadius: 300 }}
					/>
					<h4>My Name</h4>
					<h5>My Role</h5>
				</div>
				<div>
					<img
						src="/joseph-gonzalez-pic.jpg"
						alt="Team Member"
						className="imgStyling"
						style={{ borderRadius: 300 }}
					/>
					<h4>My Name</h4>
					<h5>My Role</h5>
				</div>
			</TeamContainer2>
		</>
	);
}

export default About;
