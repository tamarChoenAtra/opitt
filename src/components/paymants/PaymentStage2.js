import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
} from 'react-native';
import PayBtn from '../../assets/svg/payBtn';
import CVC from '../../assets/svg/cvc';
import Slash from '../../assets/svg/slash';
import i18 from '../../i18/i18n';
import { useTranslation } from 'react-i18next';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import LinearGradientBtn from '../genericComponents/LinearGradientBtn';
import styles from '../../styles/Styles';
import { dominantLight } from '../../styles/SystemColor';
import AnimatedView from '../genericComponents/AnimatedView';

export default (props) => {
    const { t } = useTranslation();
    const returnWidth = (width) => {
        return { width: width }
    }
    const paymentsStage2 = 'paymentsStage2'.toString();

    return (
        <>
            <AnimatedView>
                <View style={_styles.paymentsView}>
                    <PayBtn style={_styles.payBtn} />
                    <Row style={_styles.row}>
                        <Text style={_styles.boldTxt}>
                            {i18.t(`${paymentsStage2}.fullname`)}
                        </Text>
                        <Text style={_styles.noteTxt}>{"  "}{i18.t(`${paymentsStage2}.fifth`)}</Text>
                    </Row>
                    <TextInput
                        style={_styles.input}
                    />
                    <Row style={_styles.row}>
                        <Text style={_styles.boldTxt}>
                            {i18.t(`${paymentsStage2}.cardSerNum`)}
                        </Text>
                    </Row>
                    <TextInput
                        style={_styles.input}
                    />
                    <Row style={_styles.row}>
                        <Col cols={1.5} style={_styles.labelsInOneRow}>
                            <Text style={_styles.boldTxt}>
                                {i18.t(`${paymentsStage2}.expiryDate`)}
                            </Text>
                        </Col>
                        <Col cols={1} style={_styles.labelsInOneRow}>
                            <Text style={_styles.boldTxt}>
                                {i18.t(`${paymentsStage2}.cvc`) + " "}
                                <CVC />
                            </Text>
                        </Col>
                    </Row>
                    <Row style={_styles.row}>
                        <Col cols={1}>
                            <TextInput style={[_styles.input, returnWidth('90%')]} />
                        </Col>
                        <Slash style={{ marginRight: 5 }} />
                        <Col cols={1}>
                            <TextInput style={[_styles.input, returnWidth('90%')]} />
                        </Col>
                        <Col cols={2}>
                            <TextInput style={[_styles.input, returnWidth('70%')]} />
                        </Col>
                    </Row>
                </View>
                <LinearGradientBtn
                    style={_styles.finishBtn}
                    content={<Text style={[styles.noteTxt, _styles.finishTxt]}> {i18.t(`${paymentsStage2}.finish`)}</Text>}
                />
            </AnimatedView>
        </>
    )
}

const _styles = StyleSheet.create({
    paymentsView: {
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30,
        padding: 20
    },
    payBtn: {
        alignSelf: 'center'
    },
    row: {
        direction: 'rtl',
        alignItems: 'flex-end',
        padding: 20,
    },
    finishBtn: {
        width: 200,
        height: 60,
        alignSelf: 'center',
        marginTop: 30
    },
    finishTxt: {
        fontWeight: 'bold',
        color: dominantLight,
        fontSize: 20
    },
    input: {
        borderBottomColor: '#B1B1B1',
        borderBottomWidth: 2,
        width: '90%',
        alignSelf: 'center'
    },
    labelsInOneRow: {
        alignItems: 'flex-start'
    },
    boldTxt: {
        fontWeight: 'bold',
        fontSize: 20,
        // fontFamily: 'Assistant-regular',
        color: '#000000',
        // alignSelf: 'flex-end',
        // paddingHorizontal: 20
    },
    noteTxt: {
        color: '#717171',
        // fontFamily: 'Assistant-regular',
        // alignSelf: 'auto',

        // alignSelf: 'flex-end'
    },
    slash: {
        color: 'black',
        fontSize: 25,
        fontWeight: '400',
    }
})