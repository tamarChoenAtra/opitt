import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    FlatList,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import styles from '../../styles/Styles';
import Header from '../header/Header';
import Footer from '../home/Footer';

function Setting() {

    const {
        t
    } = useTranslation();

    const settings = 'settings'.toString();

    const jsonSetting = [
        {
            item: t(`${settings}.generalManagement`)
        },
        {
            item: t(`${settings}.accountManagement`)
        },
        {
            item: t(`${settings}.history`)
        },
        {
            item: t(`${settings}.carNumberManagement`)
        },
        {
            item: t(`${settings}.administratorPrivileges`)
        },
        {
            item: t(`${settings}.termsAndPrivacy`)
        },
        {
            item: t(`${settings}.contactUs`)
        },
        {
            item: t(`${settings}.logOut`)
        },
    ]

    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity style={[_styles.item]}>
                    <Text style={[_styles.itemTxt]}>
                        {item.item}
                    </Text>
                </TouchableOpacity>
                <View style={styles.headerBottomDivider}></View>
            </>
        )
    }

    return (
        <>
            <Header
                headerRightElement={
                    <Text style={styles.headerWithTitle}>{t(`${settings}.title`)}</Text>
                }
            />
            <ScrollView>
                <FlatList
                    data={jsonSetting}
                    renderItem={renderItem}
                    keyExtractor={(o, index) => index}
                />
            </ScrollView>
            <Footer />
        </>
    )

}

export default Setting;


const _styles = StyleSheet.create(
    {
        item: {
            justifyContent: 'center',
            height: 65
        },
        itemTxt: {
            textAlign: 'right',
            marginRight: '5%',
            fontWeight: 'bold',
            fontSize:16,
            lineHeight: 20
        }
    }
)