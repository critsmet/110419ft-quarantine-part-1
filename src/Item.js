import React from 'react'

class Item extends React.Component{

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.isInCart !== this.props.isInCart ? true : false
  }

  componentDidUpdate(){
    console.log("UPDATED!")
  }

  render(){
    return(
      <div className="item" id={this.props.name + "-item"}>
        <h3>{this.props.name}</h3>
        <img alt={this.props.name + " image"}src={this.props.image1}/>
        <br/>
        Price: {this.props.price}
        <br/>
        {!this.props.isInCart && <button onClick={(e) => this.props.addToCart(this.props.id)}>Add To Cart</button>}
      </div>
    )
  }

}
export default Item
