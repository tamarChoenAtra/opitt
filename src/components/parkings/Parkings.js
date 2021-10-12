import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../header/Header';
import {
    StyleSheet,
    Switch,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import Button from '../genericComponents/Button';
import { dark, dominant, dominantLight, ligthDominant } from '../../styles/SystemColor';
import styles from '../../styles/Styles';
import { Bold, Regular } from '../../styles/SystemFonts';
import HourlyParkingPermit from './HourlyParkingPermit';
import AnimatedView from '../genericComponents/AnimatedView';
import ConfirmedParkingDetails from './ConfirmedParkingDetails';
import TransparentBtn from '../genericComponents/TransparentBtn';
import RequestParkingList from '../home/RequestParkingList';
import DataBox from '../genericComponents/DataBox';
import RequestParking from './RequestParking';
import { navigateScreen } from '../../routes/routes';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import DemandParking1Dialog from '../dialog/DemandParking1.dialog';
import DailyParking from './DailyParking';

function Parkings(props) {
    const {
        _emptyParkingList,
        _setRequestForParking,
        _requestForParking,

    } = props;
    const initHourlyParking = () => {
        try {
            if (props.route.params.switchHourlyParking)
                return true
        }
        catch { return false }
    }
    const initdailyParking = () => {
        try {
            if (props.route.params.switchDailyParking)
                return true
        }
        catch { return false }
    }
    const parking = 'parking'.toString();
    const { t } = useTranslation();
    const txt = 'requestParking'.toString();
    const [switchHourlyParking, setSwitchHourlyParking] = useState(initHourlyParking())
    const [switchDailyParking, setSwitchDailyParking] = useState(initdailyParking())
    const [closeDialog, setCloseDialog] = useState(false);
    const [pressedBtn, setPressedBtn] = useState('');
    const [openSendDialog, setOpenSendDialog] = useState(false);

    const toggleSwitchHourlyParking = () => setSwitchHourlyParking(previousState => !previousState);
    const toggleSwitchDailyParking = () => setSwitchDailyParking(previousState => !previousState);

    const handlePress = (string) => {
        setPressedBtn(string)
        _setRequestForParking({ key: 'when', value: string })
    }
    return (
        <>
            <Header
                headerRightElement={<Text style={styles.title}>
                    {t(`${parking}.title`)}
                </Text>}
            />
            <ScrollView>
                <View style={_styles().requestView}>
                    <Col cols={1} style={{ alignSelf: 'flex-start' }}>
                        <Text style={[_styles().boldTxt, _styles().padding]}>
                            {t(`${parking}.requestParkingForGuests`)}
                        </Text>
                    </Col>
                    <Row>
                        <Col cols={1}>
                            <TransparentBtn
                                handlePress={() => handlePress(pressedBtn != 'today' ? 'today' : '')}
                                content={t(`${parking}.requestParkingForToday`)}
                                color={"#FFC803"}
                                fill={pressedBtn == 'today' ? true : false}
                                size={'small'}
                            />
                        </Col>
                        <Col cols={1}>
                            <TransparentBtn
                                content={t(`${parking}.requestParkingForTomorrow`)}
                                color={"#FFC803"}
                                fill={pressedBtn == 'tomorrow' ? true : false}
                                size={'small'}
                                handlePress={() => handlePress(pressedBtn != 'tomorrow' ? 'tomorrow' : '')}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col cols={1} >
                            <RequestParking
                                visible={pressedBtn == 'today' || pressedBtn == 'tomorrow' ? true : false}
                                title={t(`${txt}.fromHour`)}
                                setRequestForParking={_setRequestForParking}
                                key1='fromHour'
                            />
                        </Col>
                        <Col cols={1}>
                            <RequestParking
                                visible={pressedBtn == 'today' || pressedBtn == 'tomorrow' ? true : false}
                                title={t(`${txt}.toHour`)}
                                key1='toHour'
                                setRequestForParking={_setRequestForParking}
                            />
                        </Col>
                    </Row>
                    {(pressedBtn == 'today' || pressedBtn == 'tomorrow') &&
                        <View style={[styles.placeCenter, { marginTop: 20 }]}>
                            <Button
                                content={t(`${txt}.send`)}
                                width={140}
                                handlePress={() => {
                                    setOpenSendDialog(true)
                                    setPressedBtn('')
                                }}
                            />
                        </View>
                    }

                </View>

                <View style={styles.headerBottomDivider}></View>
                <View style={_styles().permitView}>
                    <Row>
                        <Col cols={1} >
                            <Row>
                                <Text style={_styles().boldTxt}>{t(`${parking}.hourlyParkingPermit`)}</Text>
                            </Row>
                            {!switchHourlyParking &&
                                <AnimatedView>
                                    <Row>
                                        <Text style={_styles().txt}>{t(`${parking}.subTitle1`)}</Text>
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
                                <Text style={_styles().boldTxt}>{t(`${parking}.dailyParkingPermit`)}</Text>
                            </Row>
                            <Row>
                                <Text style={_styles().txt}>{t(`${parking}.subTitle2`)}</Text>
                            </Row>
                        </Col>
                        <Col cols={1} style={_styles().switch}>
                            <Switch
                                trackColor={{ false: '#374563', true: '#FFC803' }}
                                onValueChange={toggleSwitchDailyParking}
                                value={switchDailyParking}
                                thumbColor={switchDailyParking ? 'black' : '#FFFFFF'}
                            />
                        </Col>

                    </Row>
                    {/* <DailyParking /> */}

                </View>
                <View style={styles.headerBottomDivider}></View>
                <TouchableOpacity
                    style={_styles().darkBtn}
                    onPress={() => {
                        navigateScreen(props, 'EmptyParkings')
                    }}
                >
                    <Row style={_styles().row}>
                        <Text style={_styles().btnTxt}>{t(`${parking}.emptyParkings`)}</Text>
                        <View style={_styles().avatarView}>
                            <Text style={_styles().avatarTxt}>{_emptyParkingList && _emptyParkingList.length ? _emptyParkingList.length : 0}</Text>
                        </View>
                    </Row>
                </TouchableOpacity>
                <TouchableOpacity
                    style={_styles().darkBtn}
                    onPress={() => {
                        navigateScreen(props, 'GuestsList')
                    }}
                >
                    <Row style={_styles().row}>
                        <Text style={_styles().btnTxt}>{t(`${parking}.guestsList`)}</Text>
                    </Row>
                </TouchableOpacity>
            </ScrollView>
            <DemandParking1Dialog
                visible={openSendDialog}
                setVisible={setOpenSendDialog}
            />
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
    _emptyParkingList: state.parkings.emptyParkingList,
    _requestForParking: state.parkings.requestForParking
})

const mapDispatchToProps = dispatch => ({
    _deleteCar: (_id) => dispatch(actions.deleteCar(_id)),
    _setRequestForParking: (req) => dispatch(actions.setRequestForParking(req))
})

export default connect(mapStateToProps, mapDispatchToProps)(Parkings)

const _styles = () => StyleSheet.create({
    requestView: {
        paddingBottom: 20,
        // paddingHorizontal: 5,
        direction: 'rtl',
        minHeight: 70,
        justifyContent: 'center',
    },
    boldTxt: {
        fontFamily: Bold,
        fontSize: 18,
        fontWeight: 'bold',
        padding: 2
    },
    padding: {
        padding: 18
    },
    txt: {
        fontFamily: Regular,
        fontSize: 15,
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