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
import ParkingForNewGuest from './ParkingForNewGuest';
function EmptyParkings(props) {
    const {
        navigation,
        reservedParkingsList
    } = props;

    const { t } = useTranslation();
    const emptyParking = 'emptyParkings'.toString();
    const emptyParkingBody = 'reservedParkingsList'.toString();
    const [visible, setVisible] = useState(false);
    const renderItem = ({ item }) =>
        <TouchableOpacity
            onPress={() =>
                setVisible(true)
            }
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
                        <Text style={_styles().txt}>{t(`${emptyParkingBody}.floor`) + item.floor}</Text>
                    </Row>
                    <Row>
                        <Text style={_styles().txt}>{t(`${emptyParkingBody}.numParking`) + item.numParking}</Text>
                    </Row>
                    <Row>
                        <Text style={_styles().txt}>{t(`${emptyParkingBody}.family`) + item.family}</Text>
                    </Row>
                </Col>
            </Row>
        </TouchableOpacity>

    return (
        <>
            <Header
                headerRightElement={
                    <Row style={_styles().row}>
                        <Text style={styles.headerWithTitle}>
                            {t(`${emptyParking}.title`)}
                        </Text>

                        <View style={[styles.avatar, styles.placeCenter]}>
                            <Text style={_styles().numTxt}>{reservedParkingsList && reservedParkingsList.length && reservedParkingsList.length}</Text>
                        </View>
                    </Row>
                }
            />

            <FlatList
                data={reservedParkingsList}
                renderItem={renderItem}
                keyExtractor={item => item.key}
            />
            {
                visible && <ParkingForNewGuest />
            }
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
    reservedParkingsList: state.parkings.reservedParkingsList,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(EmptyParkings)

const _styles = (alignItems) => StyleSheet.create(
    {
        body: {
            marginHorizontal: 30,
            marginVertical: 30,
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
