import React, { useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    View,
    TextInput,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';
import Delete from '../../assets/svg/delete.svg';
import styles from '../../styles/Styles';
import { Formik } from 'formik';
import TrueCheckBox from '../../assets/trueCheckBox.svg'
import FalseCheckBox from '../../assets/falseCheckBox.svg';
import { useTranslation } from 'react-i18next';
import LinearGradient from "react-native-linear-gradient";
import {
    dominant,
    dominantLight,
    ligthDominant
} from '../../styles/SystemColor';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../header/Header';
import LinearGradientBtn from '../genericComponents/LinearGradientBtn';
import { navigateScreen } from '../../routes/routes'
import TransparentBtn from '../genericComponents/TransparentBtn';
import CarsDetailsFormik from './CarsDetailsFormik';

export default (props) => {

    const {
        setFormValuesFunc,
        formValues,
        setCntParkingsFunc,
        checkBox,
        setCheckBox
    } = props;

    const {
        t
    } = useTranslation();

    const form = 'form'.toString();
    const createUserParking = 'createUserParking'.toString();
    const scrollViewRef = useRef();
    const [visible, setVisible] = useState(false);

    const setCheckBoxFunc = () => {
        setCheckBox(!checkBox)
    }

    const countionueFunc = () => {
        navigateScreen(props, 'AuthCarDetails', formValues)
    }

    const addParkingFunc = (index) => {
        setFormValuesFunc("parkings", [...formValues.parkings, { index: index, parkingNum: '', floor: 0 }])
    }

    useEffect(() => {
        console.log(formValues.parkings)
    }, [formValues.parkings])

    const deleteCarFunc = async (index) => {
        console.log(index);
        await setVisible(false);
        setFormValuesFunc("parkings", formValues.parkings.filter(park => park.index != index))
    };

    const returnBtn = (index) => {
        return (
            <>
                {index == formValues.parkings.length - 1 ?
                    <View style={styles.rowDirection}>
                        <TouchableOpacity onPress={() => addParkingFunc(index)}>
                            <LinearGradient
                                colors={[dominant, ligthDominant]}
                                style={[_styles().linearGradientBtn, _styles().iconPlus]}
                            >
                                <AntDesign
                                    name="plus"
                                    color="white"
                                    size={20}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                        <Text style={[styles.noteTxt, _styles().iconAndTxt]}>
                            {t("form.addParking")}
                        </Text>
                    </View>
                    :
                    <TouchableOpacity
                        onPress={() => setVisible(!visible)}
                        style={[styles.addBtn, { backgroundColor: '#0F5679' }]} >
                        <Delete />
                    </TouchableOpacity>
                }
            </>
        )
    }


    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                carKind: '',
                carNum: '',
                parkings: [{ parkingNum: '', floor: 0 }],
            }}
            onSubmit={values => console.log(values)}
        >
            {() => (
                <View>
                    <View style={styles.rowDirection}>
                        <View style={styles.rightItem}>
                            <TextInput
                                onChangeText={(txt) => setFormValuesFunc('firstName', txt)}
                                value={formValues.firstName}
                                style={styles.input}
                                placeholder={t(`${form}.firstName`)}
                                selectionColor="#FFFFFF99"
                                placeholderTextColor={'#FFFFFF99'}
                            />
                        </View>
                        <View style={styles.leftItem}>
                            <TextInput
                                onChangeText={(txt) => setFormValuesFunc('lastName', txt)}
                                value={formValues.lastName}
                                style={styles.input}
                                placeholder={t(`${form}.lastName`)}
                                selectionColor="#FFFFFF99"
                                placeholderTextColor={'#FFFFFF99'}
                            />
                        </View>
                    </View>
                    <TextInput
                        editable={checkBox ? false : true}
                        onChangeText={(txt) => setFormValuesFunc('carKind', txt)}
                        value={formValues.carKind}
                        style={styles.input}
                        placeholder={t(`${form}.carKind`)}
                        placeholderTextColor={'#FFFFFF99'}
                        selectionColor="#FFFFFF99"
                    />
                    <TextInput
                        editable={checkBox ? false : true}
                        onChangeText={(txt) => setFormValuesFunc('carNum', txt)}
                        value={formValues.carNum}
                        style={styles.input}
                        placeholder={t(`${form}.carNum`)}
                        selectionColor="#FFFFFF99"
                        placeholderTextColor={'#FFFFFF99'}
                    />
                    <ScrollView style={{ maxHeight: '38%' }}
                        ref={scrollViewRef}
                        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                    >
                        {formValues.parkings && formValues.parkings.map((item, index) =>
                            <View key={index} style={styles.rowDirection}>
                                {console.log(index,"iiii")}
                                <View style={_styles(2.3).flex}>
                                    <TextInput
                                        onChangeText={(txt) => setFormValuesFunc(`parkings[${index}].parkingNum`, { ...`parkings[${index}]`, parkingNum: txt })}
                                        value={formValues.parkings[index].parkingNum}
                                        style={styles.input}
                                        placeholder={t(`${form}.parkingNum`)}
                                        placeholderTextColor={'#FFFFFF99'}
                                        selectionColor="#FFFFFF99"
                                    />
                                </View>
                                <View style={_styles(1.5).flex}>
                                    <TextInput
                                        onChangeText={(txt) => setFormValuesFunc(`parkings[${index}].floor`, { ...`parkings[${index}]`, floor: txt })}
                                        value={formValues.parkings[index].floor}
                                        style={styles.input}
                                        placeholder={t(`${form}.floor`)}
                                        placeholderTextColor={'#FFFFFF99'}
                                        selectionColor="#FFFFFF99"
                                    />
                                </View>
                                <View style={_styles(2).flex}>
                                    {returnBtn(index)}
                                </View>
                            </View>
                        )}
                    </ScrollView>

                    <View
                        style={styles.rowDirection}
                    >
                        <TouchableOpacity onPress={setCheckBoxFunc}>
                            <View style={_styles().noCar}>
                                {checkBox ? <TrueCheckBox /> : <FalseCheckBox />}
                            </View>
                        </TouchableOpacity>
                        <Text style={[styles.noteTxt, _styles().iconAndTxt]}>{t(`${createUserParking}.noCar`)}</Text>
                    </View>

                    <View style={[styles.rowDirection, _styles().viewWrapButton]}>
                        <LinearGradientBtn
                            handlePress={countionueFunc}
                            content={t(`${createUserParking}.continue`)}
                            width={120}
                        />
                        <TransparentBtn
                            content="הוספת רכב נוסף"
                            color={dominant}
                        />
                    </View>
                </View>

            )}

        </Formik>

    )
}

export const _styles = (flex) => StyleSheet.create({
    iconAndTxt: {
        paddingHorizontal: 5
    },
    iconPlus: {
        height: 35,
        width: 35
    },
    linearGradientBtn: {
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewWrapButton: {
        padding: 25,
        justifyContent: 'center'
    },
    noCar: {
        paddingStart: 5,
        paddingTop: 5,
        width: 40,
        height: 40,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        flex: flex
    }
})