import React from 'react';
import {
    View,
    StatusBar,
    StyleSheet
} from 'react-native';
import Logo from '../../assets/logo.svg';
import styles from '../../styles/Styles';
import Row from '../genericComponents/Row';
import Col from '../genericComponents/Col';

export default ({ headerRightElement }) => {
    return (
        <>
            <StatusBar
                animated={true}
            />
            <Row style={_styles.row}>
                <Col cols={1} style={_styles.leftCol}>
                    <Logo />
                </Col>
                <Col cols={1} style={_styles.rightCol}>
                    {headerRightElement}
                </Col>
            </Row>
            <View style={styles.headerBottomDivider}></View>
        </>
    )
}

const _styles = StyleSheet.create({
    row: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    rightCol: {
        alignItems: 'flex-end',
        margin: 2
    },
    leftCol: {
        margin: 2
    }
})
