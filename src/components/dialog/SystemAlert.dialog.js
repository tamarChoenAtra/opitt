import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import Dialog from '../dialog/Dialog';

export default (props) => {

    const systemAlertDialog = 'systemAlertDialog'.toString();

    const {
        visible,
        setVisible
    } = props;

    const {
        t
    } = useTranslation();

    const contentDialog = () => {
        return <>
            <Text style={[styles.txt,styles.txtContentDialog]}>
                {t(`${systemAlertDialog}.details1`)}
            </Text>
            <Text style={[styles.txt,styles.txtContentDialog]}>
                {t(`${systemAlertDialog}.details2`)}
            </Text>
        </>
    }

    return (
        <Dialog
            setVisible={setVisible}
            visible={visible}
            content={contentDialog()}
            title={t(`${systemAlertDialog}.title`)}
            closeHandlePress={() => setVisible(false)}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${systemAlertDialog}.submit`),
                    width: 100,
                    size:'small'
                },
                {
                    handlePress: async () => {
                        await setVisible(false);
                    },
                    body: t(`${systemAlertDialog}.cancel`),
                    width: 100,
                    size:'small'
                }
            ]}
        />
    )
}

const _styles = StyleSheet.create(
    {
    }
)

