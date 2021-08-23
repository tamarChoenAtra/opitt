import React from 'react';
import { StyleSheet, View } from 'react-native';

export default (props) => {
    return (
        <>
            <View style={[_styles.row, props.style]}>
                {props.children}
            </View>
        </>
    )
}

const _styles = StyleSheet.create(
    {
        row: {
            flexDirection: 'row',
        }
    }
)
