import React, {Component} from 'react';
import {withFormik, Form, Field} from 'formik';

import './SearchForm.css';

class SearchForm extends Component {
    render() {
        const {isSubmitting, isValid} = this.props;
        console.log();
        return (
            <div className="SearchForm">
                <Form className="search-form">
                    <div className="search">
                        <label>
                            <Field name="query" id="query" type="text" />
                        </label>
                    </div>
                    <div className="search-button">
                        <button type="submit" disabled={!isValid || isSubmitting} className={isValid ? 'active' : ''}> Search </button>
                    </div>
                </Form>
            </div>
        )
    }
}

const validate = (values) => {
    let errors = {};
	if (!values.query) {
		errors.query = 'Required!'
	}
	return errors;
}

const FormikSearchForm = withFormik({
    mapPropsToValues(props) {
        return {
            query: ''
        }
    },
    validate,
    handleSubmit(values, {props, resetForm, setSubmitting}) {
		props.onQuerySubmit(values.query);
		resetForm();
		setSubmitting(false);
	}
})(SearchForm);

export default FormikSearchForm;