import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Dimensions,StyleSheet } from 'react-native';
import { ListItem } from 'native-base';
const { height, width } = Dimensions.get('window');

export default class Row extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ListItem
                onPress={() => {
                    this.props.onClick(this.props.hotel);
                }}
                style={styles.parent}
            >
                <View
                    style={styles.child}
                >
                    <Text style={styles.hotelName}>
                        {this.props.hotel.name}
                    </Text>
                    <Text>
                        {typeof this.props.minPrice === 'string'
                            ? this.props.minPrice
                            : `${this.props.minPrice.room} : ${
                                  this.props.minPrice.price
                              }`}
                    </Text>
                    <Text>{this.props.hotel.city}</Text>
                    <Text>{this.props.hotel.locality}</Text>
                </View>

                <View style={styles.arrowContainer}>
                    <Text style={styles.arrow}> ></Text>
                </View>
            </ListItem>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        width: width,
        height: height / 6,
        marginVertical: 2,
        marginHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    child: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    hotelName:{ fontSize: 18, fontWeight: 'bold' },
    arrow:{ fontSize: 18 },
    arrowContainer:{ width: 50, height: 50 }
});