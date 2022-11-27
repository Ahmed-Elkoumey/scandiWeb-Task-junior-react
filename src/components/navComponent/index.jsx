import React, { Component } from "react";

// fetch data

import { client } from "../../setup/graphql";

// SVG ICONS
import Logo from "../../assets/SVG/VSF.svg";
import EmptyCart from "../../assets/SVG/Empty Cart.svg";
// import Routing
import { Link } from "react-router-dom";

// styled component
import styled from "styled-components";
import { gql } from "@apollo/client";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrue: true,
      productData: [],
    };
  }

  componentDidMount() {
    client
      .query({
        query: gql`
          query {
            category(input: { title: "all" }) {
              products {
                prices {
                  currency {
                    symbol
                  }
                }
              }
            }
          }
        `,
      })
      .then((result) =>
        this.setState({ productData: result.data.category.products })
      );


      
  }

  render() {
    return (
      <>
        <BeFlex>
          <List>
            <li>
              <Link to="/">ALL</Link>
            </li>
            <li>
              <Link to="/clothes">CLOTHES</Link>
            </li>
            <li>
              <Link to="/tech">TECH</Link>
            </li>
            <li>
              <Link to="/cart">CART</Link>
            </li>
          </List>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <Dropdown className="dropdown">
              <Dropbtn className="dropbtn">$</Dropbtn>
              {this.state.isTrue && (
                <Content id="myDropdown" className="dropdown-content">

                  {this.state.productData.map((item) => {

                    return item.prices.map((coin, indx) => {

                      console.log(coin.currency.symbol[0],coin.currency.symbol[0])
                      return (
                        <div key={indx}>
                          <Link to="/">{coin.currency.symbol[0]}</Link>
                        </div>
                      );
                    });
                  })}

                </Content>
              )}
            </Dropdown>
            <img src={EmptyCart} alt="" />
          </div>
        </BeFlex>
      </>
    );
  }
}

const BeFlex = styled.nav`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;

  li {
    padding: 0 32px;
    a {
      color: #000;
      text-decoration: none;
    }
  }
`;

const Dropdown = styled.div`
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
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 50px;
  display: flex;
  flex-direction: column;

  a {
    color: black;
    padding: 5px 16px;
    text-decoration: none;
    display: block;
  }
`;
