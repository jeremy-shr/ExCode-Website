import React from "react";
import styled from "styled-components";

const R1 = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const R2 = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Title = styled.h1`
	font-family: "Ubuntu", sans-serif, bold;
	font-style: bold;
	font-size: 53px;
	text-align: center;
`;

const SubTitle = styled.h2`
	font-family: "Ubuntu", sans-serif, bold;
	font-style: bold;
	font-size: 48px;
	text-align: center;
	padding-top: 50px;
`;

const Paragraph = styled.p`
	font-family: "Ubuntu", sans-serif;
	width: 400px;
	justify-content: center;
	text-align: center;
`;

function About() {
	return (
		<>
			<R1 className="row-about-sec1">
				<div
					className="col-md-5"
					style={{ backgroundColor: "#468845" }}
				>
					<img
						src="profile-pic.jpg"
						alt="About Pic"
						style={{
							borderRadius: 300,
							height: 500,
							width: 500,
							marginLeft: 85,
							paddingTop: 20,
							paddingBottom: 20,
						}}
					/>
				</div>
				<div className="col-md-5">
					<Title>
						The <strong>EX</strong> Code
					</Title>
					<Title>Mission</Title>
					<div style={{ maxWidth: 600, marginLeft: 163 }}>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Laboriosam quaerat dolor, unde sunt possimus
							eum, ipsum quibusdam totam cum ullam voluptatem
							consequuntur reiciendis, mollitia animi hic id
							velit! Molestias, ipsa.
						</Paragraph>
					</div>
				</div>
			</R1>

			<R2 className="row-about-sec2">
				<div
					className="col-md-5"
					style={{ backgroundColor: "#468845", height: 600 }}
				>
					<SubTitle>Our Values</SubTitle>
					<img src="" alt="" />
					<div></div>
				</div>
			</R2>
		</>
	);
}

export default About;
