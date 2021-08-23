import LinearGradient from "react-native-linear-gradient";
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";
import React from "react";
import { dominant } from "../../styles/SystemColor";
import styles from '../../styles/Styles';

export default (props) => {

    const {
        handlePress,
        size,
        width,
        color,
        content
    } = props;

    const linearGradientBtn = () => {
        return {
            height: size === 'large' ? 45 : 50,
            width: width && width,
            paddingHorizontal: 20,
            marginHorizontal: 10
        }
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <LinearGradient colors={[dominant, '#FF6813']} style={[_styles.linearGradientBtn, linearGradientBtn()]}>
                <Text style={[styles.noteTxt, _styles.txtBtn]}>
                    {content}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const _styles = StyleSheet.create({
    linearGradientBtn: {
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtBtn: {
        fontWeight: 'bold',
        color: 'white'
    },
    styleBtn: {
        width: 120,
        height: 50,
        paddingHorizontal: 20,
        marginHorizontal: 10
    }
})