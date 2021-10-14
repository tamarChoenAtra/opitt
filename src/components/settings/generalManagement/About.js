import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';
import Row from '../../genericComponents/Row';
import ArrowBack from '../../../assets/arrowBack.svg';
import styles from '../../../styles/Styles';
import { Regular } from '../../../styles/SystemFonts';
import Header from '../../header/Header';
function About(props) {
    const { navigation } = props;
    const { t } = useTranslation();
    const about = 'about'.toString();
    return (
        <>
            <Header
                {...props}
                headerRightElement={
                    <Row style={_styles.row}>
                        <Text style={styles.headerWithTitle}>
                            {t(`${about}.title`)}
                        </Text>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack();
                        }}>
                            <ArrowBack />
                        </TouchableOpacity>
                    </Row>
                }
            />
            <View style={_styles.body}>
                <Text style={_styles.bodyTxt}>{t(`${about}.body1`)}</Text>
                <Text style={_styles.bodyTxt}>{t(`${about}.body2`)}</Text>
            </View>
        </>
    )
}

export default About;

const _styles = StyleSheet.create(
    {
        body: {
            marginHorizontal: 30,
            marginVertical: 30,
        },
        bodyTxt: {
            lineHeight: 30,
            fontFamily: Regular,
            fontSize: 18,
            textAlign: 'right',
            color: '#FFFFFF'
        },
        row: {
            alignItems: 'center'
        },
    }
)
