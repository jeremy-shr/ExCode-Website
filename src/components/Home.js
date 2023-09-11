import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TypeWriter from "react-typewriter";

const Title = styled.h1`
	max-width: 1050px;
	font-family: "Raleway", sans-serif, bold;
	font-size: 4.2em;
	font-weight: 900;
	
@media screen and (max-width: 1000px) {
	font-size: 3em;
	}

@media screen and (max-width: 450px) {
	font-size: 2em;
	}
`;

const R1 = styled.section`
	background: url("/course.png");
	height: 100vh;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const R2 = styled.section`
	width: 100%;
	position: relative;
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
	padding-left: 5vw;
	padding-right: 5vw;
	justify-content: left;
	column-gap:8vw;
	margin-bottom: 16.4vh;
	flex-wrap: wrap;
	
`;

const Buttons = styled.div`
	margin-top: 15px;
	display: flex;
	justify-content: center;
	column-gap: 20px;
`

const C1 = styled.section`
	display: flex;
	flex-direction:column;
	width: fit-content;
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
	max-width: 85%;
	line-height: 150%;
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
	font-size: 1.3em;
	margin-bottom: 20px;
	@media screen and (max-width: 450px) {
		font-size: 1em;
	}
`;

const SubTitle = styled.h2`
	color: #62b22f;
	font-size: 40px;
	font-family: "Ubuntu", sans-serif;
`;

const SubTitle2 = styled.h2`
	color: #62b22f;
	font-size: 1.8em;
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
					<div style={{ textAlign: "center" }}>
						<Title>
							{" "}
							The UK's {" "}
							<TypeWriter typing={0.6}>
								<span style={{ color: "#62b22f" }}>
									&lt;Leading&gt;
								</span>
							</TypeWriter>{" "}
							Student Run Coding Bootcamp</Title>
						<Paragraph>
							Learn how to code from scratch and receive a
							certificate qualifying you in Python!
						</Paragraph>
						<Button variant="success" size="lg" href="https://forms.gle/AMXLsfjWME1Ym8JA7" target="_blank">Register now!</Button>{' '}
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

					<SubTitle>What is ExCode?</SubTitle>
					<div>
						<Paragraph>
							ExCode is an 8-week coding bootcamp run
							entirely by students at the University of Exeter. It
							is taught every Tuesday at 19:00 in the Forum
							Auditorium, by a lead professor and a team of the
							best teaching assistants on campus. Each session is
							composed of a half hour lecture then an hour long workshop
							with practice questions in the Forum Labs.
							This will give you a chance to learn to code in a
							friendly and supporting environment, after your day
							of lectures.
						</Paragraph>
					</div>

					<SubTitle>Why Apply?</SubTitle>
					<Paragraph>
						ExCode teaches the fundamentals of Python,
						which is a great programming language to start with.
						Python can be used to build simple programs, the
						backbone of a website and has a very intuitive syntax
						for beginners. Therefore if you have never coded and
						want to give it a try, ExCode is the place to learn!
					</Paragraph>

					<BracketLanding1>
						<div>
							<SubTitle>Who's it for?</SubTitle>
							<Paragraph>
								If you are a student at the University of
								Exeter, you are welcome to apply to ExCode. No prior programming experience is
								needed as the aim of the bootcamp is to foster
								the fundamental coding skills to begin your
								journey, and start writing your own programs! We
								encourage anyone to join.
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
						<Buttons>
							<NavLink to="https://forms.gle/AMXLsfjWME1Ym8JA7">
								<Button
									className="program-button"
									variant="outline-success"
									href="https://forms.gle/AMXLsfjWME1Ym8JA7"
									size="lg"
									target="none"
								>
									Register
								</Button>
							</NavLink>
							<NavLink to="/program">
								<Button
									className="program-button"
									variant="outline-success"
									href="/program"
									size="lg"
									target="none"
								>
									Programme
								</Button>
							</NavLink>
						</Buttons>
					</JoinBanner>
				</R3>
			</div>

			<Comments
				className="container-fluid"
				style={{ margin: "80px 0px 80px 0px", maxWidth: "100vw" }}
			>
				<div className="row">
					<ColSm className="col-sm" style={{ maxWidth: "100vw" }}>
						<SubParagraph> /* I've alway wanted to learn to code but I was scared to study computer science at university. ExCode gave me the confidence to learn a new skill and learn in a friendly environment where I could be supported. I still can't believe its free!*\
						</SubParagraph>
						<div className="row" style={{flexWrap: 'nowrap'}}>
							<div className="col-sm-1" style={{width: '70px'}}>
							<img src="/tilda.jpg" alt="Quoter pic"
								style={{
									height: 50,
									width: 50,
									border: 1,
									borderRadius: 50,
									}}/>
</div>
<div className="col">
<div className="row">
<ImgName>Tilda Tarrant</ImgName>
</div>
<div className="row">
<ImgSubName>
Bsc Biology
</ImgSubName>
</div>
</div>
</div>
</ColSm>
<ColSm className="col-sm" style={{maxWidth:"100vw"}}>
<SubParagraph>
/* Without ExCode I don't think I could've passed my machine learning modules and have achieived a First with Dean's Commendation. My Teaching Assistant Ben Chatfield was amazing, going out of his way to explain areas where I was confused and help me outside lessons.*\
</SubParagraph>
<div className="row" style={{flexWrap: 'nowrap'}}>
<div className="col-sm-1" style={{width: '70px'}}>
<img
src="/yak.jpg"
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
<div className="row">
<ImgName>Jacques Krzymuski</ImgName>
</div>
<div className="row">
<ImgSubName>
Msc Finance
</ImgSubName>
</div>
</div>
</div>
</ColSm>
<ColSm className="col-sm" style={{maxWidth:"100vw"}}>
<SubParagraph>
/* Through ExCode I was able to learn the coding skills required for my Masters progam. For any student that needs programming qualifications for job applications or graduate studies, I highly recommend this bootcamp.*\
</SubParagraph>
<div className="row" style={{flexWrap: 'nowrap'}}>
<div className="col-sm-1" style={{width: '70px'}}>
<img
src="/jade.jpg"
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
<div className="row">
<ImgName>Jade Léger</ImgName>
</div>
<div className="row">
<ImgSubName>
Msc Virology
</ImgSubName>
</div>
</div>
</div>
</ColSm>
</div>
</Comments>
<R5 className="row-landing-sec5">
<C1>
<SubTitle2>

<span style={{ color: "#62b22f" }}>
Have any questions?
</span>
</SubTitle2>
<p
style={{
fontFamily: "Raleway",
fontWeight: 400,
fontSize: "1.2em",
}}
>
Visit the FAQ and learn more about our bootcamp!
</p>
</C1>


<NavLink to="/faq" style={{width:"20",cursor:"default"}}>
<Button
className="faq-button mt-2"
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
