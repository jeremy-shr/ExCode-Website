import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TypeWriter from "react-typewriter";

const Title = styled.h1`
	font-family: "Raleway", sans-serif, bold;
	font-style: bold;
	font-size: 70px;
	font-weight: 900;

`;

const R1 = styled.section`
	background-image: url("/course.png");
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const R2 = styled.section`
	width: 100%;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 0 5vw 0;
`;

const R3 = styled.section`
	height: 200px;
	background-color: #468845;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const R5 = styled.section`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding-left: 84px;
	margin-bottom: 16.4vh;
`;

const ImgName = styled.h3`
	font-family: "Raleway";
	float: right;

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
	display: flex;
`;

const Signup = styled.h2`
	color: #fff;
	font-family: "Ubuntu";
	font-size: 2vw;
	font-weight: bold;

	@media screen and (max-width: 992px) {
		font-size: 25px;
	  }
`;

const Paragraph = styled.p`
	font-size: 20px;
	margin-bottom: 2vw;
`;

const SubTitle = styled.h2`
	color: #62b22f;
	font-size: 30px;
	font-family: "Ubuntu", sans-serif;
	font-size: 70px;
	font-weight: 600;
`;

const SubTitle2 = styled.h2`
	color: #62b22f;
	font-size: 30px;
	font-family: "Ubuntu", sans-serif;
`;

const Bracket1 = styled.h1`
	color: #62b22f;
	font-size: 8vw;
	font-family: "Ubuntu", sans-serif;
	position: relative;
	top: 23vh;
	left: -7vw;
`;

const Bracket2 = styled.h1`
	color: #62b22f;
	font-size: 8vw;
	font-family: "Ubuntu", sans-serif;
	position: relative;
	top: 3vh;
	right: -4vw;
`;

const JoinBanner = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Comments = styled.div`
	display: flex;
	place-content: center;
