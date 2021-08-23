import React, { useState } from 'react';
import Header from '../header/Header';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
    Touchable
} from 'react-native'
import ArrowBack from '../../assets/arrowBack.svg';
import { useTranslation } from 'react-i18next';
import i18 from '../../i18/i18n';
import styles from '../../styles/Styles';
import { dominantLight } from '../../styles/SystemColor';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import PayBtn from '../../assets/svg/payBtn';
import ApplePayBtn from '../../assets/svg/applePayBtn';
import { goBack } from '../../routes/routes';

export default (props) => {
    const paymaents = 'payments'.toString();
    const [value, setValue] = useState(1)
    const { t } = useTranslation()
    //scrollView wrap the componnent children in order to dismiss the keyboard when tapping outside of the input
    return (
        <>
            <View style={{ margin: 20 }}>
                <Text style={[_styles.boldTxt, _styles.decoratedTxt]}>
                    {i18.t(`${paymaents}.sixth`)}
                </Text>
                <TouchableOpacity >
                    <ApplePayBtn style={_styles.applePayBtn} />
                </TouchableOpacity>
                <TouchableOpacity style={_styles.payBtn}>
                    <PayBtn style={{ alignSelf: 'center' }} />
                </TouchableOpacity>
            </View>
        </>
    )
}

const _styles = StyleSheet.create({
    content: {
        alignSelf: 'center',
        alignContent: 'center',
        paddingVertical: 30
    },
    payBtn: {
        backgroundColor: dominantLight,
        borderRadius: 10,
        height: 55,
        justifyContent: 'center',
        width: 260,
        alignSelf: 'center'
    },
    paymentBtnRow: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: 21,
        textAlign: 'center',
        color: dominantLight
    },
    input: {
        height: 40,
        width: 40,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        color: dominantLight,
        fontSize: 18,
        backgroundColor: '#05163C'
    },
    boldTxt: {
        fontWeight: 'bold',
        fontSize: 22,
        color: dominantLight,
        textAlign: 'center',
    },
    decoratedTxt: {
        textDecorationColor: 'white',
        textDecorationLine: 'underline',
        alignSelf: 'center',
        marginBottom: 40
    },
    applePayBtn: {
        alignSelf: 'center',
        marginBottom: 40
    }
})