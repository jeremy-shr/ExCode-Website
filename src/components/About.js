import React from "react";
import styled from "styled-components";

const Grid = styled.div``;

const Row = styled.div`
	display: flex;
`;

const Col = styled.div``;

const Title = styled.h1`
	position: fixed;
	right: 150px;
	width: 300px;
	font-size: 3em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid black;
	border-radius: 3px;
`;

const Paratext = styled.p`
	position: fixed;
	right: 245px;
	top: 200px;
	width: 300px;
`;

const SubTitle = styled.h2`
	position: absolute;
	left: 20%;
	top: 100%;
`;

function About() {
	return (
		<div>
			<Grid>
				<Row>
					<Col size={1}>
						<Title>The ExCode Mission</Title>
					</Col>
				</Row>
				<Row>
					<Col size={2}>
						<Paratext>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ex, minus! Praesentium suscipit, dolorum velit
							rerum sapiente consequatur dolore labore incidunt
							illo ex accusantium, quasi, vero nobis repellat
							expedita laudantium? Pariatur. Accusamus velit
							expedita repellendus dicta maxime impedit earum,
							numquam ab debitis accusantium libero similique amet
							voluptatibus atque ad illo ipsam sequi et doloremque
							quos non nesciunt mollitia vel necessitatibus?
							Ullam. Cum quo amet recusandae expedita labore
							obcaecati minima repellat quam soluta, officia
							harum? Eveniet similique ea ullam sequi minus enim
							itaque maiores, aperiam dolores veniam in atque,
							amet hic. Maxime.
						</Paratext>
					</Col>
				</Row>
			</Grid>

			<br />

			<SubTitle>Our Values</SubTitle>

			<div>
				<h3>Diversity</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Mollitia ullam laborum repellat odit quisquam reiciendis ad,
					molestiae dicta atque eaque est molestias aliquid aliquam
					id! Quae sapiente magni illo non.
				</p>
				<h3>Sustainability</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quaerat modi aspernatur totam soluta aut quidem eligendi
					animi architecto! Harum possimus quaerat nam cupiditate hic
					reprehenderit eligendi suscipit blanditiis ab autem!
				</p>
				<h3>Another nice word</h3>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Adipisci quis delectus repellendus labore recusandae
					consectetur deleniti animi ipsam id, optio est iste
					perferendis dolorem et omnis fugit aliquam rem minus.
				</p>
			</div>

			<div>
				<h2>What Defines ExCode?</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Molestiae tempore cum corrupti facilis perferendis dolorum
					molestias minima, atque veritatis vel quidem repellat
					cupiditate ratione repudiandae ipsum suscipit eligendi.
					Beatae, amet.
				</p>
				<h2>Our Team</h2>
			</div>
		</div>
	);
}

export default About;
