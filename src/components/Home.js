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

	.col-sm-3 {
		flex: 0 0 auto;
		width: 28%;
	}
`;

const R5 = styled.section`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap: wrap;
`;

const ImgName = styled.h3`
	font-family: "Raleway";
	float: right;
	padding-right: 220px;
	margin-bottom: 0;
	font-size: 20px;
`;

const ImgSubName = styled.p`
	font-family: "Raleway";
	float: right;
	padding-right: 152px;
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
	font-size: 150px;
	font-family: "Ubuntu", sans-serif;
`;

const Bracket2 = styled.h1`
	color: #62b22f;
	font-size: 150px;
	font-family: "Ubuntu", sans-serif;
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
				<div className="col-md-8">
					<Bracket1>
						<div dangerouslySetInnerHTML={{ __html: "{" }} />
					</Bracket1>
					<SubTitle>What's ExCode:</SubTitle>
					<Paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur corrupti, ducimus, qui iste incidunt
						perspiciatis saepe asperiores commodi magni beatae quis
						odit dicta blanditiis officiis recusandae id assumenda!
						Unde, dignissimos?
					</Paragraph>

					<SubTitle>Why Apply:</SubTitle>
					<Paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur corrupti, ducimus, qui iste incidunt
						perspiciatis saepe asperiores commodi magni beatae quis
						odit dicta blanditiis officiis recusandae id assumenda!
						Unde, dignissimos?
					</Paragraph>

					<SubTitle>For Whom:</SubTitle>
					<Paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur corrupti, ducimus, qui iste incidunt
						perspiciatis saepe asperiores commodi magni beatae quis
						odit dicta blanditiis officiis recusandae id assumenda!
						Unde, dignissimos?
					</Paragraph>
					<Bracket2>
						<div dangerouslySetInnerHTML={{ __html: "}" }} />
					</Bracket2>
				</div>
			</R2>

			<R3 className="row-landing-sec3">
				<div className="col-md-6">
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

			<R4 className="row-landing-sec4">
				<div className="col-sm-3">
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
							height: 55,
							width: 55,
							border: 1,
							borderRadius: 50,
						}}
					/>
				</div>
				<div className="col-sm-3">
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
							height: 55,
							width: 55,
							border: 1,
							borderRadius: 50,
						}}
					/>
				</div>
				<div className="col-sm-3">
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
							height: 55,
							width: 55,
							border: 1,
							borderRadius: 50,
						}}
					/>
				</div>
			</R4>

			<R5 className="row-landing-sec5">
				<div className="col-md-5">
					<Title>&lt;Have any questions?&gt;</Title>
				</div>
			</R5>
		</>
	);
}

export default Home;
