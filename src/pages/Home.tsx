import React, { Component } from "react";
//import styled from "styled-components";
import Hero from "../components/Hero";
import Content from "../components/Content";
// export const MyComponent = styled.div`
//   color: black;
//   font-size: 50px;
//   background: url(https://zenkit.com/wp-content/uploads/2020/03/bg-to-do-13.jpg);
// `;

export default class Home extends Component {
  render() {
    return (
      <div className="">
        <Hero></Hero>
        <Content></Content>
      </div>
    );
  }
}
