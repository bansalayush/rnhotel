import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    Image
} from 'react-native';
import store from '../store';
const { height, width } = Dimensions.get('window');
import { observer } from 'mobx-react';
import Loader from './components/loader';
import Policies from './components/policies';
import Essentials from './components/essentials';
import RoomPrices from './components/RoomPrices';
@observer
export default class DetailsPage extends Component {
    constructor(props) {
        super(props);
        this.store = store;
        this.hotel = this.props.navigation.state.params.hotel;
    }
    _renderPolicies() {
        return this.store.policies.map(item => {
            return <Text>{` ${item} `}</Text>;
        });
    }
    _renderEssentials() {
        return this.store.essentials.map(item => {
            return <Text style={{ marginHorizontal: 4 }}>{item}</Text>;
        });
    }
    render() {
        this.rooms = this.store.roomList.get(this.hotel.id);
        this.roomKeys = Object.keys(this.rooms);
        this.roomsPrices = Object.values(this.rooms);

        return this.store.isHotelDetailsLoading ? (
            <Loader />
        ) : (
            <View style={styles.parent}>
                <Image
                    source={require('../treebo.png')}
                    style={styles.image}
                    resizeMethod={'auto'}
                    resizeMode={'contain'}
                />
                <RoomPrices
                    roomKey={this.roomKeys}
                    roomPrice={this.roomsPrices}
                />
                <View style={{ marginVertical: 8 }}>
                    {this._renderPolicies()}
                </View>

                <View style={{ flexDirection: 'row' }}>
                    {this._renderEssentials()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        width: width,
        height: height,
        marginTop: 24,
        marginHorizontal: 4,
        backgroundColor: '#0001'
    },
    image: { width: width - 8, marginBottom: 12 }
});
