import { gql } from "@apollo/client";
import { client } from "../../setup/graphql";

import {CategoryTitle,Price,Title,Wrapper,Picture,Container} from "../style-pages";

import React, { Component } from "react";


export default class Tech extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productData: [],
    };
  }

  handelClicke = (e) => {
    console.log(e);
  };

  componentDidMount() {
    client
    .query({
      query: gql`
        query {
          categories {
            name
            products {
              id
              name
              inStock
              description
              brand
              gallery
              prices{
                amount
              }
            }
          }
        }
      `,
    })
    .then((result) => this.setState({ productData: result.data.categories }));
  }
  render() {
    return (
      <Container>
        <CategoryTitle>TECH Products </CategoryTitle>
        <div>
          {this.state.productData.map((category, ind) => {
            return (
              <div key={ind}>
                {/* <div>{category.name}</div> */}

                <Wrapper key={ind}>
                {/* <div>{category.name}</div> */}

                {category.name === "tech" &&
                  category.products.map((product, inx) => {
                    return (
                      <Picture
                        key={inx}
                        onClick={(e) => this.handelClicke(product)}
                      >
                        <img
                          src={product.gallery[0]}
                          alt={product.name}
                          width="100px"
                        />

                        {/* <h2>
                          {product.inStock ? "--inStock" : "-out of Stock-"}
                        </h2> */}

                        <Title>{product.name}</Title>
                        <Price>{product.prices[0].amount}$</Price>
                      </Picture>
                    );
                  })}
              </Wrapper>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}
