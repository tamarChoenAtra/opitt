import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Button,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import styles from '../../styles/Styles';
import Dialog, { DialogContent, SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import { useTranslation } from 'react-i18next';
import {
    ligth
} from '../../styles/SystemColor';
import HeaderAuth from '../header/HeaderAuth';
import LinearGradientBtn from '../genericComponents/LinearGradientBtn';
import {
    goBack,
    navigateScreen
} from '../../routes/routes';
import ChipButton from '../genericComponents/ChipButton';
import TransparentBtn from '../genericComponents/TransparentBtn';

export default (props) => {

    const authSMS2 = 'authSMS2'.toString();

    const {
        i18n,
        t
    } = useTranslation();

    const [visible, setVisible] = useState(true);

    const textInput = (alignment) =>
        <TextInput
            // onChangeText={(value) => setPhoneNumberFunc(key, value)}
            borderColor="#FFFFFF"
            selectionColor="#FFFFFF"
            style={[_styles.textInput]}
            placeholderTextColor="#FFFFFF99"
            placeholder=" "
        />

    const threeTextInput = () =>
        [...Array(3)].map((one) =>
            textInput())

    return (
        <>
            <View style={styles.screenAuth}>
                <HeaderAuth />
                <View
                    showsVerticalScrollIndicator={false}
                    style={[_styles.scrollView]}
                >
                    <ScrollView contentContainerStyle={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
                        <View style={[styles.contentAuth, { zIndex: 1 }]}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.title, _styles.title]}>
                                    {t(`${authSMS2}.title`)}
                                </Text>
                                <Text style={[styles.noteTxt, _styles.details]}>
                                    {t(`${authSMS2}.details1`)}
                                </Text>
                                <Text style={[styles.noteTxt, _styles.details]}>
                                    {t(`${authSMS2}.tel`)}
                                </Text>
                                <Text style={[styles.noteTxt, _styles.details]}>
                                    {t(`${authSMS2}.details2`)}
                                </Text>
                            </View>
                            <View style={_styles.rowInputs}>
                                {threeTextInput()}
                                <View style={_styles.space} />
                                {threeTextInput()}
                            </View>
                            <View>
                                <Text style={[styles.noteTxt, _styles.details]}>
                                    {t(`${authSMS2}.tryAgain1`)}
                                    <Text style={styles.link}>
                                        {t(`${authSMS2}.tryAgain2`)}
                                    </Text>
                                </Text>
                            </View>
                            <View style={[styles.rowDirection, { padding: 25, zIndex: 1 }]}>
                                <LinearGradientBtn
                                    handlePress={async () => {
                                        await setVisible(false);
                                        navigateScreen(props, 'Auth3');
                                    }}
                                    content={t(`${authSMS2}.continue`)}
                                    width={120}
                                />
                                <TransparentBtn
                                    smallborderWidth
                                    content={t(`${authSMS2}.back`)}
                                    color={ligth}
                                    handlePress={async () => {
                                        await setVisible(false);
                                        goBack(props);
                                    }}
                                />
                            </View>
                        </View>
                    </ScrollView>
                    <ChipButton handlePress={() => goBack(props)} />
                </View>
            </View>
        </>
    )
}

const _styles = StyleSheet.create(
    {
        scrollView: {
            marginVertical: '27.5%',
            backgroundColor: '#05163C',
            borderRadius: 20,
            height: '45%',
            width:'100%',
            paddingHorizontal:0
        },
        viewTitle: {
            marginBottom: 15,
            zIndex: 1,
            paddingHorizontal: 10
        },
        txt: {
            color: ligth,
            fontStyle: 'normal',
            // fontFamily: font
        },
        title: {
            fontWeight: '900',
            textAlign: 'center',
            fontSize: 15
        },
        details: {
            fontWeight: 'normal',
            fontSize: 15,
            lineHeight: 32,
            display: 'flex',
            textAlign: 'right',
            alignItems: 'center'

        },
        dialogStyle: {
            backgroundColor: '#0A2550',
            borderRadius: 20,
            width: '90%',
            // height: '50%'
        },
        linearGradientBtn: {
            width: 120,
            height: 50,
            paddingHorizontal: 20,
            marginHorizontal: 10
        },
        linearGradientBtnTxt: {
            fontWeight: 'bold',
            color: ligth
        },
        space: {
            width: '5%'
        },
        rowInputs: {
            flexDirection: 'row',
            marginHorizontal: '1%',
            justifyContent: 'center',
            margin: 30
        },
        dialogContent: {
            marginHorizontal: 10,
            marginVertical: '5%',
        },
        textInput: {
            // height: 40,
            width: '8%',
            color: ligth,
            borderBottomWidth: 1.5,
            fontSize: 18,
            marginHorizontal: '2%',
        },
        title: {
            fontSize: 24,
            marginBottom: '2%'
        },
        details: {
            fontSize: 16,
            lineHeight: 20
        },
        outLineBtn: {
            minWidth: 120,
            height: 50,
            borderRadius: 50,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: ligth,
            borderWidth: 0.5,
            paddingHorizontal: 20,
            marginHorizontal: 10
        }
    }
)
