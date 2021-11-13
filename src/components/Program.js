import React from "react";
import styled from "styled-components";


const Banner = styled.div`
	background-image: url("course.png");
	background-repeat: no-repeat;
	background-size: 100%;

`;


const BannerH1 = styled.h1`
	font-family: 'Raleway', sans-serif, bold ;
	font-style: bold;
	color: #62b22f;
	font-size: 8vw;
`;

const BoxH1 = styled.h1`
	font-family: 'Raleway', sans-serif, bold ;
	font-style: bold;
	font-size: 2vw;
	color: #62b22f;
`;

const TreeContainer = styled.div`
	
`;

const TreeImage = styled.img`
	height: 2036px;

	@media screen and (max-width: 992px) {
		display: none;
	  }
`;

const ViikotLeft = styled.div` 
	display: flex;
    justify-content: flex-end;
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
`;

const Viikot = styled.div` 
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
	  }
`;

const Left = styled.div`
	padding-left: 120px;

	@media screen and (max-width: 992px) {
		justify-content: center;
		padding-left: 0px;
	  }
`;



function Program() {
	return (
		<>
			{/* <Banner className='container-fluid'>
				<BannerH1 className='row' style={{ marginLeft: "8.3vw" }}>
					Know
				</BannerH1>
				<BannerH1 className='row' style={{ marginLeft: "16.6vw" }}>
					The
				</BannerH1>
				<BannerH1 className='row' style={{ marginLeft: "25vw" }}>
					Program
				</BannerH1>
			</Banner> */}
			<TreeContainer className='container-fluid'>
				<div className='row' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
					<Box className='container-fluid'>
						<Structure>
						<Left className='row'>
								<Viikot>
									<BoxH1>Week 1</BoxH1>
									<BoxH1></BoxH1>
								</Viikot>
							</Left>
							<Right className='row'>
								<ViikotLeft>
								<BoxH1>Week 2</BoxH1>
								</ViikotLeft>
							</Right>
							<Left className='row'>
								<Viikot>
								<BoxH1>Week 3</BoxH1>
								</Viikot>
							</Left>
							<Right className='row'>
								<ViikotLeft>
								<BoxH1>Week 5</BoxH1>
								</ViikotLeft>
							</Right>
							<Left className='row'>
								<Viikot>
								<BoxH1>REST WEEK</BoxH1>
								</Viikot>
							</Left>
							<Right className='row'>
								<ViikotLeft>
								<BoxH1>Week 5</BoxH1>
								</ViikotLeft>
							</Right>
							<Left className='row'>
								<Viikot>
								<BoxH1>Week 6</BoxH1>
								</Viikot>
							</Left>
							<Right className='row'>
								<ViikotLeft>
								<BoxH1>Week 7</BoxH1>
								</ViikotLeft>
							</Right>
							<Left className='row'>
								<Viikot>
								<BoxH1>Week 8</BoxH1>
								</Viikot>
							</Left>
							<div style={{display: "flex", position: "absolute", width: "99%", height: '2100px', justifyContent: "center"}}>
							<TreeImage src='Tree.png' height='2033px' />
							</div>
						</Structure>
					</Box>
				</div>
			</TreeContainer>
		</>
	);
}

export default Program;
