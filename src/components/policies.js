import React from 'react';
import { View, Text } from 'native-base';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
export default class Policies extends React.Component {
    constructor(props) {
        super(props);
    }
    _renderText() {
        return this.props.policies.map(item => {
            return <Text>{item}</Text>;
        });
    }
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>{this._renderText()}</View>
        );
    }
}
