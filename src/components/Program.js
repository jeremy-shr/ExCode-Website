import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const Banner = styled.div`
	padding-top: 10vh;
	display:flex;
	justify-content:center;
`;


const BannerH1 = styled.h1`
	font-family: 'Ubuntu', sans-serif, bold ;
	font-style: bold;
	color: #62b22f;
	font-size: 4em;
	margin-left: 10px;
	margin-right: 10px;
	@media screen and (max-width: 992px) {
		font-size: 3em;
	  }
	  @media screen and (max-width: 620px) {
		font-size: 1.9em;
	  }
`;

const BodyContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 70px;
`
const BoxH1 = styled.h1`
	font-family: 'Ubuntu', sans-serif, bold ;
	font-style: bold;
	font-size: 0.9em;
	font-weight: 700;
	color: #468845;
`;

const Boxp = styled.p`
	font-family: 'Raleway', sans-serif, bold ;
	font-style: bold;
	font-size: 1em;
	color: #62b22f;
`;

const TreeContainer = styled.div`
	margin-bottom: 30px;
	
`;

const TreeImage = styled.img`
	height: 2036px;

	@media screen and (max-width: 992px) {
		display: none;
	  }
`;

const ViikotLeft = styled.div` 
	display: flex;
    justify-content: center;
	width: 295px;
	height: 225px;
	margin-top: 0px;
	border-style: solid;
	border-width: 3px;
	border-color: #468845;
	border-radius: 20px;
	font-size: 20px;
	line-height: 175%;
	font-weight: 400;
	text-align: center;
	background-color: white;
	z-index: 3;
	justify-content:center;
	flex-direction:column;
`;

const Viikot = styled.div` 
    display:flex;
	width: 295px;
	height: 225px;
    margin-top: 0px;
    border-style: solid;
    border-width: 3px;
    border-color: #468845;
    border-radius: 20px;
    font-size: 20px;
    line-height: 175%;
    font-weight: 400;
    text-align: center;
	background-color: white;
	z-index: 3;
	${'' /* align-items:center; */}
	justify-content:center;
	flex-direction:column;
`;

const Box = styled.div`
display: block;
padding-top: 100px;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
`;

const Structure = styled.div`
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	box-sizing: border-box;
	flex-direction: column;
`;


const Right = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-right: 120px;

	@media screen and (max-width: 992px) {
		justify-content: center;
		padding-right: 0px;
		margin-bottom: 40px;
	  }
`;

const Left = styled.div`
	padding-left: 120px;

	@media screen and (max-width: 992px) {
		justify-content: center;
		padding-left: 0px;
		margin-bottom: 40px;
	  }
`;



function Program() {
	return (
		<>
			<Banner className='container-fluid'>
				<BannerH1 className='row'>
					&lt;Structure Of The Program&gt;

				</BannerH1>
			</Banner>
			<BodyContainer>
				<TreeContainer className='container-fluid'>
					<div className='row' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
						<Box className='container-fluid'>
							<Structure>
								<Left className='row'>
									<Viikot>
										<BoxH1>Week 1</BoxH1>
										<Boxp>Syntax, Variables and Datatypes</Boxp>
									</Viikot>
								</Left>
								<Right className='row'>
									<ViikotLeft>
										<BoxH1>Week 2</BoxH1>
										<Boxp>More variables, Operators, Strings</Boxp>
									</ViikotLeft>
								</Right>
								<Left className='row'>
									<Viikot>
										<BoxH1>Week 3</BoxH1>
										<Boxp>Conditionals, Loops, Try {"&"} Except</Boxp>
									</Viikot>
								</Left>
								<Right className='row'>
									<ViikotLeft>
										<BoxH1>Week 4</BoxH1>
										<Boxp>Dictionaries, Tuples, Sets</Boxp>
									</ViikotLeft>
								</Right>
								<Left className='row'>
									<Viikot>
										<Boxp>REST WEEK</Boxp>
									</Viikot>
								</Left>
								<Right className='row'>
									<ViikotLeft>
										<BoxH1>Week 5</BoxH1>
										<Boxp>Functions</Boxp>
									</ViikotLeft>
								</Right>
								<Left className='row'>
									<Viikot>
										<BoxH1>Week 6</BoxH1>
										<Boxp>File Handling and Further Learning</Boxp>
									</Viikot>
								</Left>
								<Right className='row'>
									<ViikotLeft>
										<BoxH1>Week 7</BoxH1>
										<Boxp>Recap</Boxp>
									</ViikotLeft>
								</Right>
								<Left className='row'>
									<Viikot>
										<BoxH1>Week 8</BoxH1>
										<Boxp>Test and certifications!</Boxp>
									</Viikot>
								</Left>
								{/* Need to update graphic to a node removed in the tree*/}
								<div style={{ display: "flex", position: "absolute", width: "99%", height: '2100px', justifyContent: "center" }}>
									<TreeImage src='Tree.png' height='2033px' />
								</div>
							</Structure>
						</Box>
					</div>
				</TreeContainer>
				<Button variant="success" size="lg" href="https://forms.gle/AMXLsfjWME1Ym8JA7" target="_blank">Register now!</Button>{' '}
			</BodyContainer>

		</>
	);
}

export default Program;
