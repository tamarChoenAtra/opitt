import { StyleSheet } from 'react-native';
import {
    ligth
} from '../styles/SystemColor';

export default StyleSheet.create({
    background: {
        //todo: global colors file
        backgroundColor: '#0A2550',
        flex: 1
    },
    headerWithTitle: {
        color: ligth,
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 30,
        textAlign: 'right',
        alignSelf: 'flex-start',
        padding: 5
    },
    contentAuth: {
        alignItems: 'center'
    },
    screenAuth: {
        paddingHorizontal: 20,
        flex: 1,
        alignItems: 'center'
    },
    link: {
        color: '#3EA2FF',
        textDecorationLine: 'underline'
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 15,
    },
    addBtn: {
        width: 35,
        height: 35,
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapHeader: {
        margin: 20
    },
    plus: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    leftItem: {
        flex: 1,
    },
    rowDirection: {
        flexDirection: 'row',
        alignItems: 'center',
        direction: 'rtl'
    },
    // leftItem: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     // height: 40
    // },
    noteTxt: {
        color: '#FFFFFF99',
        fontSize: 17,
    },
    txt: {
        color: '#FFFFFF',
        fontSize: 18
    },
    rightItem: {
        flex: 1,
        // direction: 'rtl',
        // justifyContent: 'flex-start',
        // height: 40,
    },
    headerBottomDivider: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    input: {
        height: 60,
        margin: 12,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        textAlign: 'right',
        color: '#FFFFFF99',
        fontSize: 18,
    },
    placeCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }

})