import React, { useState } from 'react';
import Header from '../header/Header';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native'
import ArrowBack from '../../assets/arrowBack.svg';
import { useTranslation } from 'react-i18next';
import i18 from '../../i18/i18n';
import styles from '../../styles/Styles';
import { dominantLight } from '../../styles/SystemColor';
import Row from '../genericComponents/Row';
import { goBack } from '../../routes/routes';
import PaymentStage1 from './PaymentStage1';
import PaymentStage2 from './PaymentStage2';

export default (props) => {
    const paymaents = 'payments'.toString();
    const [value, setValue] = useState(1);
    const { t } = useTranslation();
    const [stage, setStage] = useState(1);

    const setStageFunc = (stage) => {
        setStage(stage)
    }

    //scrollView wrap the componnent children in order to dismiss the keyboard when tapping outside of the input
    return (
        <>
            <ScrollView
                scrollEnabled={false}
                keyboardShouldPersistTaps="handled">
                <Header
                    headerRightElement={
                        <TouchableOpacity
                            onPress={() => {
                                stage == 2 ?
                                    setStageFunc(1) :
                                    goBack(props)
                            }}
                        >
                            <ArrowBack />
                        </TouchableOpacity>
                    }
                />
                <View style={_styles.content}>
                    <Text style={[styles.noteTxt, _styles.txt]}>
                        {i18.t(`${paymaents}.first`) + " XXX " + i18.t(`${paymaents}.NIS`)}
                    </Text>
                    <Text style={[styles.noteTxt, _styles.txt]}>
                        {i18.t(`${paymaents}.second`) + " XX"}
                    </Text>
                    <Text style={[styles.noteTxt, _styles.txt]}>
                        {i18.t(`${paymaents}.third`) + " X"}
                    </Text>
                </View>
                <Row style={[_styles.paymentBtnRow]}>
                    <Text style={[_styles.boldTxt]}>
                        {i18.t(`${paymaents}.fourth`) + " XXX " + i18.t(`${paymaents}.NIS`)}
                    </Text>
                </Row>

                {stage == 1 ? <PaymentStage1 handlePress={setStageFunc} /> : <PaymentStage2 />}
            </ScrollView>
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
        fontFamily: 'Assistant-Regular',
        backgroundColor: '#05163C'
    },
    boldTxt: {
        fontWeight: 'bold',
        fontSize: 22,
        color: dominantLight,
        textAlign: 'center',
        fontFamily: 'Assistant-regular'
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