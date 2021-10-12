import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import Header from "../header/Header";
import {
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View,
    Dimensions
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
import { SwipeListView } from "react-native-swipe-list-view";
import BigDelete from '../../assets/svg/bigDelete.svg'
import { bg, dark } from "../../styles/SystemColor";
import DeleteParkingDialog from "../dialog/DeleteParking.dialog";
import DeleteGuestDialog from "../dialog/DeleteGuest.dialog";

function GuestsList(props) {
    const { t } = useTranslation();
    const guests = 'guests'.toString();
    const {
        _guestsList,
        _selectedGuest,
        _setSelectedGuest,
        _searchGuest,
        _filteredGuestsList,
        _deleteGuest
    } = props;

    const [visible, setVisible] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const handlePress = (item) => {
        setVisible(true)
        _setSelectedGuest(item)
    }

    const renderHiddenItem = ({ item }) =>
        <View style={[_styles().swipeItem, _styles().swipeBack]}>
            <TouchableOpacity onPress={() => {
                setOpenDeleteDialog(!openDeleteDialog)
                _setSelectedGuest(item)
            }}>
                <BigDelete width={28} height={28} style={{ margin: 20 }} />
            </TouchableOpacity>
        </View>

    const renderItem = ({ item }) =>
        <View
            style={[_styles().swipeItem, _styles().swipeFront]}
        >
            <Row>
                <Col cols={1}>
                    <Row>
                        <Text style={_styles().boldTxt}>
                            {t(`${guests}.guestName`)}:
                        </Text>
                        <Text style={_styles().txt}> {item ? item.name : _selectedGuest.name}</Text>
                    </Row>
                    <Row>
                        <Text style={_styles().boldTxt}>
                            {t(`${guests}.carKind`)}:
                        </Text>
                        <Text style={_styles().txt}> {item ? item.carKind : _selectedGuest.carKind}</Text>
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
                    <Text style={_styles().largeTxt}> {item ? item.carId : _selectedGuest.carId}</Text>
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
            <SwipeListView
                data={_searchGuest ? _filteredGuestsList : _guestsList}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-75}
            />
            <ScheduledEntryPermission
                visible={visible}
                setVisible={setVisible}
            />
            <DeleteGuestDialog
                visible={openDeleteDialog}
                setVisible={setOpenDeleteDialog}
                handlePress={() => _deleteGuest()}
            />
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _guestsList: state.guests.guestsList,
    _selectedGuest: state.guests.selectedGuest,
    _filteredGuestsList: state.guests.filteredGuestsList,
    _searchGuest: state.guests.searchGuest,
})

const mapDispatchToProps = dispatch => ({
    _setSelectedGuest: (guest) => dispatch(actions.setSelectedGuest(guest)),
    _deleteGuest: () => dispatch(actions.deleteGuest())
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
    swipeItem: {
        height: 140,
        borderRadius: 10,
        backgroundColor: dark,
        marginVertical: 5,
        justifyContent: 'center',
        direction: 'rtl',
        padding: 10
    },
    swipeFront: {
        backgroundColor: dark,
    },
    swipeBack: {
        backgroundColor: '#0F5679',
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