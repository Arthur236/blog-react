import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    constructor(props) {
        super(props);

        this.renderField = this.renderField.bind(this);
    }

    renderField(field) {
        const { meta } = field;
        const className = `form-group ${ meta.touched && meta.error ? 'has-danger' : '' }`;

        return(
            <div className={className}>
                <label>{ field.label }</label>
                <input type="text"
                       className="form-control"
                       { ...field.input } />

                {/* Display errors only if the field has been touched by the user */}
                <div className="text-help">
                    { meta.touched ? meta.error : '' }
                </div>
            </div>
        );
    }

    onSubmit(values) {

    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h3>New Post</h3>

                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderField}/>
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField}/>
                    <Field
                        label="Content"
                        name="content"
                        component={this.renderField}/>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    // Validate inputs from 'values' object
    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = "Enter a category";
    }
    if (!values.content) {
        errors.content = "Enter some content";
    }

    // If errors is empty, the form can be submitted
    // If errors has any properties, redux-form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);
