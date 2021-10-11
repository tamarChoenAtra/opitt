import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import {
    TextInput,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import styles from "../../styles/Styles";
import Row from "../genericComponents/Row";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { dark, dominant, dominantDark } from '../../styles/SystemColor';
import LinearGradient from "react-native-linear-gradient";
import { Bold, Regular } from "../../styles/SystemFonts";
import Search from '../../assets/svg/search.svg'
import Col from "../genericComponents/Col";
function SearchGuest(props) {
    const { t } = useTranslation();
    const guests = 'guests'.toString();

    return (
        <>
            <Row style={[styles.placeCenter, _styles().wrapInput]}>
                <Col cols={4}>
                    <View style={[_styles().searchSection]}>
                        <Search style={[_styles().searchIcon]} />
                        <TextInput
                            placeholder={t(`${guests}.search`)}
                            style={_styles().inputTxt}
                            selectionColor="#FFFFFF99"
                            placeholderTextColor={'#FFFFFF99'}
                        // onChangeText={(searchString) => {this.setState({searchString})}}
                        />
                    </View>
                </Col>
                <Col cols={1}>
                    <TouchableOpacity>
                        <LinearGradient
                            colors={[dominant, dominantDark]}
                            style={[_styles().linearGradientBtn]}
                        >
                            <AntDesign
                                name="plus"
                                color="white"
                                size={25}
                            />
                        </LinearGradient>
                    </TouchableOpacity>

                </Col>
            </Row>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SearchGuest);

export const _styles = () => StyleSheet.create({
    linearGradientBtn: {
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    wrapInput: {
        marginVertical: 20,
        marginHorizontal: 10,
        height: 50,
        direction: 'rtl'
    },
    inputTxt: {
        fontFamily: Bold,
        fontSize: 18,
        marginHorizontal: 10,
        color: '#9DA8B9',
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#9DA8B9',
        borderRadius: 10,
        paddingHorizontal: 20,
        fontSize: 18,
        fontFamily: Regular,
        backgroundColor: dark,
        alignSelf: 'center',
        width: '100%'
    },
    searchIcon: {
        padding: 10,
    },
})