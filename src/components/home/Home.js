import React, { useState } from 'react';
import Header from '../header/Header';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { languages } from '../../i18/languageList';
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
import DropDown from '../dropdwon/DropDown';
import { navigateScreen } from '../../routes/routes';

export default (props) => {
    const { t } = useTranslation();
    const home = 'home'.toString();
    const [activeDailyParking, setActiveDailyParking] = useState(false);
    const [activeHourlyParking, setActiveHourlyParking] = useState(false);
    let dropDownArr = [
        {
            index: 0,
            item: "Rabi Akiva 10 Beni Brak",
        },
        {
            index: 1,
            item: "ביבא לת ,22 דלישטור",
        }
    ]

    const returnTitle = () => {
        let date = new Date()
        let hour = date.getHours();
        if (hour < 12 && hour > 5)
            return t(`${home}.titleMorning`)
        else if (hour > 11 && hour < 16)
            return t(`${home}.titleNoon`)
        else if (hour > 15 && hour < 19)
            return t(`${home}.titleAfternoon`)
        else if (hour > 18 && hour < 21)
            return t(`${home}.titleEvening`)
        else
            return t(`${home}.titleNight`)
    }

    const activeHourlyParkingFunc = () => {
        setActiveHourlyParking(!activeHourlyParking)
    }

    const activeDailyParkingFunc = () => {
        setActiveDailyParking(!activeDailyParking)
    }

    return (
        <>
            <Header
                headerRightElement={<Text>{returnTitle() + " דודי "}</Text>}
            />
            <View style={{ paddingTop: 10 }}>
                <DropDown
                    array={dropDownArr}
                    txtNote={true}
                />
            </View>
            <TouchableOpacity style={StyleFuncs.returnDarkBtnStyle()}>
                <Row style={_styles().row}>
                    <Text style={_styles().btnTxt}>{t(`${home}.notificationsList`)}</Text>
                    <Notification />
                </Row>
            </TouchableOpacity>

            <TouchableOpacity style={StyleFuncs.returnDarkBtnStyle()}>
                <Row style={_styles().row}>
                    <Gate />
                    <Text style={_styles().btnTxt}>{t(`${home}.openGates`)}</Text>
                </Row>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigateScreen(props, 'RequestParkingList')
                }}
                style={StyleFuncs.returnDarkBtnStyle()}
            >
                <Row style={_styles().row}>
                    <P />
                    <Text style={_styles().btnTxt}>{t(`${home}.emptyParkingsList`)}</Text>
                    <View style={_styles().avatarView}>
                        <Text style={_styles().avatarTxt}>4</Text>
                    </View>
                </Row>
            </TouchableOpacity>
            <Row>
                <TouchableOpacity
                    style={[StyleFuncs.returnDarkBtnStyle('45%', 120), activeHourlyParking && _styles().activeBorder]}
                    onPress={activeHourlyParkingFunc}
                >
                    <Parking24h />
                    <Text style={_styles(10).btnTxt}>
                        {activeHourlyParking ? <>{t(`${home}.activeHourlyParking`)}<Text style={_styles().active}>{t(`${home}.active`)}</Text></> : t(`${home}.hourlyParkingPermit`)}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[StyleFuncs.returnDarkBtnStyle('45%', 120), activeDailyParking && _styles().activeBorder]}
                    onPress={activeDailyParkingFunc}
                >
                    <Calendar />
                    <Text style={_styles(10).btnTxt}>
                        {activeDailyParking ? <>{t(`${home}.activeDailyParking`)}<Text style={_styles().active}>{t(`${home}.active`)}</Text></> : t(`${home}.dailyParkingPermit`)}
                    </Text>
                </TouchableOpacity>
            </Row>
            <TouchableOpacity
                style={StyleFuncs.returnDarkBtnStyle()}
                onPress={() => {
                    navigateScreen(props, 'ReservedParkingsList')
                }}
            >
                <Row style={_styles().row}>
                    <Text style={_styles().btnTxt}>{t(`${home}.reservedParkingsList`)}</Text>
                </Row>
            </TouchableOpacity>
        </>
    )
}

const _styles = (paddingTop) => StyleSheet.create({
    btnTxt: {
        color: dominantLight,
        fontFamily: Bold,
        fontSize: 18,
        paddingHorizontal: 10,
        paddingTop
    },
    avatarView: {
        backgroundColor: ligthDominant,
        width: 20,
        height: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    active: {
        color: ligthDominant
    },
    avatarTxt: {
        color: 'black',
        fontWeight: 'bold'
    },
    activeBorder: {
        borderColor: ligthDominant,
        borderWidth: 3
    },
    row: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})