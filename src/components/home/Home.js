import React from 'react';
import Header from '../header/Header';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import Notification from '../../assets/svg/notification.svg'
import Row from '../genericComponents/Row';
import { useTranslation } from 'react-i18next';

export default () => {
    const { t } = useTranslation();
    const home = 'home'.toString();
    const returnTitle = () => {
        let date = new Date()
        let hour = date.getHours();
        if (hour < 12 && hour > 5)
            return t(`${home}.titleMorning`)
        else if (hour > 11 && hour < 16)
            return t(`${home}.titleNoon`)
        else if (hour > 15 && hour < 19)
            return t(`${home}.titleAfterNoon`)
        else if (hour > 18 && hour < 21)
            return t(`${home}.titleEvening`)
        else
            return t(`${home}.titleNight`)
    }

    return (
        <>
            <Header
                headerRightElement={<Text>{returnTitle() + " דודי "}</Text>}
            />
            <TouchableOpacity style={{ backgroundColor: '#05163C', height: 70, width: '95%', borderRadius: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', }}>
                <Row style={{ alignSelf: 'center' }}>
                    <Text>{t(`${home}.notificationsList`)}</Text>
                    <Notification />
                </Row>
            </TouchableOpacity>
        </>
    )
}