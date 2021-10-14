import React, { useEffect, useState } from 'react';
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
import { navigateScreen } from '../../routes/routes';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

function Footer(props) {
    const {
        _tab,
        _setTab
    } = props;

    const footer = 'footer'.toString();
    const { t } = useTranslation();
    const [index, setIndex] = useState(4);

    const handlePressTab = (item) => {
        _setTab(item.item.navigate)
        setIndex(item.index)
        navigateScreen(props, item.item.navigate)
    }

    const returnIcon = (item) => {

        let Icon = item.item.icon
        // return <Icon fill={index == item.index ? '#FFC803' : 'white'} />;
        return <Icon fill={_tab == item.item.navigate ? '#FFC803' : 'white'} />;
    }

    const footerIcons = [
        {
            name: "tab1",
            icon: Settings,
            title: t(`${footer}.tab1`),
            navigate: 'Setting',
        },
        {
            name: "tab2",
            icon: Message,
            title: t(`${footer}.tab2`),
            navigate: 'Messages',
        },
        {
            name: "tab3",
            icon: P,
            title: t(`${footer}.tab3`),
            navigate: 'Parkings',
        },
        {
            name: "tab4",
            icon: Gate,
            title: t(`${footer}.tab4`),
            navigate: 'Gate',
        },
        {
            name: "tab5",
            icon: Home,
            title: t(`${footer}.tab5`),
            navigate: 'Home',
        },
    ]

    return (
        <View style={_styles.footer}>
            <Row>
                <FlatList
                    horizontal
                    data={footerIcons}
                    renderItem={item =>
                        <TouchableOpacity onPress={() => handlePressTab(item)}
                            style={[_styles.tab, { backgroundColor: _tab == item.item.navigate ? '#FFC803' : '#05163C' }]}
                        >
                            {returnIcon(item)}
                            <Text style={_styles.footerTxt}>{item.item.title}</Text>
                        </TouchableOpacity>
                    }
                />
            </Row>
        </View>
    )
}
const mapStateToProps = state => ({
    ...state,
    _tab: state.general.tab
})

const mapDispatchToProps = dispatch => ({
    _setTab: (tab) => dispatch(actions.setTab(tab))
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

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
        // fontFamily: 'Assistant-Regular'
    },
    message: {
        zIndex: 1
    }
})