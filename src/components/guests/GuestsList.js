import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import Header from "../header/Header";
import {
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View
} from 'react-native';
import styles from "../../styles/Styles";
import SearchGuest from "./SearchGuest";
import Row from "../genericComponents/Row";
import Col from "../genericComponents/Col";
import TransparentBtn from "../genericComponents/TransparentBtn";
import { Bold, Regular } from "../../styles/SystemFonts";
import { alignSelf } from "styled-system";
import ScheduledEntryPermission from "./ScheduledEntryPermission";
import { actions } from "../../redux/actions";

function GuestsList(props) {
    const { t } = useTranslation();
    const guests = 'guests'.toString();
    const {
        _guestsList,
        _selectedGuest,
        _setSelectedGuest
    } = props;

    const [visible, setVisible] = useState(false);
    const handlePress = (item) => {
        setVisible(true)
        _setSelectedGuest(item)
    }

    const renderItem = ({ item }) =>
        <View
            style={_styles().item}
        >
            <Row>
                <Col cols={1}>
                    <Row>
                        <Text style={_styles().boldTxt}>
                            {t(`${guests}.guestName`)}:
                        </Text>
                        <Text style={_styles().txt}> {item.name}</Text>
                    </Row>
                    <Row>
                        <Text style={_styles().boldTxt}>
                            {t(`${guests}.carKind`)}:
                        </Text>
                        <Text style={_styles().txt}> {item.carKind}</Text>
                    </Row>
                </Col>
                <Col cols={1} style={styles.placeCenter}>
                    <TransparentBtn
                        content={t(`${guests}.btnState1`)}
                        color={"#FFC803"}
                        borderRadius={5}
                        handlePress={() => handlePress(item)}
                        //  fill={pressedBtn == 'today' ? true : false}
                        size={'x-small'}
                        width={140}
                    />
                </Col>
            </Row>
            <Row>
                <Text style={_styles().boldTxt}>
                    {t(`${guests}.carId`)}:
                </Text>
                <Col cols={1}>
                    <Text style={_styles().largeTxt}> {item.carId}</Text>
                </Col>
            </Row>
        </View>

    return (
        <>
            <Header
                headerRightElement={<Text style={styles.title}>
                    {t(`${guests}.title`)}
                </Text>
                }
            />
            <SearchGuest />
            <FlatList
                data={_guestsList}
                renderItem={renderItem}
            />
            <ScheduledEntryPermission
                visible={visible}
                setVisible={setVisible}
            />
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _guestsList: state.guests.guestsList,
    _selectedGuest: state.guests.selectedGuest
})

const mapDispatchToProps = dispatch => ({
    _setSelectedGuest: (guest) => dispatch(actions.setSelectedGuest(guest))
})

export default connect(mapStateToProps, mapDispatchToProps)(GuestsList);

export const _styles = () => StyleSheet.create({
    item: {
        height: 140,
        borderRadius: 10,
        backgroundColor: '#05163C',
        marginVertical: 5,
        justifyContent: 'center',
        direction: 'rtl',
        padding: 10,
    },
    txt: {
        fontFamily: Regular,
        fontSize: 18,
        alignSelf: 'center',
        lineHeight: 25
    },
    boldTxt: {
        fontFamily: Bold,
        fontSize: 18,
        alignSelf: 'center',
        lineHeight: 25

    },
    largeTxt: {
        fontFamily: Regular,
        fontSize: 40,
        alignSelf: 'center',
    }
})