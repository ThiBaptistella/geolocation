/* @flow */

import React, { Component } from 'react';
import { Button } from 'react-native';

const FetchLocation = props => {
    return (
        <Button onPress={props.onGetLocation} title='Get Location' />
    );
  };

export default FetchLocation;
