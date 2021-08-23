
import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Row from '../genericComponents/Row';
import Home from '../../assets/svg/footer/home.svg'
import Settings from '../../assets/svg/footer/settings.svg'
import P from '../../assets/svg/footer/p.svg'
import Gate from '../../assets/svg/footer/gate.svg'
import Message from '../../assets/svg/footer/message.svg'
import { useTranslation } from 'react-i18next';

export default () => {
    const footer = 'footer'.toString();
    const { t } = useTranslation();
    const [index, setIndex] = useState(-1);
    const footerIcons = [
        {
            name: "tab1",
            icon: <Settings />,
            title: t(`${footer}.tab1`)
        },
        {
            name: "tab2",
            icon: <Message style={_styles.message} />,
            title: t(`${footer}.tab2`)
        },
        {
            name: "tab3",
            icon: <P />,
            title: t(`${footer}.tab3`)
        },
        {
            name: "tab4",
            icon: <Gate />,
            title: t(`${footer}.tab4`)
        },
        {
            name: "tab5",
            icon: <Home />,
            title: t(`${footer}.tab5`)
        },
    ]

    return (
        <View style={_styles.footer}>
            <Row>
                <FlatList
                    horizontal
                    data={footerIcons}
                    renderItem={item =>
                        <TouchableOpacity onPress={() =>
                            setIndex(item.index)
                        }
                            style={_styles.tab}
                        >
                            {/* {item.item.name == "tab2" ? <><View style={{ width: 20, height: 20, backgroundColor: '#FFC803', zIndex: 1, bottom: 0, }}></View>
                                {item.item.icon}
                            </>
                                :  */}
                            {item.item.icon}
                            {/* } */}

                            <Text style={_styles.footerTxt}>{item.item.title}</Text>
                        </TouchableOpacity>
                    }
                />
            </Row>
        </View>
    )
}

const _styles = StyleSheet.create({
    footer: {
        backgroundColor: '#05163C',
        height: 75,
        bottom: 0,
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        // height: 65,
        padding: 22,
        zIndex: 1
    },
    footerTxt: {
        color: '#FFFFFF99',
        fontFamily: 'Assistant-Regular'
    },
    message: {
        zIndex: 1
    }
})