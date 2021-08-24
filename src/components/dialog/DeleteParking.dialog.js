import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import {
    ligth
} from '../../styles/SystemColor';
import Dialog from '../dialog/Dialog';

export default (props) => {

    const deleteParkingDialog = 'deleteParkingDialog'.toString();

    const {
        visible,
        setVisible
    } = props;

    const {
        t
    } = useTranslation();

    const contentDialog = () => {
        return <>
            <Text style={[styles.noteTxt, _styles.details]}>
                {t(`${deleteParkingDialog}.details`)}
            </Text>
        </>
    }

    return (
        <Dialog
            visible={visible}
            title={t(`${deleteParkingDialog}.title`)}
            closeHandlePress={() => setVisible(false)}
            content={contentDialog()}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${deleteParkingDialog}.submit`),
                    width: 120,
                }
            ]}
        />
    )
}

const _styles = StyleSheet.create(
    {

        txt: {
            color: ligth,
            fontStyle: 'normal',
            // fontFamily: font
        },
        title: {
            fontWeight: '900',
            textAlign: 'center',
            fontSize: 24,
            marginBottom: '2%'
        },
        details: {
            fontWeight: 'normal',
            fontSize: 15,
            lineHeight: 20,
            display: 'flex',
            alignItems: 'center',
            fontSize: 16,
            textAlign:'center'
        }
    }
)

