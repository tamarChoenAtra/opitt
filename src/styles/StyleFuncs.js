import React from 'react';
import { dark } from './SystemColor';
import { Bold } from './SystemFonts';

class StyleFuncs {

    returnDarkBtnStyle(width, height) {
        return {
            backgroundColor: dark,
            height: height ? height : 70,
            width: width ? width : '95%',
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
        }
    }

}

export default new StyleFuncs();