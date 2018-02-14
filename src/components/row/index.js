import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Dimensions } from 'react-native';
import { ListItem } from 'native-base';
const { height, width } = Dimensions.get('window');
/*IRowProps{
    hotel: {city: string, locality: string, name:string, id: number }

}*/
export default class Row extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.hotel);
        return (
            <ListItem
                onPress={() => {
                    this.props.onClick(this.props.hotel);
                }}
                style={{
                    width: width,
                    height: height / 6,
                    marginVertical: 2,
                    marginHorizontal: 4,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
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

                <View style={{ width: 50, height: 50 }}>
                    <Text style={{ fontSize: 18 }}> ></Text>
                </View>
            </ListItem>
        );
    }
}

// Row.propTypes = {
//     hotel: PropTypes.objectOf(
//         PropTypes.string,
//         PropTypes.number,
//         PropTypes.string,
//         PropTypes.string
//     ).isRequired,
//     onClick:PropTypes.func.isRequired,
// };
