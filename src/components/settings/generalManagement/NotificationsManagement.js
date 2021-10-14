import React, { useState } from 'react';
import Header from '../../header/Header';
import Row from '../../genericComponents/Row';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    FlatList,
    View,
    Switch
} from 'react-native';
import ArrowBack from '../../../assets/arrowBack.svg';
import { useTranslation } from 'react-i18next';
import styles from '../../../styles/Styles';
import Col from '../../genericComponents/Col';
import { Regular } from '../../../styles/SystemFonts';

function NotificationsManagement(props) {
    const { t } = useTranslation();
    const notificationsManagement = 'notificationsManagement'.toString();
    const { navigation } = props;

    const [settingsList, setSettingsList] = useState(
        {
            firstSetting: {
                title: t(`${notificationsManagement}.firstSetting`),
                switch: false,
            },
            secondSetting: {
                title: t(`${notificationsManagement}.secondSetting`),
                switch: false,
            },
            thirdSetting: {
                title: t(`${notificationsManagement}.thirdSetting`),
                switch: false,
            }
        })
    const toggleSwitch = (item) => {
        let tempItem = settingsList[item]
        tempItem.switch = !tempItem.switch;
        setSettingsList({ ...settingsList, [item]: tempItem })
    };

    const renderItem = ({ item }) => {
        return (
            <>
                <Row style={[_styles.item]}>
                    <Col cols={1}>
                        <Switch
                            trackColor={{ false: '#374563', true: '#FFC803' }}
                            onValueChange={() => toggleSwitch(item)}
                            value={settingsList[item].switch}
                            thumbColor={settingsList[item].switch ? 'black' : '#FFFFFF'}
                        />
                    </Col>
                    <Col cols={4}>
                        <TouchableOpacity
                            onPress={() =>
                                alert(settingsList[item])
                            }
                        >
                            <Text style={[_styles.itemTxt]}>
                                {settingsList[item].title}
                            </Text>
                        </TouchableOpacity>
                    </Col>
                </Row>
                <View style={styles.headerBottomDivider}></View>
            </>
        )
    }

    return (
        <>
            <Header
                {...props}
                headerRightElement={
                    <Row style={_styles.row}>
                        <Text style={styles.headerWithTitle}>
                            {t(`${notificationsManagement}.title`)}
                        </Text>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack();
                        }}>
                            <ArrowBack />
                        </TouchableOpacity>
                    </Row>
                }
            />
            <ScrollView>
                <FlatList
                    data={Object.keys(settingsList)}
                    renderItem={renderItem}
                    keyExtractor={(o, index) => index}
                />
            </ScrollView>
        </>
    )
}

export default NotificationsManagement;

const _styles = StyleSheet.create(
    {
        item: {
            alignItems: 'center',
            height: 65,
            // justifyContent: 'space-between',
            marginHorizontal: 10,
        },
        row: {
            alignItems: 'center'
        },
        itemTxt: {
            textAlign: 'right',
            marginRight: '5%',
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: 20,
            fontFamily: Regular
        }
    }
)