import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { bg, dark } from '../../styles/SystemColor';
import { Bold } from '../../styles/SystemFonts';
import Col from '../genericComponents/Col';
import Row from '../genericComponents/Row';
import styles from '../../styles/Styles';
import Button from '../genericComponents/Button';
import AnimatedView from '../genericComponents/AnimatedView';
import ParkingPermitDialog from '../dialog/ParkingPermit.dialog';

export default (props) => {
    const {
        visible,
        setCloseDialog,
        closeDialog
    } = props
    const scrollViewRef = useRef();
    const hourlyParkingPermit = 'hourlyParkingPermit'.toString();
    const [openDialog, setOpenDialog] = useState(false);
    const [hoursList, setHoursList] = useState(
        Array(24)
            .fill("")
            .map((_, i) => ({ key: `${i + 1}`, text: `item #${i}` }))
    )
    const { t } = useTranslation();


    const returnTxt = (key) => {
        switch (key) {
            case '1':
                return t(`${hourlyParkingPermit}.hour`)
            case '2':
                return t(`${hourlyParkingPermit}.hours2`)
            default:
                return key + " " + t(`${hourlyParkingPermit}.hours`)
        }
    }

    const renderItem = ({ item }) =>
        <View style={_styles().hourItem}>
            <TouchableOpacity>
                <Text>
                    {returnTxt(item.key)}
                </Text>
            </TouchableOpacity>
        </View>

    return (
        <>
            {visible && !closeDialog &&
                <AnimatedView>
                    <Row>
                        <Col cols={1}>
                            <View style={_styles().hoursView}>
                                <Text style={_styles().titleScrollView}>
                                    {t(`${hourlyParkingPermit}.parkingDefinition`)}
                                </Text>
                                <Text style={_styles().titleScrollView}>
                                    {t(`${hourlyParkingPermit}.till24Hours`)}
                                </Text >
                                <View style={_styles().titleDecoration}></View>
                                <FlatList
                                    data={hoursList}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.key}
                                />
                            </View>
                        </Col>
                        <Col cols={1}>
                            <View>
                                <Row>
                                    <View style={_styles().parkingsView}>
                                        <Text style={_styles().titleScrollView}>
                                            {t(`${hourlyParkingPermit}.chooseParkingNum`)}
                                        </Text>
                                        <View style={_styles().titleDecoration}></View>
                                    </View>
                                </Row>
                                <Row style={{ marginTop: 12 }}>
                                    <Button
                                        content={t(`${hourlyParkingPermit}.send`)}
                                        width={'150%'}
                                        handlePress={() => setOpenDialog(true)}
                                    />
                                </Row>
                            </View>
                        </Col>
                    </Row>
                </AnimatedView>
            }
            <ParkingPermitDialog
                visible={openDialog}
                setVisible={setOpenDialog}
                setCloseDialog={setCloseDialog}
            />
        </>

    )
}

const _styles = () => StyleSheet.create({
    hoursView: {
        backgroundColor: dark,
        height: 160,
        borderRadius: 7,
        paddingVertical: 10,
        marginTop: 25,
        margin: 10,
        alignItems: 'center',
        alignContent: 'center',
        width: '90%',
    },
    parkingsView: {
        backgroundColor: dark,
        height: 80,
        borderRadius: 7,
        paddingVertical: 10,
        marginTop: 25,
        alignItems: 'center',
        alignContent: 'center',
        width: '80%',
        margin: 10
    },
    hourItem: {
        height: 30,
        margin: 3,
        alignItems: 'center'
    },
    contentScrollView: {
        alignItems: 'center',
        alignContent: 'center'
    },
    titleScrollView: {
        color: '#43A6FF',
        fontFamily: Bold,
        fontSize: 15
    },
    titleDecoration: {
        borderBottomColor: '#374563',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '80%',
        padding: 2
    }
})