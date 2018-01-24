import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Button = () => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle}>Click Me!!</Text>
        </TouchableOpacity>
    );
};
const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 1,
        borderWidth: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}
export default Button;