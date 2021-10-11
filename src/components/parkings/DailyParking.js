import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Col from '../genericComponents/Col';
import DataBox from '../genericComponents/DataBox';
import Row from '../genericComponents/Row';

function DailyParking(props) {
    const { t } = useTranslation();
    const txt = 'dailyParking'.toString();
    const data = [
        {
            kindList: 'daysList',
            title: 'title1'
        },
        // {
        //     kindList: 'daysList',
        //     title: 'title2'
        // },
        {
            kindList: 'hoursList',
            title: 'title3'
        },
        {
            kindList: 'hoursList',
            title: 'title4'
        },
    ]

    const returnTxt = (key) => {
        let txt = key
        if (key < 10)
            txt = `0${key}`
        return txt
        // return selectedItem == key ? `${txt} : 00` : `${txt}`
    }

    return (
        <>
            <Row>
                {
                    data.map(item =>
                        <Col cols={2}>
                            <DataBox
                                title={t(`${txt}.${item.title}`)}
                                kindList={item.kindList}
                                returnTxt={returnTxt}
                                width='100%'
                            // selectedItem={selectedItem}
                            // setSelectedItem={setSelectedItem}
                            />
                        </Col>
                    )
                }


            </Row>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,

})

const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(DailyParking);