import React from 'react';

import './App.css';

import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'

class App extends React.Component {

  componentDidMount(){
    fetch("http://localhost:3000/items")
      .then(res => res.json())
      .then(items => this.setState({items}))
  }

  //let items = [{...}, {...}]
  //let obj = {items: items}
  //let obj = {items}

  state = {
    page: "Items",
    items: [],
    cart: [],
    term: ""
  }

  addToCart = (id) => {
    let item = this.state.items.find(item => item.id === id)
    this.setState(prevState => {
      return ({cart: [...prevState.cart, item]})
    }, () => console.log(this.state))
  }

  render(){
    return (
      <div className="App">
        <Header/>
        {this.state.page === "Items" ? <ItemsContainer addToCart={this.addToCart} cart={this.state.cart} items={this.state.items}/> : <CartContainer cart={this.state.cart}/>}

      </div>
    )};
}

export default App;
