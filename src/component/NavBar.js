import React from 'react'
import styled from 'styled-components'
import logo2 from '../images/logo-2.svg'


function NavBar() {
    return (
        <NavBarr>
            <NavBarContainer>
                <div className='logo'>
                    <img src={logo2} alt="" srcset="" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blogs</li>
                </ul>
            </NavBarContainer>
        </NavBarr>
    )
}

export default NavBar

const NavBarr = styled.div`
font-family: 'Rubik Wet Paint', cursive; 
`
const NavBarContainer = styled.div`
width: 50%;
height: 10vh;

display: flex;
justify-content: flex-start;
align-items: center;
@media (max-width: 700px) {
    width: 90%;
}
.logo {
    width: 30%;
    display: flex;
    justify-content:center;
    img {
    color: #DAA520;
    width: 40px;
}
@media (max-width: 700px) {
        width: 50%;
    }
}

ul {
 text-decoration: none;
 display: flex;
 justify-content: space-between;
 width: 50%;
position: relative;


 li {
     list-style: none;
     cursor:pointer;
    position: relative;
    z-index: 1;
     }
     li::before {
         content: '';
         position: absolute;
         width: 5%;
         height: 3vh;
         background-color: gray;
         border-bottom: 2px solid #DAA520;
         border-left: 2px solid gray;
         border-top: 2px solid #DAA520;
         top: 0;
         left: -10%;
         opacity: 0.5;
         transition: all .3s ease;
         z-index: -1;
 }
 li:hover::before {
     width: 150%;
 }

 @media (max-width: 700px) {
      width: 200%;   
 }
}
`