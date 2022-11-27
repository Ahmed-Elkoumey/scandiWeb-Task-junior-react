import {  gql } from "@apollo/client";
import { client } from "../../setup/graphql";
import React, { Component } from "react";


// styled
import {CategoryTitle,Price,Title,Wrapper,Picture,Container} from "../style-pages";


// styled

export default class Clothes extends Component {
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
    console.log(this.state.productData)
    return (
      <Container>
        <CategoryTitle>CLOTHES Products</CategoryTitle>
        <div>
          {this.state.productData.map((category, ind) => {
            return (
              <Wrapper key={ind}>
                {/* <div>{category.name}</div> */}

                {category.name === "clothes" &&
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
            );
          })}
        </div>
      </Container>
    );
  }
}
