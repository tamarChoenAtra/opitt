import { connect } from 'react-redux';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../header/Header';
import styles from '../../styles/Styles';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    FlatList,
    Dimensions
} from 'react-native';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';
import { Bold, Regular } from '../../styles/SystemFonts';
import { dark } from '../../styles/SystemColor';
import ParkingForGuest from './ParkingForGuest';
import { actions } from '../../redux/actions';
import SaveParkingDialog from '../dialog/SaveParking.dialog';
import Star from '../../assets/svg/star.svg'

function EmptyParkings(props) {
    const {
        setSelectedParking,
        emptyParkingList
    } = props;
    const { t } = useTranslation();
    const emptyParking = 'emptyParkings'.toString();
    const emptyParkingBody = 'reservedParkingsList'.toString();
    const [visible, setVisible] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const renderItem = ({ item }) =>
        <TouchableOpacity
            onPress={() => {
                setVisible(true)
                setSelectedParking(item)
            }}
            style={[_styles().swipeItem, _styles().swipeFront]}>
            <Row>
                <Col cols={1} style={_styles('center').col}>
                    <Row >
                        <Text style={_styles().txt}>{t(`${emptyParkingBody}.fromDay`) + item.fromDay}</Text>
                    </Row>
                    <Row >
                        <Text style={_styles().txt}>{t(`${emptyParkingBody}.toDay`) + item.toDay}</Text>
                    </Row>
                </Col>

                <Col cols={1.2} style={_styles().col}>
                    <Row>
                        <Text style={_styles().hour}>{item.fromHour}</Text>
                    </Row>
                    <Row>
                        <Text style={_styles().hour}>{item.toHour}</Text>
                    </Row>
                </Col>

                <Col cols={1} style={_styles().col}>
                    <Row>
                        <Text style={_styles().txt}>{t(`${emptyParkingBody}.floor`) + item.floor}</Text>
                    </Row>
                    <Row>
                        <Text style={_styles().txt}>{t(`${emptyParkingBody}.numParking`) + item.numParking}</Text>
                    </Row>
                    <Row>
                        <Text style={_styles().txt}>{t(`${emptyParkingBody}.family`) + item.family}</Text>
                    </Row>
                </Col>
                <Col cols={1} style={[_styles('center').col]}>
                    <View style={{ alignSelf: 'center' }}>
                        <Row style={styles.placeCenter}>
                            <Text>
                                <Text style={_styles().largeTxt}>{item.stars}</Text > /10</Text>
                        </Row>
                        <Row style={styles.placeCenter}><Text style={_styles().txt}><Star /> {t(`${emptyParking}.stars`)}</Text></Row>
                    </View>
                </Col>
            </Row>
        </TouchableOpacity>

    return (
        <>
            <Header
                {...props}
                headerRightElement={
                    <Row style={_styles().row}>
                        <Text style={styles.headerWithTitle}>
                            {t(`${emptyParking}.title`)}
                        </Text>

                        <View style={[styles.avatar, styles.placeCenter]}>
                            <Text style={_styles().numTxt}>{emptyParkingList && emptyParkingList.length && emptyParkingList.length}</Text>
                        </View>
                    </Row>
                }
            />
            {
                visible ? <ParkingForGuest
                    visible={visible}
                    setVisible={setVisible}
                    setOpenDialog={setOpenDialog}
                />
                    :
                    <>
                        <FlatList
                            data={emptyParkingList}
                            renderItem={renderItem}
                            keyExtractor={item => item.key}
                        />
                        <SaveParkingDialog
                            visible={openDialog}
                            setVisible={setOpenDialog}
                        />
                    </>
            }
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
    emptyParkingList: state.parkings.emptyParkingList,
    selectedParking: state.parkings.selectedParking,
})

const mapDispatchToProps = dispatch => ({
    setSelectedParking: (item) => dispatch(actions.setSelectedParking(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EmptyParkings)

const _styles = (alignItems) => StyleSheet.create(
    {
        body: {
            marginHorizontal: 30,
            marginVertical: 30,
        },
        largeTxt: {
            fontFamily: Regular,
            fontSize: 40
        },
        numTxt: {
            color: dark,
            fontFamily: Bold,
            fontSize: 20
        },
        bodyTxt: {
            lineHeight: 30,
            fontFamily: Regular,
            fontSize: 18,
            textAlign: 'right',
            color: '#FFFFFF'
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
            height: 120,
            borderRadius: 10,
            borderColor: '#05FF00',
            backgroundColor: '#05163C',
            borderWidth: 1,
            marginVertical: 5,
            justifyContent: 'center',
            direction: 'rtl',
            padding: 10
        },
        txt: {
            fontFamily: Regular,
            fontSize: 16,
            lineHeight: 25,
        },
    }
)
