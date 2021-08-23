import React, { useState } from 'react';
import Dialog, {
    DialogContent,
    SlideAnimation,
} from 'react-native-popup-dialog';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {
    ligth
} from '../../styles/SystemColor';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import LinearGradientBtn from '../genericComponents/LinearGradientBtn';

export default (props) => {

    const {
        visible,
        setVisible,
        deleteCarFunc,
        indexCar
    } = props;

    const {
        t
    } = useTranslation();

    const deleteCar = 'deleteCar'.toString();

    return (
        <Dialog
            dialogAnimation={new SlideAnimation({
                slideFrom: 'bottom',
            })}
            onTouchOutside={() => setVisible(false)}
            dialogStyle={_styles.dialogStyle}
            visible={visible}
        >
            <DialogContent
                style={[_styles.dialogContent]}
            >
                <View style={[styles.contentAuth, { zIndex: 1 }]}>
                    <Text style={[styles.title, _styles.title]}>
                        {t(`${deleteCar}.title`)}
                    </Text>
                    <Text style={[styles.noteTxt, _styles.details]}>
                        {t(`${deleteCar}.details`)}
                    </Text>

                    <LinearGradientBtn
                        handlePress={() => deleteCarFunc(indexCar)}
                        content={t(`${deleteCar}.delete`)}
                        width={130}
                    />
                </View>
                {/* <ChipButton handlePress={() => goBack(props)} /> */}
            </DialogContent>
        </Dialog>
    )
}

const _styles = StyleSheet.create(
    {
        dialogStyle: {
            backgroundColor: '#0A2550',
            borderRadius: 20,
            width: '90%',
        },
        linearGradientBtn: {
            width: 120,
            height: 50,
            // paddingHorizontal: 20,
            // marginHorizontal: 10
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
            marginVertical: '10%'
        },
        dialogContent: {
            marginVertical: '5%',
            justifyContent: 'center',
            alignContent: 'center'
        },
        title: {
            fontSize: 24,
            marginBottom: 20
        },
        details: {
            fontSize: 16,
            lineHeight: 20,
            textAlign: 'center',
            marginBottom: 20
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
