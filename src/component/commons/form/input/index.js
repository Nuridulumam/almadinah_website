import React from 'react';
import {
    FormControl,
    FormHelperText,
    FormLabel,
    Input, Textarea,
} from "@chakra-ui/react";

import {Select, AsyncSelect} from "chakra-react-select"
import axios from "axios";
import {API_URL} from "../../../../utils";

export const formInput = ({field, form: {touched, errors}, ...props}) => {
    return (
        <FormControl {...props.style}>
            <FormLabel>{props.label}</FormLabel>
            <Input {...field} {...props} />
            {touched[field.name] && errors[field.name] && <FormHelperText>{errors[field.name]}</FormHelperText>}
        </FormControl>
    );
};

export const formTextArea = ({field, form: {touched, errors}, ...props}) => {
    return (
        <FormControl {...props.style}>
            <FormLabel>{props.label}</FormLabel>
            <Textarea {...field} {...props} />
            {touched[field.name] && errors[field.name] && <FormHelperText>{errors[field.name]}</FormHelperText>}
        </FormControl>
    )
}

export const formSelect = ({field, form, ...props}) => {
    const {name} = field;
    const {touched, errors} = form;
    const handleChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : null;
        form.setFieldValue(name, selectedValue);
    };
    const handleBlur = () => {
        form.setFieldTouched(name, true);
    };
    return (
        <FormControl {...props.style}>
            <FormLabel>{props.label}</FormLabel>
            <Select
                {...props}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched[name] && errors[name] && <FormHelperText>{errors[name]}</FormHelperText>}
        </FormControl>
    )
}

export const formAsyncSelect = ({field, form, selected, ...props}) => {
    const {name} = field;
    const {selectedProv, selectedCity, selectedDistrict} = props;
    const {setFieldValue, setFieldTouched, touched, errors} = form;
    let callAPI = null, responseJSON;

    const handleInputChange = (inputValue, {action}) => {
        if (action === 'clear') {
            setFieldValue(name, null);
        }
        return inputValue;
    };

    const handleSelectChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : null;
        setFieldValue(name, selectedValue);
        if (selected) selected(selectedValue)
    };

    const handleBlur = () => {
        setFieldTouched(name, true);
    };

    const loadOptions = (inputValue, callback) => {
        clearTimeout(callAPI)
        let codeType;
        switch (name) {
            case 'city':
                codeType = selectedProv;
                break;
            case 'district':
                codeType = selectedCity;
                break;
            case 'subDistrict':
                codeType = selectedDistrict;
                break;
            default:
                break;
        }
        
    callAPI = setTimeout(async () => {
        const response = await axios.get(`${API_URL}/locations/${name}`, {
            params: {
                page: 1,
                length: 10,
                search: inputValue,
                code: codeType,
            }
        });
        switch (name) {
            case 'province':
                responseJSON = await response.data.province;
                break;
            case 'city':
                responseJSON = await response.data.city;
                break;
            case 'district':
                responseJSON = await response.data.district;
                break;
            case 'subDistrict':
                responseJSON = await response.data.subDistrict;
                break;
            default:
                break;
        }
        

        const options = responseJSON.map((item) => ({
            value: item.code,
            label: item.name,
        }));

        callback(options);
    }, 500);
};

return (
    <FormControl {...props.style}>
        <FormLabel>{props.label}</FormLabel>
        <AsyncSelect
            {...props}
            name={name}
            loadOptions={loadOptions}
            onInputChange={handleInputChange}
            onChange={handleSelectChange}
            onBlur={handleBlur}
        />
        {touched[name] && errors[name] && (
            <div>{errors[name]}</div>
        )}
    </FormControl>
);
}
;

