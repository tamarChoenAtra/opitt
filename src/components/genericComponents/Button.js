import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";
import { dominant } from "../../styles/SystemColor";
import styles from '../../styles/Styles';

export default (props) => {

    const {
        kind,
        handlePress,
        size,
        width,
        content,
        //outline button
        smallborderWidth,
        colorOutline,
    } = props;

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


    const linearGradientBtn = () => {

        return {
            height: sizeButton(),
            width: width && width,
            paddingHorizontal: 20,
            marginHorizontal: 10,

            //outline button
            borderColor: colorOutline,
            borderWidth: smallborderWidth ? 0.5 : 1,
        }
    }

    const getColor = () => {
        switch (kind) {
            case 'outline':
                return ['transparent', 'transparent']
            default:
                return [dominant, '#FF6813']
        }
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <LinearGradient colors={getColor()} style={[_styles().linearGradientBtn, linearGradientBtn()]}>
                <Text style={[styles.noteTxt, _styles(colorOutline).txtBtn]}>
                    {content}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )

}


const _styles = (colorOutline) => StyleSheet.create({
    linearGradientBtn: {
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtBtn: {
        fontWeight: 'bold',
        color: colorOutline ? colorOutline : 'white'
    },
    styleBtn: {
        width: 120,
        height: 50,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        alignSelf: 'auto'
    }
})