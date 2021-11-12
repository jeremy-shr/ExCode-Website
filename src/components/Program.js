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
	font-size: 8vw;
`;

const TreeContainer = styled.div`
	
`;

const TreeImage = styled.img`
	width: 65vw;
`;

const LeftBox = styled.div`
	margin: 100px 0px 100px 0px;
`;
const RightBox = styled.div`
	margin: 100px 0px 100px 0px;
`;
const Box = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
`;

function Program() {
	return (
		<>
			<Banner className='container-fluid'>
				<BannerH1 className='row' style={{ marginLeft: "8.3vw" }}>
					Know
				</BannerH1>
				<BannerH1 className='row' style={{ marginLeft: "16.6vw" }}>
					The
				</BannerH1>
				<BannerH1 className='row' style={{ marginLeft: "25vw" }}>
					Program
				</BannerH1>
			</Banner>
			<TreeContainer className='container-fluid'>
				<div className='row' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
					<TreeImage src='./Tree.png'>
					</TreeImage>
					<Box className='container'>
						<div className='row'>
							<div className='col-md-6'>
								<LeftBox className='row' >
									<div>Hello1</div>
								</LeftBox>
								<LeftBox className='row'>
									<div>Hello1</div>
								</LeftBox>
								<LeftBox className='row'>
									<div>Hello1</div>
								</LeftBox>
								<LeftBox className='row'>
									<div>Hello1</div>
								</LeftBox>
								<LeftBox className='row'>
									<div>Hello1</div>
								</LeftBox>
								<RightBox className='row'>
									<div>Hello2</div>
								</RightBox>
								<RightBox className='row'>
									<div>Hello2</div>
								</RightBox>
								<RightBox className='row'>
									<div>Hello2</div>
								</RightBox>
								<RightBox className='row'>
									<div>Hello2</div>
								</RightBox>
							</div>
						</div>
					</Box>
				</div>
			</TreeContainer>
		</>
	);
}

export default Program;
