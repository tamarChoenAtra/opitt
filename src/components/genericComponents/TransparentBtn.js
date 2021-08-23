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
        small,
        color,
        handlePress,
        smallborderWidth
    } = props;

    const outLineBtn = () => {
        return {
            minWidth: 120,
            height: small ? 45 : 50,
            borderRadius: 50,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: color,
            borderWidth: smallborderWidth ? 0.5 : 1,
            paddingHorizontal: 20,
            marginHorizontal: 10
        }
    }

    const txtBtn = () => {
        return {
            fontWeight: 'bold',
            color: color
        }
    }

    return (
        <TouchableOpacity
            style={outLineBtn()}
            onPress={handlePress}
        >
            <Text style={[styles.noteTxt, txtBtn()]}>{content}</Text>
        </TouchableOpacity>
    )
}
