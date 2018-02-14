import React from 'react';
import { Dimensions } from 'react-native';
import { View, Text, Spinner } from 'native-base';
const { height, width } = Dimensions.get('window');
export default class Loader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View
                style={{
                    width: width,
                    height: height,
                    justifyContent: 'center',
                    alignContent: 'center'
                }}
            >
                <Spinner color="#f00" />
            </View>
        );
    }
}
