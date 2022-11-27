import React, { Component } from "react";
import { Container, Picture, Price, Title } from "../style-pages";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }
  componentDidMount() {
    this.setState({ cart: this.props.product });
  }


  componentDidUpdate(){

    console.log(this.state.cart,"cart Update");
  }

  render() {
    return (
      <Container>
{this.state.cart.map((item)=>{
  return (
<Picture>
        <img
          src={item.gallery}
          alt={item.name}
          width="100px"
        />

        {/* <h2>
      {this.state.inStock ? "--inStock" : "-out of Stock-"}
    </h2> */}

        <Title>{item.name}</Title>

           <Price >{item.prices&&item.prices[0].amount}$</Price>;
        
      </Picture>
  )
})}
      
      </Container>
    );
  }
}
