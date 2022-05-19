import React from "react";
import styled from "styled-components";
import img from "../images/2s22.png";
import List from "../component/List";
function Story() {
  return (
    <>
      <Storyy>
        <StoryyCtn>
          <Left>
            <img src={img} alt="" />
          </Left>
          <Right>
            <div className="text">
              <h1>
                <span>S</span>tory
              </h1>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae iusto, quis accusantium aperiam eligendi error ipsa
              voluptate suscipit similique? Voluptate facere harum facilis
              expedita deserunt quibusdam distinctio? Doloribus, dolorum
              similique distinctio unde aliquam sit magni repellat aliquid nihil
              reprehenderit quibusdam reiciendis nobis dolor nisi, illo modi
              ipsam amet quis omnis.
            </p>
            <h2>UX/UI</h2>
          </Right>
        </StoryyCtn>
      </Storyy>
      <List />
    </>
  );
}

export default Story;

const Storyy = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    height: fit-content;
  }
`;
const StoryyCtn = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Right = styled.div`
  width: 50%;

  @media (max-width: 700px) {
    width: 100%;
    order: -1;
  }

  .text {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    text-shadow: 2px 2px 2px black;
    margin-bottom: -50px;

    span {
      color: #daa520;
      font-size: 100px;
    }
    @media (max-width: 700px) {
      width: 100%;
    }
  }

  p {
    font-family: cursive;
    width: 80%;
    @media (max-width: 700px) {
      width: 100%;
      text-align: center;
    }
  }
  h2 {
    font-size: 170px;
    color: #daa520;
    text-shadow: 2px 2px 2px black;

    @media (max-width: 750px) {
      font-size: 100px;
      text-align: center;
    }
  }
`;
const Left = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    width: 100%;
    order: 1;
  }

  img {
    width: 60%;
  }
`;
