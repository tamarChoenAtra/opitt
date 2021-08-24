import React, { useState } from 'react';
import UnableToOpenGateDialog from '../dialog/ UnableToOpenGate.dialog';
import GateOpenSuccessDialog from '../dialog/GateOpenSuccess.dialog';
import DeleteParkingDialog from '../dialog/DeleteParking.dialog';

export default () => {

    const [visible, setVisible] = useState(true);

    return (
        <>
            {/* <UnableToOpenGateDialog
                visible={visible}
                setVisible={setVisible}
            /> */}
            <GateOpenSuccessDialog
                visible={visible}
                setVisible={setVisible}
            />
            {/* <DeleteParkingDialog
                visible={visible}
                setVisible={setVisible}
            /> */}
        </>
    )
}