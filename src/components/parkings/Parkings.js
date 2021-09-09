import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../header/Header';
import {
    StyleSheet,
    Switch,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import Button from '../genericComponents/Button';
import { dark, dominant, dominantLight, ligthDominant } from '../../styles/SystemColor';
import styles from '../../styles/Styles';
import { Regular } from '../../styles/SystemFonts';
import HourlyParkingPermit from './HourlyParkingPermit';
import AnimatedView from '../genericComponents/AnimatedView';
import ConfirmedParkingDetails from './ConfirmedParkingDetails';
import TransparentBtn from '../genericComponents/TransparentBtn';

export default () => {
    const parking = 'parking'.toString();
    const { t } = useTranslation();
    const [switchHourlyParking, setSwitchHourlyParking] = useState(false)
    const [switchDailyParking, setSwitchDailyParking] = useState(false)
    const [closeDialog, setCloseDialog] = useState(false);
    const [pressedBtn, setPressedBtn] = useState(0);

    const toggleSwitchHourlyParking = () => setSwitchHourlyParking(previousState => !previousState);
    const toggleSwitchDailyParking = () => setSwitchHourlyParking(previousState => !previousState);

    const handlePress = (event) => {
        console.log(event);
    }

    return (
        <>
            <Header
                headerRightElement={<Text>
                    {t(`${parking}.title`)}
                </Text>}
            />

            <View style={_styles().requestView}>
                <Col cols={1} style={{ alignSelf: 'flex-start' }}>
                    <Text >
                        {t(`${parking}.requestParkingForGuests`)}
                    </Text>
                </Col>

                <Row >
                    <Col cols={1}>
                        <TransparentBtn
                            handlePress={handlePress}
                            content={t(`${parking}.requestParkingForToday`)}
                            color={"#FFC803"}
                            fill={true}
                            size={'small'}
                        />
                    </Col>
                    <Col cols={1}>
                        <TransparentBtn
                            content={t(`${parking}.requestParkingForTomorrow`)}
                            color={"#FFC803"}
                            fill={false}
                            size={'small'}
                            handlePress={handlePress}

                        />
                    </Col>

                </Row>
            </View>
            <View style={styles.headerBottomDivider}></View>
            <View style={_styles().permitView}>
                <Row>
                    <Col cols={1} >
                        <Row>
                            <Text>{t(`${parking}.hourlyParkingPermit`)}</Text>
                        </Row>
                        {!switchHourlyParking &&
                            <AnimatedView>
                                <Row>
                                    <Text>{t(`${parking}.subTitle1`)}</Text>
                                </Row>
                            </AnimatedView>
                        }
                    </Col>
                    <Col cols={1} style={_styles().switch}>
                        <Switch
                            trackColor={{ false: '#374563', true: '#FFC803' }}
                            onValueChange={toggleSwitchHourlyParking}
                            value={switchHourlyParking}
                            thumbColor={switchHourlyParking ? 'black' : '#FFFFFF'}
                        />
                    </Col>

                </Row>
                <HourlyParkingPermit
                    visible={switchHourlyParking}
                    setCloseDialog={setCloseDialog}
                    closeDialog={closeDialog}
                />
                <ConfirmedParkingDetails
                    visible={closeDialog && switchHourlyParking}
                />
            </View>
            <View style={styles.headerBottomDivider}></View>

            <View style={_styles().permitView}>
                <Row>
                    <Col cols={1}>
                        <Row>
                            <Text>{t(`${parking}.dailyParkingPermit`)}</Text>
                        </Row>
                        <Row>
                            <Text>{t(`${parking}.subTitle2`)}</Text>
                        </Row>
                    </Col>
                    <Col cols={1} style={_styles().switch}>
                        <Switch />
                    </Col>
                </Row>
            </View>
            <View style={styles.headerBottomDivider}></View>
            <TouchableOpacity style={_styles().darkBtn}>
                <Row style={_styles().row}>
                    <Text style={_styles().btnTxt}>{t(`${parking}.emptyParkings`)}</Text>
                    <View style={_styles().avatarView}>
                        <Text style={_styles().avatarTxt}>4</Text>
                    </View>
                </Row>
            </TouchableOpacity>
            <TouchableOpacity style={_styles().darkBtn}>
                <Row style={_styles().row}>
                    <Text style={_styles().btnTxt}>{t(`${parking}.guestsList`)}</Text>
                </Row>
            </TouchableOpacity>
        </>
    )
}

const _styles = () => StyleSheet.create({
    requestView: {
        height: 140,
        paddingVertical: 20,
        paddingHorizontal: 5,
        direction: 'rtl'
    },
    row: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    switch: {
        alignItems: 'flex-end'
    },
    darkBtn: {
        backgroundColor: dark,
        height: 60,
        width: '95%',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginBottom: 0
    },
    avatarView: {
        backgroundColor: ligthDominant,
        width: 35,
        height: 35,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarTxt: {
        color: 'black',
        fontSize: 22,
        fontFamily: Regular
    },
    btnTxt: {
        color: dominantLight,
        fontFamily: Regular,
        fontSize: 20,
        paddingHorizontal: 15,
    },
    permitView: {
        direction: 'rtl',
        minHeight: 70,
        paddingVertical: 15,
        paddingHorizontal: 10,
        justifyContent: 'center'
    }
})