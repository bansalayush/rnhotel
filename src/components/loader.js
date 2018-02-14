import React from 'react';
import { Dimensions , StyleSheet} from 'react-native';
import { View, Text, Spinner } from 'native-base';
const { height, width } = Dimensions.get('window');
export default class Loader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.parent}>
                <Spinner color="#f00" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignContent: 'center'
    }
});
