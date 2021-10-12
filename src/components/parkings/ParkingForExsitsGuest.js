import React, { useState } from 'react';
import { connect } from 'react-redux';
import DeleteCarDialog from '../dialog/DeleteCar.dialog';
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import ChipButton from '../genericComponents/ChipButton';
import { bg, dark, dominant, ligth } from '../../styles/SystemColor';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/Styles';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import { Bold, Regular } from '../../styles/SystemFonts';
import { actions } from '../../redux/actions';
import Button from '../genericComponents/Button';
import ParkingForNewGuest from './ParkingForNewGuest';
import SaveParkingDialog from '../dialog/SaveParking.dialog';
import ParkingForGuest from './ParkingForGuest';
import Home from '../home/Home';
import Star from '../../assets/svg/star.svg'

function ParkingForExsitsGuest(props) {
    const { t } = useTranslation();
    const txt1 = 'parkingForExsitsGuest'.toString();
    const txt2 = 'reservedParkingsList'.toString();
    const emptyParking = 'emptyParkings'.toString();
    const returnTxtStyle = (id) => {
        return {
            fontFamily: Bold,
            fontSize: 18,
            color: id == -1 ? '#979eae' : _selectedGuest.id == id ? 'white' : '#364462',
        }
    }

    const {
        _guestsList,
        _selectedGuest,
        _setSelectedGuest,
        _selectedParking,
        setVisible,
        visible,
        setComponentToDispaly,
        setOpenDialog,
        saveParkingForGuest
    } = props;

    const renderItem = ({ item }) => <>
        <TouchableOpacity
            style={_styles().item}
            onPress={() => {
                _setSelectedGuest(item)
            }}
        >
            <Row style={{ direction: 'rtl', alignItems: 'center' }}>
                <Col cols={1} style={{ alignItems: 'center' }}>
                    <Text style={returnTxtStyle(item.id)}>
                        {item.name}
                    </Text>
                </Col>
                <Col>
                    <Text style={returnTxtStyle(item.id)}>|</Text>
                </Col>
                <Col cols={1} style={{ alignItems: 'center' }}>
                    <Text style={returnTxtStyle(item.id)}>
                        {item.carKind}
                    </Text>
                </Col>
                <Col>
                    <Text style={returnTxtStyle(item.id)}>|</Text>
                </Col>
                <Col cols={1} style={{ alignItems: 'center' }}>
                    <Text style={returnTxtStyle(item.id)}>
                        {item.carId}
                    </Text>
                </Col>
            </Row>
        </TouchableOpacity>
        <View style={[styles.headerBottomDivider, { width: '70%', alignSelf: 'center' }]}></View>
    </>

    const selectedGuestDetails = <Row style={_styles().selectedGuest}>
        <Col cols={1} style={{ alignItems: 'center' }}>
            <Text style={returnTxtStyle(-1)}>
                {_selectedGuest.name}
            </Text>
        </Col>
        <Col>
            <Text style={returnTxtStyle(-1)}>|</Text>
        </Col>
        <Col cols={1} style={{ alignItems: 'center' }}>
            <Text style={returnTxtStyle(-1)}>
                {_selectedGuest.carKind}
            </Text>
        </Col>
        <Col>
            <Text style={returnTxtStyle(-1)}>|</Text>
        </Col>
        <Col cols={1} style={{ alignItems: 'center' }}>
            <Text style={returnTxtStyle(-1)}>
                {_selectedGuest.carId}
            </Text>
        </Col>
    </Row>
    const buttons = <Row style={_styles().btnRow}>
        <Button
            content={t(`${txt1}.btn1`)}
            width={120}
            handlePress={() => {
                setVisible(false)
                setOpenDialog(true)
                saveParkingForGuest()
            }}
        />
        <Button
            kind="outline"
            handlePress={() => setComponentToDispaly(ParkingForNewGuest)}
            content={t(`${txt1}.btn2`)}
            colorOutline={ligth}
        />
    </Row>
    const selectedParkingDetails =
        <Row
            style={[_styles().swipeItem, _styles().swipeFront]}

        >
            <Col cols={1} style={_styles('center').col}>
                <Row >
                    <Text style={_styles().txt}>{t(`${txt2}.fromDay`) + _selectedParking.fromDay}</Text>
                </Row>
                <Row >
                    <Text style={_styles().txt}>{t(`${txt2}.toDay`) + _selectedParking.toDay}</Text>
                </Row>
            </Col>

            <Col cols={1.2} style={_styles().col}>
                <Row>
                    <Text style={_styles().hour}>{_selectedParking.fromHour}</Text>
                </Row>
                <Row>
                    <Text style={_styles().hour}>{_selectedParking.toHour}</Text>
                </Row>
            </Col>
            <Col cols={1} style={_styles().col}>
                <Row>
                    <Text style={_styles().txt}>{t(`${txt2}.floor`) + _selectedParking.floor}</Text>
                </Row>
                <Row>
                    <Text style={_styles().txt}>{t(`${txt2}.numParking`) + _selectedParking.numParking}</Text>
                </Row>
                <Row>
                    <Text style={_styles().txt}>{t(`${txt2}.family`) + _selectedParking.family}</Text>
                </Row>
            </Col>
            <Col cols={0.7} style={_styles('center').col}>
                <Row>
                    <Text style={_styles().largeTxt}>
                        {_selectedParking.stars}
                    </Text>
                </Row>
                <Star />
                <Row>
                    <Text style={_styles().txt}>{t(`${emptyParking}.stars`)}</Text>
                </Row>
            </Col>
        </Row>

    return (
        <>
            <View style={_styles().centeredView}>
                <View style={_styles().modalView}>
                    <Text style={styles.title}>
                        {t(`${txt1}.title1`)}
                    </Text>
                    {selectedGuestDetails}
                    {selectedParkingDetails}
                    {buttons}
                    <ChipButton
                        handlePress={() => setVisible(false)}
                    />
                </View>
                <View style={_styles().modalView}>
                    <Text style={_styles().subTiltle}>{t(`${txt1}.title2`)}</Text>
                    <FlatList
                        style={{ backgroundColor: dark, padding: 10, width: '90%', minHeight: 100, maxHeight: 200 }}
                        data={_guestsList}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
    _guestsList: state.guests.guestsList,
    _selectedGuest: state.guests.selectedGuest,
    _selectedParking: state.parkings.selectedParking,
})

