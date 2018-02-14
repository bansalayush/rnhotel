/**
 * Displays the list of hotels along with Room with min price
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions
} from 'react-native';
import { List } from 'native-base';
import Row from './components/row/';
import Loader from './components/loader';
import store from '../store';
const { height, width } = Dimensions.get('window');
import { observer } from 'mobx-react';

@observer
export default class ListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        };
        this.store = store;
    }

    componentWillMount() {
        this.store.getHotelList();
        this.store.getRoomsList();
    }
    getMinPrice(item) {
        if (item.acacia) {
            return { room: 'acacia', price: item.acacia };
        } else if (item.mahogany) {
            return { room: 'mahogany', price: item.mahogany };
        } else if (item.maple) {
            return { room: 'maple', price: item.maple };
        } else if (item.oak) {
            return { room: 'oak', price: item.oak };
        } else {
            return 'NO_PRICING_YET';
        }
    }
    onItemClick(item) {
        this.store.getHotelDetails();
        this.props.navigation.navigate('DetailsPage', { hotel: item });
    }
    render() {
        console.log('------------render---------');
        // This causes 3 re-renders
        // return this.store.isHotelListLoading || this.store.isRoomListLoading?(
        return this.store.isLoading ? (
            <Loader />
        ) : (
            <FlatList
                style={styles.parent}
                contentContainerStyle={styles.child}
                data={this.store.hotelList}
                renderItem={({ item }, index) => (
                    <Row
                        onClick={this.onItemClick.bind(this)}
                        keys={index}
                        hotel={item}
                        minPrice={this.getMinPrice(
                            this.store.roomList.get(item.id)
                        )}
                        prices={this.store.roomList.get(item.id)}
                    />
                )}
            />
        );
    }
}
const styles = StyleSheet.create({
    parent: {
        marginTop: 18,
        marginHorizontal: 8,
        marginVertical: 4,
        backgroundColor: `rgba(0,255,0,0.05)`
    },
    child: {
        paddingHorizontal: 2,
        paddingVertical: 2
    }
});
