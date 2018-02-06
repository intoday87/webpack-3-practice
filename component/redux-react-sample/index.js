import React  from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import Counter from './components/Counter';

export default class App extends React.Component {
  render() {
    const store = this.props.store;
    return (
      <Provider store={store}>
        <Counter
          value={store.getState()}
          onIncrement={() => store.dispatch({type: 'INCREMENT'})}
          onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        />
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.symbol.isRequired,
};
