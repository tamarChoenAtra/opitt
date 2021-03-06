import { Platform, StyleSheet } from 'react-native';
import {
    dominant,
    ligth
} from '../styles/SystemColor';
import { Bold, Regular } from './SystemFonts';

export default StyleSheet.create({
    background: {
        //todo: global colors file
        backgroundColor: '#0A2550',
        flex: 1
    },
    boldTxt: {
        fontFamily: Bold,
        fontSize: 20
    },
    headerText: {

    },
    headerWithTitle: {
        color: ligth,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'right',
        alignSelf: 'flex-end',
        padding: 5,
        fontFamily: Bold
    },
    avatar: {
        width: 35,
        height: 35,
        backgroundColor: dominant,
        borderRadius: 50,
        marginHorizontal: 5
    },
    contentAuth: {
        alignItems: 'center',
    },
    screenAuth: {
        paddingHorizontal: 20,
        flex: 1,
        alignItems: 'center'
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
        direction:
            // Platform.OS === 'android' ? 
            // 'ltr' 
            // : 
            'rtl'
    },
    // leftItem: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     // height: 40
    // },

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
        fontFamily: Regular
    },
    placeCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    /// TEXT STYLE
    link: {
        color: '#3EA2FF',
        textDecorationLine: 'underline'
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 15,
        fontFamily: Regular
    },
    noteTxt: {
        color: '#FFFFFF99',
        fontSize: 17,
        fontFamily: Regular
    },
    txt: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: Regular
    },
    txtContentDialog: {
        fontWeight: 'normal',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 18,
        lineHeight: 20,
        fontFamily: Regular
    }

})