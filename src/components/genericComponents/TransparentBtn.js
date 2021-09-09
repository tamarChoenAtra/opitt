import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import { Regular } from '../../styles/SystemFonts';

export default (props) => {
    const {
        handlePress,
        content,
        color,
        fill,
        txtColor,
        size,
        width,
        accessibilityValue
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

    const btnStyle = () => {
        return {
            height: sizeButton(),
            backgroundColor: fill ? color : 'transparent',
            borderColor: color,
            borderWidth: 1,
            borderRadius: 15,
            width: width ? width : 170,
        }
    }

    const txtStyle = () => {
        return {
            color: fill ? 'black' : 'white',

        }
    }

    return (
        <>
            <TouchableOpacity
                onPress={handlePress}
                style={[_styles().btn, btnStyle()]}
            // accessibilityValue={accessibilityValue}
            >
                <Text style={[_styles().txt, txtStyle()]}>
                    {content}
                </Text>
            </TouchableOpacity>
        </>
    )
}

const _styles = (color,) => StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    txt: {
        fontFamily: Regular,
        fontWeight: 'bold',
        fontSize: 18
    }
})