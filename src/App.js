import React from 'react'
import styled from 'styled-components'
import Home from './pages/Home'
import style from './styles/style'

function App() {
    return (
        <MainContainer style={style}>
            < Home />
        </MainContainer>
    )
}

export default App

const MainContainer = styled.div`
height: fit-content;
width: 100%;

background-color: #131315;
color: ${props => props.style.color};
color: white;
display: flex;

`