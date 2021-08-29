import React, { useState } from 'react';
import {
    TouchableOpacity,
    Text,
    TextInput,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import ArrowBack from '../../assets/arrowBack.svg';
import styles from '../../styles/Styles';
import Header from '../header/Header';
import i18 from '../../i18/i18n';
import { useTranslation } from 'react-i18next';
import BigDelete from '../../assets/svg/bigDelete.svg'
import Edit from '../../assets/svg/edit.svg'
import Button from '../genericComponents/Button';
import { navigateScreen } from '../../routes/routes';
import DeleteCarDialog from '../dialog/DeleteCar.dialog';
import { connect } from 'react-redux';

function AuthCarDetails(props) {

    const {
        t
    } = useTranslation();

    const {
        route,
        _cars
    } = props;

    const authCarDetails = 'authCarDetails'.toString();
    const [visible, setVisible] = useState(false);
    const [itemDeleteOrEdit, setItemDeleteOrEdit] = useState({});

    return (
        <>
            <Header
                headerRightElement={
                    <TouchableOpacity onPress={() => navigateScreen(props, 'CarsDetailsForm')}>
                        <ArrowBack />
                    </TouchableOpacity>
                }
            />
            <Text style={styles.title}>
                {i18.t(`${authCarDetails}.title`)}
            </Text>

            <Text style={_styles.indexCarTxt}>{t(`${authCarDetails}.indexCard`) + " 1:"}</Text>

            <ScrollView>
                {
                    _cars.map((car) =>
                        <View style={styles.rowDirection}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity>
                                    <View style={[_styles.actCircle, { backgroundColor: "#0F3879" }]}>
                                        <Edit width={20} height={20} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 3, }}>

                                <TextInput
                                    editable={false}
                                    style={[styles.input, { width: '100%', alignSelf: 'center' }]}
                                    placeholder={route.params.carKind + route.params.carNum}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => setVisible(true)}>
                                    <View style={[_styles.actCircle, { backgroundColor: "#0F5679" }]}>
                                        <BigDelete width={20} height={20} />
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )
                }
            </ScrollView>

            <Text style={_styles.indexCarTxt}>{t(`${authCarDetails}.numParkings`) + ":"}</Text>

            <View style={styles.placeCenter}>
                <Button
                    handlePress={() => setItemDeleteOrEdit()}
                    content={t(`${authCarDetails}.continue`)}
                    width={180}
                    size="large"
                />
            </View>

            <DeleteCarDialog
                handlePress={() => { }}
                visible={visible}
                setVisible={setVisible}
            />

        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    _cars: state.cars.cars
})

const mapDispatchToProps = dispatch => ({
    // setStyleCard: (style) => dispatch(actions.setStyleCard(style)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthCarDetails);

const _styles = StyleSheet.create(
    {
        indexCarTxt: {
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
            marginVertical: '5%'
        },
        actCircle: {
            width: 45,
            height: 45,
            borderRadius: 50,
            // backgroundColor: '#0F5679',
            justifyContent: 'center',
            alignItems: 'center'
        },
    }
)