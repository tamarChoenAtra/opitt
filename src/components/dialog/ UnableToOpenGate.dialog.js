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

    const unableToOpenGateDialog = 'unableToOpenGateDialog'.toString();

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
                {t(`${unableToOpenGateDialog}.details1`)}
            </Text>
            <Text style={[styles.noteTxt, _styles.details]}>
                {t(`${unableToOpenGateDialog}.details2`)}
            </Text>
        </>
    }

    return (
        <Dialog
            visible={visible}
            title={t(`${unableToOpenGateDialog}.title`)}
            content={contentDialog()}
            closeHandlePress={() => setVisible(false)}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${unableToOpenGateDialog}.submit`),
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
        details: {
            fontWeight: 'normal',
            fontSize: 15,
            lineHeight: 32,
            display: 'flex',
            textAlign: 'right',
            alignItems: 'center'

        },
        details: {
            fontSize: 16,
            lineHeight: 20
        }
    }
)

