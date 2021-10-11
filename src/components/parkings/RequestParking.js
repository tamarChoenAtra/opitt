import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataBox from '../genericComponents/DataBox';
import AnimatedView from '../genericComponents/AnimatedView';
import Row from '../genericComponents/Row';

export default (props) => {
    const {
        visible,
        title,
        setRequestForParking,
        key1
    } = props;

    const [selectedItem, setSelectedItem] = useState(0);
    const setSelectedItemFunc = (value) => {
        setSelectedItem(value)
        setRequestForParking({ key: key1, value: value })
    }
    const [hoursList, setHoursList] = useState(
        Array(24)
            .fill("")
            .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
    )
    const returnTxt = (key) => {
        let txt = key
        if (key < 10)
            txt = `0${key}`
        return selectedItem == key ? `${txt} : 00` : `${txt}`
    }

    return (
        <>
            {visible &&
                <AnimatedView >
                    <Row>
                        <DataBox
                            title={title}
                            data={hoursList}
                            returnTxt={returnTxt}
                            width='80%'
                            selectedItem={selectedItem}
                            setSelectedItem={setSelectedItemFunc}
                        />
                    </Row>
                </AnimatedView>
            }
        </>
    )
}