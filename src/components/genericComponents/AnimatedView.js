import React, { useEffect, useRef } from 'react';
import {
    Animated
} from 'react-native';

export default (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 700,
            }
        ).start();
    }, [fadeAnim])
    return (
        <>
            <Animated.View
                style={{
                    ...props.style,
                    opacity: fadeAnim,
                }}
            >
                {props.children}
            </Animated.View>
        </>
    )

}