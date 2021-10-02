import React from 'react';
import { connect } from 'react-redux';
import DeleteCarDialog from '../dialog/DeleteCar.dialog';
import { Text, View } from 'react-native'
function ParkingForNewGuest(props) {
    const {
        guestsList
    } = props;

    return (
        <>
            <DeleteCarDialog
                visible={true}
            />
            <View style={{ width: 100, height: 100, backgroundColor: 'red' }}><Text>xnvjd</Text></View>
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
    guestsList: state.guests.guestsList
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ParkingForNewGuest);