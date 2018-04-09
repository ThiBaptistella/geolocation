import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

import FetchLocation from './components/FetchLocation';
import Maps from './components/Maps';

export default class App extends React.Component {
  state = {
    userLocation: null
  }

  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition( position => {
       this.setState ({
         userLocation: {
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421
         }
       })
      console.log(position);
    },err => console.log(err));
  }
  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocation}/>
        <Maps userLocation={this.state.userLocation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
