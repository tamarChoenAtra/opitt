import React, { useEffect } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View
} from 'react-native';
import Line from './Line';
import styles from '../../styles/Styles';
import FrameIcon from '../../assets/svg/FrameIcon.svg';


function FirstScreen(props) {

    useEffect(() => {
        setTimeout(function () {
            props.navigation.navigate('Auth1');
        }, 2300)
    }, [props.navigation])

    return (
        <SafeAreaView style={styles.background} >
            <View style={[styles.placeCenter, _styles.center]}>
                <FrameIcon />
                <Line />
            </View>
        </SafeAreaView>

    )
}

export default FirstScreen;

const _styles = StyleSheet.create(
    {
        center: {
            flex: 1
        }
    }
)