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

    const gateOpenSuccess = 'gateOpenSuccess'.toString();

    const {
        visible,
        setVisible
    } = props;

    const {
        t
    } = useTranslation();


    return (
        <Dialog
            visible={visible}
            title={t(`${gateOpenSuccess}.title`)}
            closeHandlePress={() => setVisible(false)}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${gateOpenSuccess}.submit`),
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


        title: {
            fontSize: 24,
            marginBottom: '2%'
        },
        details: {
            fontSize: 16,
            lineHeight: 20
        }
    }
)

