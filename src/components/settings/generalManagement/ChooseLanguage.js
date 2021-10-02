import React, { useState } from 'react';
import Header from '../../header/Header';
import {
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';
import styles from '../../../styles/Styles';
import { useTranslation } from 'react-i18next';
import ArrowBack from '../../../assets/arrowBack.svg'
import Row from '../../genericComponents/Row';
import Check from '../../../assets/svg/check.svg';
import { Regular } from '../../../styles/SystemFonts';
import { connect } from 'react-redux';
import actions from '../../../redux/actions';
import ChangeLanguageDialog from '../../dialog/ChangeLanguage.dialog';
import RNRestart from 'react-native-restart';

function ChooseLanguage(props) {
    const {
        _language,
        _setLanguage,
        navigation
    } = props;
    const { t } = useTranslation();
    const chooseLanguage = 'chooseLanguage'.toString();
    const langugesList = [
        {
            index: 0,
            language: 'עברית'
        },
        {
            index: 1,
            language: 'English'
        },
        {
            index: 2,
            language: 'Pусский'
        },
        {
            index: 3,
            language: 'Français'
        },
        {
            index: 4,
            language: 'عربي'
        },
    ]
    const [visible, setVisible] = useState(false);
    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity
                    style={[_styles.item]}
                    onPress={() => {
                        _setLanguage(item)
                        setVisible(true)
                    }}
                >
                    <Row>
                        <View style={{ width: 70, alignItems: 'center' }}>
                            {
                                _language.index == item.index &&
                                <Check />
                            }
                        </View>
                        <Text style={[_styles.itemTxt]}>
                            {item.language}
                        </Text>
                    </Row>
                </TouchableOpacity>
                <View style={styles.headerBottomDivider}></View>
            </>
        )
    }

    return (
        <>
            <Header
                headerRightElement={
                    <>
                        <Row style={_styles.row}>
                            <Text style={styles.headerWithTitle}>
                                {t(`${chooseLanguage}.title`)}
                            </Text>
                            <TouchableOpacity onPress={() => {
                                navigation.goBack();
                            }}>
                                <ArrowBack />
                            </TouchableOpacity>
                        </Row>
                    </>
                }
            />
            <ScrollView>
                <FlatList
                    data={langugesList}
                    renderItem={renderItem}
                    keyExtractor={(o, index) => index}
                />
            </ScrollView>

            <ChangeLanguageDialog
                visible={visible}
                setVisible={setVisible}
                handlePressBtn1={() => RNRestart.Restart()}
                handlePressBtn2={() => { }}
            />
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _language: state.settings.language,
})

const mapDispatchToProps = dispatch => ({
    _setLanguage: (language) => dispatch(actions.setLanguage(language)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLanguage)

const _styles = StyleSheet.create(
    {
        item: {
            justifyContent: 'center',
            height: 65,
            direction: 'rtl',
        },
        row: {
            alignItems: 'center'
        },
        itemTxt: {
            // textAlign: 'right',
            fontFamily: Regular,
            fontSize: 20,
            lineHeight: 20
        }
    }
)