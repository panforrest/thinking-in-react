import React from 'react';
import './index.css'
import ReactDOM from 'react-dom'

class SearchBar extends React.Component {
  render(){
    return(
      <form>
        <input type="text" placeholder='Search...' />
        <p>
          <input type="checkBox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
}

class FilterableProductTable extends React.Component{
  render(){
    return(
      <div>
        <SearchBar />
      </div>
    )
  }
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]

ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>, document.getElementById('root'))