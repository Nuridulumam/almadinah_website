import React from 'react';
import {
    FormControl,
    FormHelperText,
    FormLabel,
    Input, Textarea,
} from "@chakra-ui/react";

import { Select, AsyncSelect } from "chakra-react-select"

export const formInput = ({...props}) => {
    return (
        <FormControl {...props.style}>
            <FormLabel>{props.label}</FormLabel>
            <Input type={props.type} placeholder={props.placeholder} />
            {props.formHelperText && <FormHelperText>{props.formHelperText}</FormHelperText>}
        </FormControl>
    );
};

export const formTextArea = ({...props}) => {
    return (
        <FormControl {...props.style}>
            <FormLabel>{props.label}</FormLabel>
            <Textarea isInvalid={props.isInvalid} placeholder={props.placeholder} />
            {props.formHelperText && <FormHelperText>{props.formHelperText}</FormHelperText>}
        </FormControl>
    )
}

export const formSelect = ({...props}) => {
    return(
        <FormControl {...props.style}>
            <FormLabel>{props.label}</FormLabel>
            {props.isAsync ? (
                <AsyncSelect
                    options={props.options}
                    size={props.size}
                    isInvalid={props.isInvalid}
                    placeholder={props.placeholder}
                />
            ) : (
                <Select
                    options={props.options}
                    size={props.size}
                    isInvalid={props.isInvalid}
                    placeholder={props.placeholder}
                />
            )}
            {props.formHelperText && <FormHelperText>{props.formHelperText}</FormHelperText>}
        </FormControl>
    )
}