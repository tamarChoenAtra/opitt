import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList
} from 'react-native';
import { bg, dark } from '../../styles/SystemColor';
import { Bold } from '../../styles/SystemFonts';
import Col from '../genericComponents/Col';
import Row from '../genericComponents/Row';
import styles from '../../styles/Styles';
import Button from '../genericComponents/Button';
import AnimatedView from '../genericComponents/AnimatedView';

export default (props) => {
    const scrollViewRef = useRef();
    const hourlyParkingPermit = 'hourlyParkingPermit'.toString();
    const { t } = useTranslation();
    const [hoursList, setHoursList] = useState(
        Array(24)
            .fill("")
            .map((_, i) => ({ key: `${i + 1}`, text: `item #${i}` }))
    )

    const renderItem = ({ item }) =>
        <View style={{ height: 30, margin: 3 }}>
            <Text>{item.key + " " + t(`${hourlyParkingPermit}.hours`)}</Text>
        </View>
    return (
        <>
            <AnimatedView style={_styles().hoursView}>
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
                    ref={scrollViewRef}
                    keyExtractor={index => index}
                />
            </AnimatedView>
            {/* <Row>
                <View style={_styles().parkingsView}>
                    <Text style={_styles().titleScrollView}>
                        {t(`${hourlyParkingPermit}.chooseParkingNum`)}
                    </Text>
                    <View style={_styles().titleDecoration}></View>
                </View>

            </Row>
            <Row>
                <Button />
            </Row> */}
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
        width: '100%'
    },
    parkingsView: {
        backgroundColor: dark,
        height: 80,
        borderRadius: 7,
        paddingVertical: 10,
        marginTop: 25,
        alignItems: 'center',
        alignContent: 'center',
        width: '75%'
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