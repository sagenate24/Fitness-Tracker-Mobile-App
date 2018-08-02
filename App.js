import React from 'react';
import { View } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware/index';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={{flex: 1}}>
          <View style={{height: 20}} />
          <History />
        </View>
      </Provider>
    );
  }
}
