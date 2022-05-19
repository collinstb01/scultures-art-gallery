import React from 'react'
import styled from 'styled-components'

function list() {
    return (
        <Listt>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </Listt>
    )
}

export default list


const Listt = styled.div`
ul{
    position: relative;
    bottom: 0;
    left: 25%;
    display: flex;
    list-style: none;
    font-weight: 100;
    font-size: 14px;
    font-family: cursive;
    justify-content: space-between;
    width: 5%;

li {
        transition: all 1s ease-in;
        padding: 5px 40px;
        cursor: pointer;
}
    li:hover{
        background-color: white;
        color: black;
        width: 100%;
        border-bottom: 2px solid #DAA520;
    }
}

`

