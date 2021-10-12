import React from 'react';
import { connect } from 'react-redux';
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import ChipButton from '../genericComponents/ChipButton';
import { bg, dark, ligth } from '../../styles/SystemColor';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/Styles';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import { Bold, Regular } from '../../styles/SystemFonts';
import { actions } from '../../redux/actions';
import Button from '../genericComponents/Button';
import AnimatedView from '../genericComponents/AnimatedView';

function AddEntryCrt(props) {
    const { t } = useTranslation();
    const txt1 = 'addEntryCrt'.toString();

    const {
        setVisible,
        saveParkingForGuest,
        visible
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
                // setOpenDialog(true)
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
    return (
        <>
            <Modal
                animationType='slide'
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(false)
                }}
            >
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
                        <Text style={_styles().noteTxt}>{t(`${txt1}.note`)}</Text>
                        {buttons}
                        <ChipButton
                            handlePress={() => setVisible(false)}
                        />
                    </View>

                </AnimatedView>
            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddEntryCrt);

const _styles = (alignItems) => StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: '#17151559',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noteTxt: {
        fontSize: 18,
        fontFamily: Regular,
        padding: 10,
        textAlign: 'right'
    },
    input: {
        margin: 7,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 8,
        height: 65
    },
    btnRow: {
        direction: 'rtl',
        margin: 15
        // marginTop: 20
    },
    modalView: {
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
        minHeight: 430,
        // alignSelf: 'center',
    },
});