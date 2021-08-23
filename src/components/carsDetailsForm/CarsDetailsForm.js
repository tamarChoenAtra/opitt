import React, { useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native';
import ArrowBack from '../../assets/arrowBack.svg';
import styles from '../../styles/Styles';
import Header from '../header/Header';
import { useTranslation } from 'react-i18next';
import { navigateScreen } from '../../routes/routes'
import CarsDetailsFormik from './CarsDetailsFormik';

export default (props) => {

    const createUserParking = 'createUserParking'.toString();

    const [checkBox, setCheckBox] = useState(false);
    const [cntParkings, setCntParkings] = useState(1);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        carKind: '',
        carNum: '',
        parkings: [{ parkingNum: '', floor: 0, index: 0 }]
    })

    const {
        t
    } = useTranslation();

    const setFormValuesFunc = (key, value) => {
        console.log(formValues)
        setFormValues({ ...formValues, [key]: value })
    }

    const setCntParkingsFunc = () => {
        setCntParkings(cntParkings + 1)
    }

    return (
        <>
            <Header
                headerRightElement={
                    <TouchableOpacity onPress={() => navigateScreen(props, 'Auth1')}>
                        <ArrowBack />
                    </TouchableOpacity>
                }
            />
            <Text style={styles.title}>
                {t(`${createUserParking}.title`)}
            </Text>
            <CarsDetailsFormik
                {...props}
                formValues={formValues}
                setCntParkingsFunc={setCntParkingsFunc}
                setFormValuesFunc={setFormValuesFunc}
                checkBox={checkBox}
                setCheckBox={setCheckBox}
            />
        </>
    )
}

const _styles = StyleSheet.create({

})
