import React from 'react';
import { Text, View, Platform} from 'react-native';
import {orangeColor} from '../../utils/constants';

const Header = (props) => {
    const {viewStyle} = styles;
  return (
        <View style={viewStyle} >
            <View style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1, height:60, marginBottom: 5}}>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: '900',}}>{props.headerText}</Text>
            </View>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: orangeColor, 
        height: 70, 
        flexDirection: 'row', 
        alignItems: 'flex-end',
        position: 'relative',
        marginTop: Platform.OS === 'ios' ? 0 : 24,
    }
};

export {Header};
