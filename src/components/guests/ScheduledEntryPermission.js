import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { bg } from '../../styles/SystemColor';
import styles from '../../styles/Styles';
import { useTranslation } from 'react-i18next';
import ChipButton from '../genericComponents/ChipButton';
function ScheduledEntryPermission(props) {
    const {
        visible,
        setVisible,
        _setSelectedGuest,
        _selectedGuest,
        showGuestDetails
    } = props
    const { t } = useTranslation();
    const txt = "scheduledEntryPermission".toString();
    const days = 'days'.toString();
    const [daysList, setDaysList] = useState({
        0: {
            day: t(`${days}.sun`),
            pressed: false
        },
        1: {
            day: t(`${days}.mon`),
            pressed: false
        },
        2: {
            day: t(`${days}.tue`),
            pressed: false
        },
        3: {
            day: t(`${days}.wed`),
            pressed: false
        },
        4: {
            day: t(`${days}.thu`),
            pressed: false
        },
        5: {
            day: t(`${days}.fri`),
            pressed: false
        },
        6: {
            day: t(`${days}.sat`),
            pressed: false
        },
    });

    const handlePress = (item) => {
        let tempItem = daysList[item];
        tempItem.pressed = !tempItem.pressed;
        setDaysList({ ...daysList, [item]: tempItem })
    }
    const returnTxtStyle = (item) => {
        if (daysList[item].pressed == true)
            return {
                color: 'black',
                fontWeight: 'bold'
            }
    }
    const renderItem = ({ item }) => <TouchableOpacity
        style={[_styles(daysList[item].pressed == true ? '#FFC803' : null).dayBtn, styles.placeCenter]}
        onPress={() => handlePress(item)}
    >
        <Text style={[styles.txt, returnTxtStyle(item)]}>{daysList[item].day}</Text>
    </TouchableOpacity>

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(false)
            }}
        >
            <View style={_styles().centeredView}>
                <View style={_styles().modalView}>
                    <Text style={styles.title}>
                        {t(`${txt}.title`)}
                    </Text>
                    <View style={_styles().view}>
                        <Text style={[styles.boldTxt, _styles().subTitle]}>{t(`${txt}.selectDays`)}</Text>
                        <FlatList
                            style={_styles().flatListStyle}
                            data={Object.keys(daysList)}
                            renderItem={renderItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(o, index) => index}
                        />
                    </View>
                    <ChipButton
                        handlePress={() => setVisible(false)}
                    />
                </View>
            </View>
        </Modal>
    )
}

const mapStateToProps = state => ({
    ...state,
    _selectedGuest: state.guests.selectedGuest

})

const mapDispatchToProps = dispatch => ({
    _setSelectedGuest: (guest) => dispatch(actions.setSelectedGuest(guest))

})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduledEntryPermission);

const _styles = (backgroundColor, color) => StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: '#1715156b',
        justifyContent: 'center',

    },
    subTitle: {
        textAlign: 'left',
        margin: 10
    },
    flatListStyle: {
        alignSelf: 'center'
    },
    dayBtn: {
        width: 35,
        height: 35,
        margin: 3,
        borderRadius: 50,
        borderColor: '#FFFFFF',
        borderWidth: StyleSheet.hairlineWidth,
        alignSelf: 'center',
        backgroundColor,

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
        height: 430,
        alignSelf: 'center',
    },
    view: {
        height: 120,
        borderRadius: 10,
        backgroundColor: '#05163C',
        marginVertical: 5,
        direction: 'rtl',
        padding: 10,
        width: '90%'
    }
},
)