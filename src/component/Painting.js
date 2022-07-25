import React from 'react'
import styled from 'styled-components'
import sculture1 from '../images/sculture1.jpeg'
import sculture2 from '../images/sculture2.png'
import sculture3 from '../images/sculture3.jpeg'
import List from '../component/List'

function Painting() {
    return (
        <>
            <Paintingg>
                <PaingtingCtn>
                    <div className="text">
                        <h1><span>P</span>ainting</h1>
                    </div>
                    <div className="column">
                        <div className='img'>
                            <img src={sculture1} alt="" srcset="" />
                            <h6>HAPE Teaser</h6>
                        </div>
                        <div className='img'>
                            <img src={sculture2} alt="" srcset="" />
                            <h6>Orators, rinat khabirov</h6>
                        </div>
                        <div className='img'>
                            <img src={sculture3} alt="" srcset="" />
                            <h6>A Halloween Treat by Yatzer _ Yatzer</h6>
                        </div>
                    </div>
                </PaingtingCtn>
            </Paintingg>
            <Liist>
                <List class="list" />
            </Liist>
        </>
    )
}

export default Painting

const Paintingg = styled.div`
height: auto;
width: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const PaingtingCtn = styled.div`
height: auto;
width: 80%;


.text {
    width: 100%;
    display: flex;
justify-content: right;
align-items: center;
font-size: 40px;
text-shadow: 2px 2px 2px black;
    margin-bottom: -50px;

span {
   color: #DAA520;
    font-size: 100px;
    
}
@media (max-width: 700px) {
    font-size: 20px;
    justify-content: left;
    margin-bottom: 5px;
} 
}

.column {
    display: flex;

    .img {
        width: 50%;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    
        h6 {
            text-align: center;
            font-size: 16px;
            display: block;
              text-align: center;
        }
       img {
        width: 200px;
    height: 200px;

    @media (max-width: 700px) {
         object-fit: contain;
    }
    }
    @media (max-width: 700px) {
     h6 {
        text-align: center;
        display: flex;
        justify-content:center;
        width: 100%;
        text-align: center;
        font-size: 15px;
    }   
    }
    }
    @media (max-width: 700px) {
        flex-direction: column;
        display: flex;
    justify-content: center;
    align-items: center;
    }
}

`
const Liist = styled.div`
  @media (max-width: 700px) {
       display: none;
    }
`