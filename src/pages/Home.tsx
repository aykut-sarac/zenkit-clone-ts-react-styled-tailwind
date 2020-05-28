import React, { Component } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Content from "../components/Content";
export const Wrapper = styled.div`
  color: black;
  font-size: 16px;
  //line-height: 24px;
  //padding-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 5rem;
  //background: url(https://zenkit.com/wp-content/uploads/2020/03/bg-to-do-13.jpg);
`;

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Hero></Hero>
        <Content></Content>
      </Wrapper>
    );
  }
}