const mapDispatchToProps = dispatch => ({
    _setSelectedGuest: (item) => dispatch(actions.setSelectedGuest(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ParkingForExsitsGuest);

const _styles = (alignItems) => StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: '#17151559',
    },
    subTiltle: {
        alignSelf: 'center',
        marginVertical: 20,
        fontSize: 20,
        fontFamily: Bold
    },
    btnRow: {
        direction: 'rtl',
        marginTop: 20
    },
    largeTxt: {
        fontFamily: Regular,
        fontSize: 35,
        // lineHeight: 35
    },
    selectedGuest: {
        direction: 'rtl',
        alignItems: 'center',
        borderColor: '#979eae',
        borderWidth: 1,
        width: '90%',
        padding: 10,
        borderRadius: 10,
        height: 50,
        backgroundColor: dark,
        marginTop: 20
    },
    row: {
        alignItems: 'center'
    },
    col: {
        justifyContent: 'space-around',
        alignItems,
    },
    hour: {
        fontSize: 38,
        fontFamily: Regular
    },
    swipeItem: {
        height: 110,
        borderRadius: 10,
        // borderColor: '#05FF00',
        backgroundColor: dark,
        marginVertical: 5,
        justifyContent: 'center',
        direction: 'rtl',
        padding: 10,
        width: '90%',
        marginTop: 20

    },
    txt: {
        fontFamily: Regular,
        fontSize: 15,
        lineHeight: 32,
    },
    item: {
        padding: 10
    },
    modalView: {
        top: 120,
        marginTop: 20,
        backgroundColor: bg,
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '94%',
        height: 360,
        alignSelf: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: 'white'
    }
});