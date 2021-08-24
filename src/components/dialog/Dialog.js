import React from 'react';
import Dialog, { DialogContent, SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import styles from '../../styles/Styles';
import LinearGradientBtn from '../genericComponents/LinearGradientBtn';
import TransparentBtn from '../genericComponents/TransparentBtn';
import ChipButton from '../genericComponents/ChipButton';
import {
    ligth
} from '../../styles/SystemColor';

export default (props) => {

    const {
        title,
        buttons,
        content,
        visible,
        setVisible,
        closeHandlePress
    } = props;

    return (
        <Dialog
            dialogAnimation={new SlideAnimation({
                slideFrom: 'bottom',
            })}
            dialogStyle={_styles.dialogStyle}
            visible={visible}
        >
            <DialogContent
                style={[_styles.dialogContent]}
            >
                <View style={[styles.contentAuth, { zIndex: 1 }]}>
                    <Text style={[styles.title, _styles.title]}>
                        {title}
                    </Text>
                    {content}
                    <View
                        style={[
                            styles.rowDirection,
                            { marginTop: 20, zIndex: 1 }
                        ]}>
                        {
                            buttons.length > 1 ?
                                <>
                                    <LinearGradientBtn
                                        handlePress={buttons[0].handlePress}
                                        content={buttons[0].body}
                                        width={buttons[0].width}
                                    />
                                    <TransparentBtn
                                        smallborderWidth
                                        content={buttons[1].body}
                                        color={ligth}
                                        handlePress={buttons[1].handlePress}
                                    />
                                </>
                                :
                                <LinearGradientBtn
                                    handlePress={buttons[0].handlePress}
                                    content={buttons[0].body}
                                    width={buttons[0].width}
                                />
                        }
                    </View>
                </View>
                {/* <ChipButton handlePress={closeHandlePress} /> */}

            </DialogContent>

        </Dialog>
    )
}

const _styles = StyleSheet.create(
    {

        txt: {
            color: ligth,
            fontStyle: 'normal',
            // fontFamily: font
        },
        details: {
            fontWeight: 'normal',
            fontSize: 15,
            lineHeight: 32,
            display: 'flex',
            textAlign: 'right',
            alignItems: 'center'

        },
        dialogStyle: {
            backgroundColor: '#0A2550',
            borderRadius: 20,
            width: '90%',
            // height: '100%',
            // opacity:0.5,
            zIndex: 0,
            resizeMode: 'cover',
            // position:'absolute',
            alignItems: 'center',
            justifyContent: 'center'
        },
        linearGradientBtn: {
            width: 120,
            height: 50,
            paddingHorizontal: 20,
            marginHorizontal: 10
        },

        dialogContent: {
            marginHorizontal: 10,
            marginVertical: '5%',
            zIndex: 1,
            backgroundColor: '#0A2550',
        },

        title: {
            fontSize: 24,
            marginBottom: 20,
            fontWeight: '900',
            textAlign: 'center',
        },
        details: {
            fontSize: 16,
            lineHeight: 20
        }
    }
)