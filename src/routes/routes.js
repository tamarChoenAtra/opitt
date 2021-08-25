import React from 'react';
import {
    StatusBar,
    SafeAreaView,
} from 'react-native';
import styles from '../styles/Styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import InitComponent from '../components/initComponent/InitComponent';
import CarsDetailsForm from '../components/carsDetailsForm/CarsDetailsForm';
import FirstScreen from '../components/firstScreen/FirstScreen';
import Auth1 from '../components/auth/Auth1';
import Terms from '../components/terms/Terms';
import Error from '../components/error/Error';
import AuthCarDetails from '../components/carsDetailsForm/AuthCarDetails';
import Auth2 from '../components/auth/Auth2';
import PaymentStage1 from '../components/paymants/PaymentStage1';
import PaymentStage2 from '../components/paymants/PaymentStage2';
import Payments from '../components/paymants/Payments';
import Footer from '../components/home/Footer';
import WrapHome from '../components/home/WrapHome';
import Home from '../components/home/Home';

const Stack = createNativeStackNavigator();

export const navigateScreen = (props, screen, params) => {
    props.navigation.navigate(screen, params && params);
}

export const goBack = (props) => {
    console.log(props.navigation)
    props.navigation.goBack();
}

const addStaticBackground = (props, Component) => {
    return (
        <>
            <SafeAreaView
                style={styles.background}>
                <Component {...props} />
            </SafeAreaView>
        </>
    )
}

export const RoutesApp = () => {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Home"
            >
                <Stack.Screen
                    name="Home"
                    component={
                        (props) => addStaticBackground(props, Home)
                    }
                />

            </Stack.Navigator>
        </>
    )
}


export const Routes = () => {

    return (
        <>
            <StatusBar
                backgroundColor="#0A2550"
                barStyle="light-content"
            />

            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName="WrapHome"
                >
                    <Stack.Screen
                        name="CarsDetailsForm"
                        component={
                            (props) => addStaticBackground(props, CarsDetailsForm)
                        }
                    />
                    <Stack.Screen
                        name="PaymentStage1"
                        component={
                            (props) => addStaticBackground(props, PaymentStage1)
                        }
                    />
                    <Stack.Screen
                        name="WrapHome"
                        component={WrapHome}
                    />
                    <Stack.Screen
                        name="PaymentStage2"
                        component={
                            (props) => addStaticBackground(props, PaymentStage2)
                        }
                    />
                    <Stack.Screen
                        name="Payments"
                        component={
                            (props) => addStaticBackground(props, Payments)
                        }
                    />
                    <Stack.Screen
                        name="AuthCarDetails"
                        component={
                            (props) => addStaticBackground(props, AuthCarDetails)
                        }
                    />
                    <Stack.Screen
                        name="InitComponent"
                        component={
                            (props) => addStaticBackground(props, InitComponent)
                        }
                    />
                    <Stack.Screen
                        name="Footer"
                        component={
                            (props) => addStaticBackground(props, Footer)
                        }
                    />
                    <Stack.Screen
                        name="FirstScreen"
                        component={
                            (props) => addStaticBackground(props, FirstScreen)
                        }
                    />
                    <Stack.Screen
                        name="Auth1"
                        component={
                            (props) => addStaticBackground(props, Auth1)
                        }
                    />
                    <Stack.Screen
                        name="Terms"
                        component={
                            (props) => addStaticBackground(props, Terms)
                        }
                    />
                    <Stack.Screen
                        name="Error"
                        component={
                            (props) => addStaticBackground(props, Error)
                        }
                    />
                    <Stack.Screen
                        name="Auth2"
                        component={
                            (props) => addStaticBackground(props, Auth2)
                        }
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}
