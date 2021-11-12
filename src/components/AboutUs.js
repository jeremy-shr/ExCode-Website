import React from "react";
import styled from "styled-components";

const Title = styled.h1`
	font-family: "Ubuntu", sans-serif;
	font-size: 53px;
`;

const SubTitle = styled.h2`
	font-family: "Ubuntu", sans-serif;
	font-size: 48px;
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

function AboutUs() {
	return (
		<>
			<div className="container-fluid">
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
						recusandae vero?
					</p>
				</TitleContain>
			</div>
			<div
				className="container-fluid"
				style={{
					display: "flex",
					flexDirection: "row",
					backgroundSize: "cover",
				}}
			>
				<div className="container">
					<SubTitle>&lt;Our Values&gt;</SubTitle>
				</div>
				<div
					className="container"
					style={{ height: 600, backgroundColor: "#468845" }}
				></div>
			</div>
		</>
	);
}

export default AboutUs;
