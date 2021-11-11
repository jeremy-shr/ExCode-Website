import React from "react";
import styled from "styled-components";


const Banner = styled.div`
	background-image: url("course.png");
	background-repeat: no-repeat;
	background-size: 100%;
	height: 75vh;
	margin: 50px 0px 50px 0px;
`;


const BannerH1 = styled.h1`
	font-family: 'Raleway', sans-serif, bold ;
	font-style: bold;
	font-size: 9vw;
`;

function Program() {
	return (
		<Banner className='container-fluid'>
				<BannerH1 className='row' style={{marginLeft: "8.3vw"}}>
					Know
				</BannerH1>
				<BannerH1 className='row' style={{marginLeft: "16.6vw"}}>
					The
				</BannerH1>
				<BannerH1 className='row' style={{marginLeft: "25vw"}}>
					Program
				</BannerH1>
		</Banner>
	);
}

export default Program;
