import React, { Component } from 'react'


// SVG ICONS
import Logo from "../../assets/SVG/VSF.svg"

// import Routing
import { Link } from 'react-router-dom';

// styled component
import styled from "styled-components";


export default class NavBar extends Component {
constructor(props){
super(props)
this.state={
  isTrue:true
}
}


  render() {
    return (
      <>
      <BeFlex>
      <List>
        <li>
          <Link to='/'>ALL</Link>
        </li>
        <li>
          <Link to='/details'>CLOTHES</Link>
        </li>
        <li>
          <Link to='/cart'>TECH</Link>
        </li>
      </List>
      <div>
      <img src={Logo} alt="" />
      </div>
      <div>
      <Dropdown className="dropdown">
  <Dropbtn  className="dropbtn">$</Dropbtn>
{this.state.isTrue ? null: (
  <Content id="myDropdown" className="dropdown-content">
    <Link to="/">Link 1</Link>
    <Link to="/">Link 2</Link>
    <Link to="/">Link 3</Link>
  </Content>

)}

</Dropdown>
      </div>
      
      </BeFlex>
      </>
    )
  }
}



const BeFlex = styled.nav`
  display: flex;
  justify-content: space-between;
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
  }
`

const List = styled.ul`
       display: flex;
      justify-content: space-between;
    list-style: none;

    li{
      padding: 0 32px;
      a{
        color: #000;
        text-decoration: none;
      }

  }
`;

const Dropdown =styled.div`
position: relative;
  display: inline-block;
`;

const Dropbtn = styled.button`
 background-color: #fff;
  color: #000;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const Content = styled.div`
  position: absolute;
  background-color: #fff;
  min-width: 114px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  top: 50px;
  display: flex;
  flex-direction: column;

  a{
    color: black;
  padding: 5px 16px;
  text-decoration: none;
  display: block;
  }
`;
