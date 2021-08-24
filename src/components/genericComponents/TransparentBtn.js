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
        content,
        size,
        width,
        small,
        color,
        handlePress,
        smallborderWidth
    } = props;

    const txtBtn = () => {
        return {
            fontWeight: 'bold',
            color: color
        }
    }

    const linearGradientBtn = () => {

        return {
            height: sizeButton(),
            width: width && width,
            paddingHorizontal: 20,
            marginHorizontal: 10,
            borderColor: color,
            borderWidth: smallborderWidth ? 0.5 : 1,

        }
    }

    const sizeButton = () => {
        switch (size) {
            case 'large':
                return 55
            case "small":
                return 45
            default:
                return 50
        }
    }

    return (
        <TouchableOpacity
            // style={outLineBtn()}
            onPress={handlePress}
        >
            <LinearGradient colors={['transparent',"transparent"]} style={[_styles.linearGradientBtn, linearGradientBtn()]}>
                <Text style={[styles.noteTxt, txtBtn()]}>{content}</Text>
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
