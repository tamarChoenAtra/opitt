import React from 'react';
import {
    TouchableOpacity,
    Text,
    TextInput,
    View,
    StyleSheet
} from 'react-native';
import ArrowBack from '../../assets/arrowBack.svg';
import styles from '../../styles/Styles';
import Header from '../header/Header';
import i18 from '../../i18/i18n';
import { useTranslation } from 'react-i18next';
import BigDelete from '../../assets/svg/bigDelete.svg'
import Edit from '../../assets/svg/edit.svg'
import LinearGradientBtn from '../genericComponents/LinearGradientBtn';
import { navigateScreen } from '../../routes/routes';

export default (props) => {

    const authCarDetails = 'authCarDetails'.toString();
    const {
        t
    } = useTranslation();

    const {
        route
    } = props;

    console.log(route.params);
    return (
        <>
            <Header
                headerRightElement={
                    <TouchableOpacity onPress={() => navigateScreen(props, 'CarsDetailsForm')}>
                        <ArrowBack />
                    </TouchableOpacity>
                }
            />
            <Text style={styles.title}>
                {i18.t(`${authCarDetails}.title`)}
            </Text>
            <Text style={_styles.indexCarTxt}>{t(`${authCarDetails}.indexCard`) + " 1:"}</Text>
            <View style={styles.rowDirection}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <View style={[_styles.actCircle, { backgroundColor: "#0F3879" }]}>
                            <Edit width={20} height={20} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 3, }}>

                    <TextInput
                        editable={false}
                        style={[styles.input, { width: '100%', alignSelf: 'center' }]}
                        placeholder={route.params.carKind + route.params.carNum}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <View style={[_styles.actCircle, { backgroundColor: "#0F5679" }]}>
                            <BigDelete width={20} height={20} />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            <Text style={_styles.indexCarTxt}>{t(`${authCarDetails}.numParkings`) + ":"}</Text>

            <LinearGradientBtn
                style={{ width: 200, height: 60, alignSelf: 'center', marginTop: 15 }}
                content={<Text style={[styles.noteTxt, { fontWeight: 'bold', color: 'white' }]}>{t(`${authCarDetails}.continue`)}</Text>}
            />

        </>
    )
}

const _styles = StyleSheet.create(
    {
        indexCarTxt: {
            color: 'white',
            fontSize: 20,
            // fontFamily: 'Assistant-Bold',
            textAlign: 'center',
            marginTop: '5%'
        },
        actCircle: {
            width: 45,
            height: 45,
            borderRadius: 50,
            // backgroundColor: '#0F5679',
            justifyContent: 'center',
            alignItems: 'center'
        },
    }
)