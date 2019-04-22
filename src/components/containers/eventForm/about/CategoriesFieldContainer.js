// @flow
import React from 'react';
import {connect} from 'react-redux';
import {Field} from 'redux-form';

import DefaultFieldContainer from '../DefaultFieldContainer';
import DropdownInput from '../../../elements/DropdownInput';

import commonStyles from '../../../../assets/styles/common.module.scss';

import type {CategoryState, CommonState} from '../../../../constants/flowStatesTypes';

type Props = {
    categories: Array<CategoryState>
}

const CategoriesFieldContainer = (props: Props) => {
    const {categories} = props;
    const options = categories.map(category => ({
        value: category.id,
        label: category.name
    }));

    return (
        <DefaultFieldContainer className="top">
            <Field component={DropdownInput}
                   name="category_id"
                   options={options}
                   placeholder="Select category"
                   className={commonStyles.short_width}
                   message="Describes topic and people who should be interested in this event"
            />
        </DefaultFieldContainer>
    );
};


const mapStateToProps = (state: CommonState) => ({
    categories: state.categories
});

export default connect(mapStateToProps)(CategoriesFieldContainer);
