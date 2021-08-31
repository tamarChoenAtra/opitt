import React from 'react';
import { StyleSheet, View } from 'react-native';

export default (props) => {
    return (
        <>
            <View style={[_styles(props.cols).col, props.style]}>
                {props.children}
            </View>
        </>
    )
}

const _styles = (flex) => StyleSheet.create(
    {
        col: {
            flex
        }
    }
)
