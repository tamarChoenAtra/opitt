import React, { useEffect, useState } from 'react';
import {
    FlatList,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import {
    bg,
    ligth
} from '../../styles/SystemColor';
import {
    languages
} from '../../i18/languageList';
import { initReactI18next, useTranslation } from 'react-i18next';
import Arrow1 from '../../assets/svg/Arrow1.svg';
import Arrow2 from '../../assets/svg/Arrow2.svg';


export default () => {

    const {
        i18n
    } = useTranslation();

    const [languagesTemp, setLanguagesTemp] = useState(languages);
    const [flagOpen, setFlagOpen] = useState(false);

    const changeLanuage = (item) => {
        //open the dropdown
        !flagOpen && setFlagOpen(true);

        //replace language and close the dropdown
        flagOpen && setFlagOpen(false);

        const newLanguagesList = languagesTemp.filter(lan => lan.index != item.index)
        const newList = [
            item,
            ...newLanguagesList
        ]
        setLanguagesTemp(newList)
        i18n.changeLanguage(item.i18);
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => changeLanuage(item)}
                activeOpacity={0.6}
                key={index}
                style={_styles.listItem}>
                {
                    <View
                        style={_styles.icon}>
                        {
                            index === 0
                                ?
                                flagOpen ?
                                    <Arrow1 />
                                    :
                                    <Arrow2 />
                                :
                                null
                        }
                    </View>
                }
                <View style={_styles.listWrapper}>
                    <View>
                        <Text style={_styles.listNameText}>{item.language}</Text>
                    </View>
                    {
                        flagOpen
                        &&
                        <View style={[_styles.devider]}></View>
                    }
                </View>
                <View style={_styles.emptyView} />
            </TouchableOpacity>
        )
    }

    return (
        <View
            style={_styles.wrap}>
            <View style={_styles.wrapFlatList}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={!flagOpen ? [languagesTemp[0]] : languagesTemp}
                    renderItem={(item, index) => renderItem(item, index)}
                    keyExtractor={item => item.index}
                />
            </View>
        </View>
    )
}


const _styles = StyleSheet.create(
    {
        wrap: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        listItem: {
            height: 43,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        wrapFlatList: {
            width: '40%',
            borderWidth: 1,
            borderColor: ligth,
            borderRadius: 8,
            backgroundColor: '#05163C'
        },
        icon: {
            flex: 0.9,
            alignItems: 'flex-end',
            paddingLeft: 0
        },
        emptyView: {
            flex: 0.9,
            alignItems: 'center'
        },
        devider: {
            width: '75%',
            borderBottomWidth: 0.5,
            borderBottomColor: ligth
        },
        listNameText: {
            color: ligth,
            fontSize: 18,
            textAlign: 'center',
            marginVertical: 10,

        },
        listRow: {
            height: 45,
            // flexDirection: 'row',
        },
        listWrapper: {
            // backgroundColor:'yellow',
            // borderBottomColor: ligth,
            // borderBottomWidth: 1,
            flex: 2.2,
            alignItems: 'center'
        }

    }
)
