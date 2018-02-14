/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import List from './src/ListPage';
import Details from './src/DetailsPage';
export default StackNavigator(
    {
        ListPage: { screen: List },
        DetailsPage: { screen: Details }
    },
    {
        index: 0,
        initialRouteName: 'ListPage',
        headerMode: 'none'
    }
);
