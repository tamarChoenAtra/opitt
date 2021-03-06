import React, { useState } from 'react';
import { connect } from 'react-redux';
import DeleteCarDialog from '../dialog/DeleteCar.dialog';
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
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
import AnimatedView from '../genericComponents/AnimatedView';

function ParkingForNewGuest(props) {
    const { t } = useTranslation();
    const txt1 = 'parkingForNewGuest'.toString();
    const txt2 = 'reservedParkingsList'.toString();
    const returnTxtStyle = (id) => {
        return {
            fontFamily: Bold,
            fontSize: 18,
            color: id == -1 ? '#979eae' : _selectedGuest.id == id ? 'white' : '#364462',
        }
    }
    const {
        setOpenDialog,
        _guestsList,
        _selectedGuest,
        _setSelectedGuest,
        _selectedParking,
        setVisible,
        visible,
        saveParkingForGuest
    } = props;
    const inputList = [
        {
            placeholder: t(`${txt1}.name`),
        },
        {
            placeholder: t(`${txt1}.carKind`),
        },
        {
            placeholder: t(`${txt1}.carId`),
        },
    ]
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
            handlePress={() => setVisible(false)}
            content={t(`${txt1}.btn2`)}
            colorOutline={ligth}
            width={120}
        />
    </Row>
    const textInput = ({ item }) => <TextInput
        style={[styles.input, _styles().input]}
        placeholder={item.placeholder}
        placeholderTextColor={'#FFFFFF99'}
        selectionColor="#FFFFFF99"
    />
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

            <Col cols={1.5} style={_styles('center').col}>
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
        </Row>

    return (
        <>
            <AnimatedView style={_styles().centeredView}>
                <View style={_styles().modalView}>
                    <Text style={styles.title}>
                        {t(`${txt1}.title`)}
                    </Text>
                    <FlatList
                        style={{ width: '100%' }}
                        data={inputList}
                        renderItem={textInput}
                        scrollEnabled={false}
                    />
                    <AnimatedView>
                        {selectedParkingDetails}
                    </AnimatedView>
                    {buttons}
                    <ChipButton
                        handlePress={() => setVisible(false)}
                    />
                </View>

            </AnimatedView>
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
    _guestsList: state.guests.guestsList,
    _selectedGuest: state.guests.selectedGuest,
    _selectedParking: state.parkings.selectedParking
})

const mapDispatchToProps = dispatch => ({
    _setSelectedGuest: (item) => dispatch(actions.setSelectedGuest(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ParkingForNewGuest);

const _styles = (alignItems) => StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: '#17151559',
    },
    input: {
        margin: 7,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 8,
        height: 65
    },
    subTiltle: {
        alignSelf: 'center',
        marginVertical: 20,
        fontSize: 20,
        fontFamily: Bold
    },
    btnRow: {
        direction: 'rtl',
        margin: 15
        // marginTop: 20
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
        alignItems
    },
    hour: {
        fontSize: 38,
        fontFamily: Regular
    },
    swipeItem: {
        height: 110,
        borderRadius: 10,
        // borderColor: '#05FF00',
        backgroundColor: '#05163C',
        marginVertical: 5,
        justifyContent: 'center',
        direction: 'rtl',
        padding: 10,
        width: '90%',
        marginTop: 20

    },
    txt: {
        fontFamily: Regular,
        fontSize: 16,
        lineHeight: 25,
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
        minHeight: 360,
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