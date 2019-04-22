// @flow
import React from 'react';
import {Field} from 'redux-form';

import DefaultFieldContainer from '../DefaultFieldContainer';
import SimpleInput from '../../../elements/SimpleInput';

import {validateEmail} from '../../../../utils/validators';

import commonStyles from '../../../../assets/styles/common.module.scss';


const EmailFieldContainer = () => (
    <DefaultFieldContainer>
        <Field component={SimpleInput}
               name="email"
               placeholder="Email"
               className={commonStyles.full_width}
               validate={[validateEmail]}
        />
    </DefaultFieldContainer>
);

export default EmailFieldContainer;
