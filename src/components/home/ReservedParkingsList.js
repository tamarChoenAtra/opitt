import React, { useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { Regular } from '../../styles/SystemFonts';
import { bg, dark } from '../../styles/SystemColor';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/Styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import BigDelete from '../../assets/svg/bigDelete.svg'
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import DeleteParkingDialog from '../dialog/DeleteParking.dialog';
import Header from '../header/Header';
import { returnTitle } from '../genericComponents/GenericFunctions';
import DropDown from '../dropdwon/DropDown';

function ReservedParkingsList(props) {
    const { t } = useTranslation();
    const reservedParkingsList = 'reservedParkingsList'.toString();
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const data = [
        {
            key: '0',
            fromDay: 'ראשון',
            toDay: 'שני',
            fromHour: '08:00',
            toHour: '21:00',
            family: 'כהן',
            numParking: '5',
            floor: ' 1',
        },
        {
            key: '1',
            fromDay: 'ראשון',
            toDay: 'שני',
            fromHour: '08:00',
            toHour: '21:00',
            family: 'לוי',
            numParking: '2',
            floor: 'מינוס 1',
        }
    ];
    const {
        _propertiesList
    } = props;
    const renderHiddenItem = ({ item }) =>
        <View style={[_styles().swipeItem, _styles().swipeBack]}>
            <TouchableOpacity onPress={() => {
                setOpenDeleteDialog(!openDeleteDialog)
            }}>
                <BigDelete width={28} height={28} style={{ margin: 20 }} />
            </TouchableOpacity>
        </View>

    const renderItem = ({ item }) =>
        <View style={[_styles().swipeItem, _styles().swipeFront]}>
            <Row>
                <Col cols={1} style={_styles('center').col}>
                    <Row >
                        <Text style={_styles().txt}>{t(`${reservedParkingsList}.fromDay`) + item.fromDay}</Text>
                    </Row>
                    <Row >
                        <Text style={_styles().txt}>{t(`${reservedParkingsList}.toDay`) + item.toDay}</Text>
                    </Row>
                </Col>

                <Col cols={1.5} style={_styles('center').col}>
                    <Row>
                        <Text style={_styles().hour}>{item.fromHour}</Text>
                    </Row>
                    <Row>
                        <Text style={_styles().hour}>{item.toHour}</Text>
                    </Row>
                </Col>

                <Col cols={1} style={_styles().col}>
                    <Row>
                        <Text style={_styles().txt}>{t(`${reservedParkingsList}.floor`) + item.floor}</Text>
                    </Row>
                    <Row>
                        <Text style={_styles().txt}>{t(`${reservedParkingsList}.numParking`) + item.numParking}</Text>
                    </Row>
                    <Row>
                        <Text style={_styles().txt}>{t(`${reservedParkingsList}.family`) + item.family}</Text>
                    </Row>
                </Col>
            </Row>
        </View>

    return (
        <>
            <Header
                {...props}
                headerRightElement={<Text style={styles.title}>
                    {returnTitle() + " דודי "}
                </Text>
                }
            />
            <View style={{ paddingTop: 10 }}>
                <DropDown
                    array={_propertiesList}
                    txtNote={true}
                />
            </View>
            <View style={[_styles().wrapView, styles.placeCenter]}>
                <View style={[styles.placeCenter, { width: '100%', height: 80, backgroundColor: '#006096', borderRadius: 5 }]}>
                    <Text style={styles.boldTxt}>{t(`${reservedParkingsList}.reservedParkingsList`)}</Text>
                    <Text style={styles.txt}>{t(`${reservedParkingsList}.subTitle`)}</Text>
                </View>
                <SwipeListView
                    data={data}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />
            </View>
            <DeleteParkingDialog
                visible={openDeleteDialog}
                setVisible={setOpenDeleteDialog}
            />
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _propertiesList: state.parkings.propertiesList
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ReservedParkingsList);

const _styles = (alignItems) => StyleSheet.create({
    wrapView: {
        backgroundColor: dark,
        paddingBottom: 15,
        margin: 15,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center'
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
        marginTop: 15,
        justifyContent: 'center',
        direction: 'rtl',
        width: Dimensions.get('window').width * 0.88,
        padding: 10
    },
    swipeFront: {
        backgroundColor: bg,
    },
    swipeBack: {
        backgroundColor: '#0F5679',
        height: 106,
    },
    txt: {
        fontFamily: Regular,
        fontSize: 16,
        lineHeight: 25,
    },
})