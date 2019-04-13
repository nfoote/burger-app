import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad : 1,
            bacon: 2,
            cheese: 0,
            meat: 1
        }
    }
    render () {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;