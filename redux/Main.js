import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/fetchData";
 

class Main extends Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    return (
      <div>
        <ItemList />
        <hr />
        <CartList />
        <hr />
        <Total />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.products.item,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(Main);