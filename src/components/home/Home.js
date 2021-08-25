import React from 'react';
import Header from '../header/Header';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Notification from '../../assets/svg/notification.svg'
import Row from '../genericComponents/Row';
import { useTranslation } from 'react-i18next';
import { dominantLight, ligthDominant } from '../../styles/SystemColor';
import { Bold } from '../../styles/SystemFonts';
import Gate from '../../assets/svg/gate.svg';
import P from '../../assets/svg/p.svg';
import Parking24h from '../../assets/svg/parking24h.svg';
import Calendar from '../../assets/svg/calendar.svg';
import StyleFuncs from '../../styles/StyleFuncs';

export default () => {
    const { t } = useTranslation();
    const home = 'home'.toString();
    const returnTitle = () => {
        let date = new Date()
        let hour = date.getHours();
        if (hour < 12 && hour > 5)
            return t(`${home}.titleMorning`)
        else if (hour > 11 && hour < 16)
            return t(`${home}.titleNoon`)
        else if (hour > 15 && hour < 19)
            return t(`${home}.titleAfterNoon`)
        else if (hour > 18 && hour < 21)
            return t(`${home}.titleEvening`)
        else
            return t(`${home}.titleNight`)
    }

    return (
        <>
            <Header
                headerRightElement={<Text>{returnTitle() + " דודי "}</Text>}
            />
            <TouchableOpacity style={StyleFuncs.returnDarkBtnStyle()}>
                <Row style={{ alignSelf: 'center' }}>
                    <Text style={_styles.btnTxt}>{t(`${home}.notificationsList`)}</Text>
                    <Notification />
                </Row>
            </TouchableOpacity>
            <TouchableOpacity style={StyleFuncs.returnDarkBtnStyle()}>
                <Row style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Gate />
                    <Text style={_styles.btnTxt}>{t(`${home}.openGates`)}</Text>
                </Row>
            </TouchableOpacity>
            <TouchableOpacity style={StyleFuncs.returnDarkBtnStyle()}>
                <Row style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <P />
                    <Text style={_styles.btnTxt}>{t(`${home}.emptyParkingsList`)}</Text>
                    <View style={_styles.avatarView}>
                        <Text style={_styles.avatarTxt}>4</Text>
                    </View>
                </Row>
            </TouchableOpacity>
            <Row>
                <TouchableOpacity style={StyleFuncs.returnDarkBtnStyle('45%', 100)}>
                    <Parking24h />
                    <Text style={_styles.btnTxt}>
                        {t(`${home}.hourlyParkingPermit`)}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleFuncs.returnDarkBtnStyle('45%', 100)}>
                    <Calendar />
                    <Text style={_styles.btnTxt}>
                        {t(`${home}.activeDailyParking`)}
                    </Text>
                </TouchableOpacity>
            </Row>
            <TouchableOpacity style={StyleFuncs.returnDarkBtnStyle()}>
                <Row style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={_styles.btnTxt}>{t(`${home}.openGates`)}</Text>
                </Row>
            </TouchableOpacity>
        </>
    )
}

const _styles = StyleSheet.create({
    btnTxt: {
        color: dominantLight,
        fontFamily: Bold,
        fontSize: 18,
        paddingHorizontal: 10
    },
    avatarView: {
        backgroundColor: ligthDominant,
        width: 20,
        height: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarTxt: {
        color: 'black',
        fontWeight: 'bold'
    }
})