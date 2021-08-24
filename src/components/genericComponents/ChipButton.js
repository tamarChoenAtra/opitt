import React from 'react';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Plus from '../../assets/svg/Plus.svg';

export default (props) => {

    const {
        handlePress
    } = props;

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={_styles.closeIcon}
        >
            <Plus />
        </TouchableOpacity>
    )
}

const _styles = StyleSheet.create(
    {
        closeIcon: {
            width: 40,
            height: 40,
            borderRadius: 60,
            backgroundColor: '#3EA2FF',
            zIndex: 2,
            right: -10,
            top: -10,
            alignSelf: 'flex-end',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center'
        },
    }
)