import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Col from '../genericComponents/Col';
import DataBox from '../genericComponents/DataBox';
import Row from '../genericComponents/Row';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import styles from '../../styles/Styles';
import TrueCheckBox from '../../assets/trueCheckBox.svg'
import FalseCheckBox from '../../assets/falseCheckBox.svg';
import { ligth } from '../../styles/SystemColor';
import Button from '../genericComponents/Button';

function DailyParking(props) {
    const { t } = useTranslation();
    const txt = 'dailyParking'.toString();
    const [selectedItem, setSelectedItem] = useState(null)

    const data = [
        {
            kindList: 'daysList',
            title: 'title1'
        },
        // {
        //     kindList: 'daysList',
        //     title: 'title2'
        // },
        {
            kindList: 'hoursList',
            title: 'title3'
        },
        {
            kindList: 'hoursList',
            title: 'title4'
        },
    ]
    const buttons = <Row style={_styles().btnRow}>
        <Button
            content={t(`${txt}.btn1`)}
            width={140}
        />
        <Button
            kind="outline"
            content={t(`${txt}.btn2`)}
            colorOutline={ligth}
            width={140}
        />
    </Row>
    const returnTxt = (key) => {
        let txt = key
        if (key < 10)
            txt = `0${key}`
        return txt
        // return selectedItem == key ? `${txt} : 00` : `${txt}`
    }

    return (
        <>
            <Row>
                {
                    data.map(item =>
                        <Col cols={2}>
                            <DataBox
                                title={t(`${txt}.${item.title}`)}
                                secondTitle={t(`${txt}.title2`)}
                                kindList={item.kindList}
                                returnTxt={returnTxt}
                                width='92%'
                                selectedItem={selectedItem}
                                setSelectedItem={setSelectedItem}
                            />
                        </Col>
                    )
                }
            </Row>
            <View
                style={styles.rowDirection}
            >
                <TouchableOpacity
                // onPress={setCheckBoxFunc}
                >
                    <View style={_styles().noCar}>
                        {/* {checkBox ?  */}
                        <TrueCheckBox />
                        {/* : <FalseCheckBox />} */}
                    </View>
                </TouchableOpacity>
                <Text style={[styles.noteTxt, _styles().iconAndTxt]}>
                    {t(`${txt}.checkBox`)}
                </Text>
            </View>
            {buttons}
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(DailyParking);

const _styles = () => StyleSheet.create({
    noCar: {
        paddingStart: 5,
        paddingTop: 5,
        width: 40,
        height: 40,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconAndTxt: {
        paddingHorizontal: 5
    },
    viewWrapButton: {
        padding: 25,
        justifyContent: 'center'
    },
    btnRow: {
        direction: 'rtl',
        margin: 15
        // marginTop: 20
    },
})