import React from 'react'
import styled from 'styled-components'
import NavBar from '../component/NavBar'
import Hero from '../component/Hero'
import Painting from '../component/Painting'
import Story from '../component/Story'

function Home() {
    return (
        <Homecotainer>
            <NavBar />
            <Hero />
            <Painting />
            <Story />
        </Homecotainer>
    )
}

export default Home

const Homecotainer = styled.div`
min-height: 100vh;
width: 100%;

display: flex;
flex-direction: column;
`

