import React, { Component, PropTypes } from 'react';
import { Goods, Cart } from '../../blocks/blocks.jsx';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                <Goods
                    goods={ this.props.goods }
                    dispatch={ this.props.dispatch } />

                <Cart
                    cart={ this.props.cart }
                    dispatch={ this.props.dispatch } />
            </div>
        )
    }
}

App.propTypes = {
    goods: PropTypes.array.isRequired,
    cart: PropTypes.object.isRequired
};

export default connect(state => state)(App);
