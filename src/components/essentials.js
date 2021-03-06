import React from 'react';
import { View, Text } from 'native-base';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');
export default class Essentials extends React.Component {
    constructor(props) {
        super(props);
    }
    _renderText() {
        return this.props.ess.map(({ item }) => {
            return <Text>{`${item}\n`}</Text>;
        });
    }
    render() {
        return <View style={styles.parent}>{this._renderText()}</View>;
    }
}

const styles = StyleSheet.create({
    parent: { flexDirection: 'row' }
});
