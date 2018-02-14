import React from 'react';
import { View, Text } from 'native-base';

export default class RoomPrices extends React.Component {
    constructor(props) {
        super(props);
    }
    _showRoomPrices() {
        let keys = this.props.roomKey;
        let values = this.props.roomPrice;
        return keys.map((item, index) => {
            return (
                <Text>{`${item}: ${
                    values[index] ? values[index] : 'NO_PRICING_AVAILABLE'
                }`}</Text>
            );
        });
    }
    render() {
        return <View>{this._showRoomPrices()}</View>;
    }
}