`;

const ColSm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

function Home() {
	return (
		<>
			<R1 className="container-fluid">
				<div className="row">
					<div style={{ textAlign: "center", fontSize: "2vw" }}>
						<Title>
							{" "}
							The{" "}
							<TypeWriter typing={0.5}>
								<span style={{ color: "#62b22f" }}>
									&lt;Leading&gt;
								</span>
							</TypeWriter>{" "}
							Student Run{" "}
						</Title>
						<Title>Coding Bootcamp In The UK</Title>
						<Paragraph>
							Learn how to code from scratch and receive a
							certificate qualifying you in Python!
						</Paragraph>
					</div>
				</div>
			</R1>

			<R2 className="container-fluid">
				<div
					className="col"
					style={{ paddingLeft: "15vw", paddingRight: "15vw" }}
				>
					<Bracket1>
						<div dangerouslySetInnerHTML={{ __html: "{" }} />
					</Bracket1>

					<SubTitle>What's ExCode:</SubTitle>
					<div>
						<Paragraph>
							ExCode is an 8-week bi-termly coding bootcamp run
							entirely by students at the University of Exeter. It
							is taught every Tuesday at 18:30 in the Forum
							Auditorium, by a lead professor and a team of the
							best teaching assistants on campus. Classes are an
							hour long, with a 30minute lecture followed by
							30minutes of practice questions in the Forum Labs.
							This will give you a chance to learn to code in a
							friendly and supporting environment, after your day
							of lectures.
						</Paragraph>
					</div>

					<SubTitle>Why Apply:</SubTitle>
					<Paragraph>
						ExCode is currently teaching the fundamentals of Python,
						which is a great programming language to start with.
						Python can be used to build simple programs, the
						backbone of a website and has a very intuitive syntax
						for beginners. Therefore if you have never coded and
						want to give it a try, ExCode is the place to learn!
					</Paragraph>

					<BracketLanding1>
						<div>
							<SubTitle>For Whom:</SubTitle>
							<Paragraph>
								If you are a student at the University of
								Exeter, you are welcome to apply for our next
								bootcamp. No prior programming experience is
								needed as the aim of the bootcamp is to foster
								the fundamental coding skills to begin your
								journey, and start writing your own programs! We
								encourage anyone who is not currently studying
								computer science to join.
							</Paragraph>
						</div>
						<Bracket2>
							<div dangerouslySetInnerHTML={{ __html: "}" }} />
						</Bracket2>
					</BracketLanding1>
				</div>
			</R2>

			<div className="container-fluid">
				<R3 className="row">
					<JoinBanner>
						<Signup>Want to join the Bootcamp?</Signup>
						<NavLink to="/program">
							<Button
								className="program-button"
								variant="outline-success"
								href="/program"
								size="lg"
							>
								Program
							</Button>
						</NavLink>
					</JoinBanner>
				</R3>
			</div>

			<Comments
				className="container-fluid"
				style={{ margin: "80px 0px 80px 0px" }}
			>
				<div className="row">
					<ColSm className="col-sm">
						<SubParagraph>
							/* Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Aut repellendus tempore ducimus
							consectetur deleniti. Rerum quidem quod quam in
							natus ipsam ex, unde voluptatibus excepturi eligendi
							molestiae laboriosam sunt reprehenderit? *\
						</SubParagraph>
						<div className="row" style={{flexWrap: 'nowrap'}}>
							<div className="col-sm-1" style={{width: '70px'}}>
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
							<div className="col">
								<div className="row" style={{ width: "353px" }}>
									<ImgName>Zachary Dive</ImgName>
								</div>
								<div className="row" style={{ width: "353px" }}>
									<ImgSubName>
										Co-Founder of Mint.io
									</ImgSubName>
								</div>
							</div>
						</div>
					</ColSm>
					<ColSm className="col-sm">
						<SubParagraph>
							/* Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Aut repellendus tempore ducimus
							consectetur deleniti. Rerum quidem quod quam in
							natus ipsam ex, unde voluptatibus excepturi eligendi
							molestiae laboriosam sunt reprehenderit? *\
						</SubParagraph>
						<div className="row" style={{flexWrap: 'nowrap'}}>
							<div className="col-sm-1" style={{width: '70px'}}>
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
							<div className="col">
								<div className="row" style={{ width: "353px" }}>
									<ImgName>Zachary Dive</ImgName>
								</div>
								<div className="row" style={{ width: "353px" }}>
									<ImgSubName>
										Co-Founder of Mint.io
									</ImgSubName>
								</div>
							</div>
						</div>
					</ColSm>
					<ColSm className="col-sm">
						<SubParagraph>
							/* Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Aut repellendus tempore ducimus
							consectetur deleniti. Rerum quidem quod quam in
							natus ipsam ex, unde voluptatibus excepturi eligendi
							molestiae laboriosam sunt reprehenderit? *\
						</SubParagraph>
						<div className="row" style={{flexWrap: 'nowrap'}}>
							<div className="col-sm-1" style={{width: '70px'}}>
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
							<div className="col">
								<div className="row" style={{ width: "353px" }}>
									<ImgName>Zachary Dive</ImgName>
								</div>
								<div className="row" style={{ width: "353px" }}>
									<ImgSubName>
										Co-Founder of Mint.io
									</ImgSubName>
								</div>
							</div>
						</div>
					</ColSm>
				</div>
			</Comments>
			<R5 className="row-landing-sec5 col-sm">
				<SubTitle2>
					<TypeWriter typing={0.2}>
						<span style={{ color: "#62b22f" }}>
							&lt;Have any questions?&gt;
						</span>
					</TypeWriter>
				</SubTitle2>
				<p
					style={{
						fontFamily: "Raleway",
						fontWeight: 400,
						fontSize: "2.5vw",
						paddingLeft: 25,
					}}
				>
					Visit the FAQ and learn more about our bootcamp!
				</p>
				<NavLink to="/faq">
					<Button
						className="faq-button"
						variant="outline-success"
						href="/faq"
						size="lg"
					>
						FAQ
					</Button>
				</NavLink>
			</R5>
		</>
	);
}

export default Home;
