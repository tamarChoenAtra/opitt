import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import Dialog from './Dialog';

export default (props) => {

    const parkingPermitDialog = 'parkingPermitDialog'.toString();

    const {
        visible,
        setVisible
    } = props;

    const {
        t
    } = useTranslation();

    const contentDialog = () => {
        return <>
            <Text style={[styles.noteTxt,styles.txtContentDialog, _styles.details]}>
                {t(`${parkingPermitDialog}.details`)}
            </Text>
        </>
    }

    return (
        <Dialog
            setVisible={setVisible}
            visible={visible}
            title={t(`${parkingPermitDialog}.title`)}
            content={contentDialog()}
            closeHandlePress={() => setVisible(false)}
            buttons={[
                {
                    handlePress: () => {
                        setVisible(false);
                    },
                    body: t(`${parkingPermitDialog}.submit`),
                    width: 190,
                    size: "large"
                }
            ]}
        />
    )
}

const _styles = StyleSheet.create(
    {      
        details: {
            marginVertical: 10
        }
    }
)

