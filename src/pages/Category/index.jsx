import React, { Component } from "react";

// fetching data
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import styled from "styled-components";

class Category extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      test: [],
    };

  }

  componentDidMount() {
    const client = new ApolloClient({
      uri: "http://localhost:4000/",
      cache: new InMemoryCache(),
    });

    client
      .query({
        query: gql`
          query {
            categories {
              name
                    products {
                      id,
                      name,
                      inStock,
                      description,
                      brand,
                      gallery,
                    }
            }
          }
        `,
      })
      .then((result) => this.setState({ test: result.data.categories}));
  }
  render() {
    console.log(this.state.test);

    return (
      <Container>
        <div>category </div>
        <div>
          {this.state.test.map((category,ind) => {
         return(
          <div key={ind}>
            <div>{category.name}</div>
            {category.name==="all" && category.products.map((product,index)=>{
              return(
                <>
                <h2>{product.name}</h2>
                <h2>{product.inStock ? "--inStock":"-out of Stock-"}</h2>
                <img src={product.gallery[0]} alt={product.name} width="100px"/>
                </>
              )
            })}
          </div>
         )
            console.log(category.products)
          })}
        </div>
      </Container>
    );
  }
}

export default Category;


const Container = styled.div`
width: 85%;
margin: auto;

`;