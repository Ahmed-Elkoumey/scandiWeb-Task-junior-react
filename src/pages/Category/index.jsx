import React, { Component } from "react";

// fetching data
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

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
      <>
        <div>category </div>
        <div>
          {this.state.test.map((item,ind) => {
            return (
              <div key={ind}>
               <p> {item.id}</p>
                <div>{item.products.description}</div>
                
                  <img src={item.gallery} alt={item.name} />
               
                <div>{item.name}</div>
                <br />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Category;
