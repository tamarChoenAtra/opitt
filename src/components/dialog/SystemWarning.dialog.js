import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import Dialog from '../dialog/Dialog';

export default (props) => {

    const systemWarning = 'systemWarning'.toString();

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
                {t(`${systemWarning}.details1`)}
            </Text>
            <Text style={[styles.txt,styles.txtContentDialog]}>
                {t(`${systemWarning}.details2`)} {"X "}
                <Text style={[styles.txt,styles.txtContentDialog]}>
                    {t(`${systemWarning}.details3`)}
                </Text>
            </Text>
            <Text style={[styles.txt,styles.txtContentDialog]}>
                {t(`${systemWarning}.details4`)}
            </Text>
        </>
    }

    return (
        <Dialog
            setVisible={setVisible}
            visible={visible}
            content={contentDialog()}
            title={t(`${systemWarning}.title`)}
            closeHandlePress={() => setVisible(false)}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${systemWarning}.submit`),
                    width: 100,
                    size: 'small'
                }
            ]}
        />
    )
}

const _styles = StyleSheet.create(
    {
    }
)

