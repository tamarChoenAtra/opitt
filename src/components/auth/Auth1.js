import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView
} from 'react-native';
import styles from '../../styles/Styles';
import {
    bg,
    ligth
} from '../../styles/SystemColor';
import DropDownLanguage from '../dropdwon/DropDownLanguage';
import { useTranslation } from 'react-i18next';
import HeaderAuth from '../header/HeaderAuth';
import LinearGradientBtn from '../genericComponents/LinearGradientBtn';
import {
    navigateScreen
} from '../../routes/routes';
import Auth2 from './Auth2';
import {
    languages
} from '../../i18/languageList';

export default (props) => {

    const {
        t
    } = useTranslation();

    const authSMS1 = 'authSMS1'.toString();
    const form = 'form'.toString();

    const [visible, setVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState({
        areaCode: null,
        code: null
    });

    const navigateTerms = () => {
        props.navigation.navigate('Terms')
    }

    const setPhoneNumberFunc = (key, value) => {
        setPhoneNumber({ ...phoneNumber, [key]: value })
    }

    const textInput = (value, placeholder, alignment, key) =>
        <TextInput
            onChangeText={(value) => setPhoneNumberFunc(key, value)}
            borderColor="#FFFFFF"
            selectionColor="#FFFFFF"
            style={[_styles.textInput, alignment && _styles.textAlignCenter]}
            placeholderTextColor="#FFFFFF99"
            placeholder={placeholder}
            value={phoneNumber[key] || value}
        />

    return (
        <>
            <View style={styles.screenAuth}>
                <HeaderAuth />
                <ScrollView
                    contentContainerStyle={styles.contentAuth}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.title}>
                        {t(`${authSMS1}.title`)}
                    </Text>
                    <View style={_styles.wrapDetails}>
                        <Text style={[styles.txt, _styles.details]}>
                            {t(`${authSMS1}.details1`)}
                        </Text>
                        <Text style={[styles.txt, _styles.details]}>
                            {t(`${authSMS1}.details2`)}
                        </Text>
                    </View>

                    <View style={_styles.wrapInput}>
                        <View style={_styles.input1}>
                            {textInput('+972', '', 'center', 'areaCode')}
                        </View>
                        <View style={{ flex: 0.3 }}></View>
                        <View style={_styles.input2}>
                            {textInput('', t(`${form}.phoneNumber`, '', 'code'))}
                        </View>
                    </View>

                    <View style={_styles.subDetailsTop}>
                        <Text style={[styles.txt, _styles.subDetails]}>
                            {t(`${authSMS1}.subDetails`)}
                            <Text
                                onPress={navigateTerms}
                                style={styles.link}>
                                {t(`${authSMS1}.terms`)}
                            </Text>
                        </Text>
                    </View>

                    <View style={_styles.subDetailsTop}>
                        <LinearGradientBtn
                            width={130}
                            handlePress={() => setVisible(true)}
                            content={t(`${authSMS1}.submit`)}
                        />
                    </View>

                </ScrollView>
            </View>

            <View style={_styles.wrapFooter}>
                <DropDownLanguage
                    array={languages}
                />
            </View>

            <Auth2
                {...props}
                setVisible={setVisible}
                visible={visible}
            />
        </>
    )
}

const _styles = StyleSheet.create(
    {
        linearGradientBtn: {
            width: 130,
            height: 50,
            alignSelf: 'center',
            marginTop: 15
        },
        wrapFooter: {
            marginBottom: '2%'
        },
        linearGradientBtnTxt: {
            fontWeight: 'bold',
            color: 'white'
        },
        wrapDetails: {
            marginTop: 40
        },
        textInput: {
            height: 40,
            color: ligth,
            borderBottomWidth: 0.5,
            fontSize: 18,
        },
        textAlignCenter: {
            textAlign: 'center'
        },
        details: {
            textAlign: 'center'
        },
        subDetails: {
            fontSize: 15,
            textAlign: 'center'
        },
        subDetailsTop: {
            marginTop: 20
        },
        wrapInput: {
            marginHorizontal: 35,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        input1: {
            flex: 1,
        },
        input2: {
            flex: 2.5,
        }
    }
)
