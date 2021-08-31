import React from 'react';
import Col from '../genericComponents/Col';
import Row from '../genericComponents/Row';
import {
    View,
    Text
} from 'react-native';

export default () => {
    return (
        <>
            <View style={{ height: 100, width: '100%', backgroundColor: 'red' }}>
                <Row>
                    <Col cols={1}>
                        <Row style={{ backgroundColor: "red" }}>
                            <Text>sdnj</Text>
                        </Row>
                        <Row style={{ backgroundColor: "orange" }}>
                            <Text>sdnj</Text>
                        </Row>
                    </Col>
                    <Col cols={1}>
                        <Row style={{ backgroundColor: "yellow" }}>
                            <Text>sdnj</Text>
                        </Row>
                        <Row style={{ backgroundColor: "green" }}>
                            <Text>sdnj</Text>
                        </Row>
                    </Col>
                    <Col cols={1}>
                        <Row style={{ backgroundColor: "lightblue" }}>
                            <Text>sdnj</Text>
                        </Row>
                        <Row style={{ backgroundColor: "blue" }}>
                            <Text>sdnj</Text>
                        </Row>
                        <Row style={{ backgroundColor: "purple" }}>
                            <Text>sdnj</Text>
                        </Row>
                    </Col>
                </Row>
            </View>
        </>
    )
}