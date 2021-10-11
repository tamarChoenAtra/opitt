import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Col from './Col';
import { dark } from '../../styles/SystemColor';
import { Bold } from '../../styles/SystemFonts';
import { useTranslation } from 'react-i18next';
import Row from './Row';

export default (props) => {
    const { t } = useTranslation();
    const days = 'days'.toString();
    const {
        title,
        subTitle,
        // data,
        kindList,
        returnTxt,
        width,
        selectedItem,
        setSelectedItem,
    } = props;

    const flatListRef = useRef();
    const data = {
        'daysList': [{
            key: t(`${days}.sun`)
        },
        {
            key: t(`${days}.mon`)
        },
        {
            key: t(`${days}.tue`)
        },
        {
            key: t(`${days}.wed`)
        },
        {
            key: t(`${days}.thu`)
        },
        {
            key: t(`${days}.fri`)
        },
        {
            key: t(`${days}.sat`)
        }],
        'digitsList': Array(24)
            .fill("")
            .map((_, i) => ({ key: `${i}`, text: `item #${i}` })),
        'hoursList': Array(24)
            .fill("")
            .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
    }
    const setSelectedItemFunc = (item) => {
        setSelectedItem(item)
        flatListRef.current.scrollToIndex({ animated: true, index: item - 1 > -1 ? item - 1 : item });
    };

    const returnTxtStyle = (key) => {
        return {
            fontFamily: Bold,
            fontSize: 18,
            color: selectedItem == key ? 'white' : '#364462',
        }
    }

    const renderItem = ({ item }) =>
        <View style={_styles().hourItem}>

            <TouchableOpacity
                onPress={() => setSelectedItemFunc(item.key)}
            >
                <Text style={returnTxtStyle(item.key)}>
                    {returnTxt ? returnTxt(item.key) : item.txt}
                </Text>
            </TouchableOpacity>

        </View>

    return (
        <>
            <Col cols={1}>
                <View style={_styles(width).hoursView}>
                    <Text style={_styles().titleScrollView}>
                        {title}
                    </Text>
                    {subTitle &&
                        <Text style={_styles().titleScrollView}>
                            {subTitle}
                        </Text >
                    }
                    <View style={_styles().titleDecoration}></View>
                    <FlatList
                        data={data[kindList]}
                        renderItem={renderItem}
                        keyExtractor={item => item.key}
                        ref={flatListRef}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </Col>
        </>
    )
}

const _styles = (width) => StyleSheet.create({
    hoursView: {
        backgroundColor: dark,
        height: 160,
        borderRadius: 7,
        paddingVertical: 10,
        marginTop: 25,
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width
    },
    hourItem: {
        height: 30,
        margin: 3,
        alignItems: 'center',
        paddingHorizontal: 40
    },
    titleScrollView: {
        color: '#43A6FF',
        fontFamily: Bold,
        fontSize: 15,
        alignSelf: 'center'
    },
    titleDecoration: {
        borderBottomColor: '#374563',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '80%',
        padding: 2
    }
})