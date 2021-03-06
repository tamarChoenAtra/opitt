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
            activeOpacity={0.7}
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
            width: 45,
            height: 45,
            borderRadius: 60,
            backgroundColor: '#3EA2FF',
            zIndex: 2,
            right: -5,
            top: -5,
            alignSelf: 'flex-end',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
)