import React from 'react'
import styled from 'styled-components'
import sculture from '../images/s22.png'
import List from '../component/List'


function Hero() {
    return (
        <>
            <Heroo>
                <HeroContainer>
                    <div className="text">
                        <h1><span>S</span>cultures</h1>
                    </div>
                    <div className="image">
                        <img src={sculture} alt="" srcset="" />
                    </div>
                    <div class="triangle-left"></div>
                    <div class="triangle-overlay"></div>
                </HeroContainer>
            </Heroo>
            <List />
        </>
    )

}

export default Hero

const Heroo = styled.div`
min-height: auto;
width: 100%;

display: flex;
justify-content: center;
align-items: center;
`
const HeroContainer = styled.div`
width: 80%;
height: fit-content;

display: flex;

@media (max-width: 700px) {
 min-height: 50vh;
 
}

.text {
    width: 50%;
    display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
    text-shadow: 2px 2px 2px black;

span {
    color: #DAA520;
    font-size: 100px;
    @media (max-width: 850px) {
    font-size: 70px;
}
}
@media (max-width: 700px) {
    font-size: 30px;
    justify-content: center;
    width: 100%;
    margin-bottom: 5px;
    text-align: center;
}

}
.image {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    
        @media (max-width: 1250px) {
            justify-content: right;
            width: 100%;
       }

    img {
        width: 70%;
        z-index: 1;
        @media (max-width: 700px) {
            display:none;
        }
    }
}

.triangle-left {
	width: 0;
	height: 0;
	border-top: 300px solid transparent;
	border-right: 400px solid #DAA520;
	border-bottom: 300px solid transparent;
    position: absolute;
    top: 5%;
    right: 22%;
    
        @media (max-width: 1250px) {
            top: 10%;
            right: 15%;
            border-top: 200px solid transparent;
	        border-right: 250px solid #DAA520;
        	border-bottom: 200px solid transparent;
       }
        @media (max-width: 700px) {
            display:none;
        }
}
.triangle-overlay {
	width: 0;
	height: 0;
	border-top: 290px solid transparent;
	border-right: 390px solid #131315;
	border-bottom: 290px solid transparent;
    position: absolute;
    top: 6.5%;
    right: 22.3%;
    @media (max-width: 1250px) {
            top: 11%;
            right: 15.3%;
            border-top: 195px solid transparent;
	        border-right: 245px solid #131315;
        	border-bottom: 195px solid transparent;
       }
       @media (max-width: 700px) {
            display:none;
        }
}


`