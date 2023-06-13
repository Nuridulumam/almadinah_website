import React from 'react';
import {
    FormControl,
    FormHelperText,
    FormLabel,
    Input, Textarea,
} from "@chakra-ui/react";

import { Select, AsyncSelect } from "chakra-react-select"

export const formInput = ({field, form: { touched, errors }, ...props}) => {
    return (
        <FormControl {...props.style}>
            <FormLabel>{props.label}</FormLabel>
            <Input {...field} {...props} />
            {touched[field.name] && errors[field.name] && <FormHelperText>{errors[field.name]}</FormHelperText>}
        </FormControl>
    );
};

export const formTextArea = ({field, form: { touched, errors }, ...props}) => {
    return (
        <FormControl {...props.style}>
            <FormLabel>{props.label}</FormLabel>
            <Textarea {...field} {...props} />
            {touched[field.name] && errors[field.name] && <FormHelperText>{errors[field.name]}</FormHelperText>}
        </FormControl>
    )
}

export const formSelect = ({field, form, ...props}) => {
    const { name } = field;
    const { touched, errors } = form;
    const handleChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : null;
        form.setFieldValue(name, selectedValue);
    };
    const handleBlur = () => {
        form.setFieldTouched(name, true);
    };
    return(
        <FormControl {...props.style}>
            <FormLabel>{props.label}</FormLabel>
            {props.isAsync ? (
                <AsyncSelect
                    {...props}
                    name={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            ) : (
                <Select
                    {...props}
                    name={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            )}
            {touched[name] && errors[name] && <FormHelperText>{errors[name]}</FormHelperText>}
        </FormControl>
    )
}
