import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
    return (
        <View style={[styles.containerViewStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerViewStyle: {
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#ddd',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 20,
    }
};

export {Card};
