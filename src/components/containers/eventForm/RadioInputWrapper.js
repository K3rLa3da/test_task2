// @flow
import React, {Fragment} from 'react';
import {Field} from 'redux-form';

import FieldLabel from '../../elements/FieldLabel';

type Props = {
    label?: Object,
    inputs: Array<Object>,
}

const RadioInputWrapper = (props: Props) => {
    const {label, inputs} = props;

    const generateCheckBoxes = () => (
        inputs.map(input => (
            <div key={input.value}>
                <label>
                    <Field {...input}
                           component="input"
                           type="radio"
                    />
                    {input.label}
                </label>
            </div>
        ))
    );

    return (
        <Fragment>
            {label && <FieldLabel {...label}/>}
            {generateCheckBoxes()}
        </Fragment>
    );
};


export default RadioInputWrapper;
