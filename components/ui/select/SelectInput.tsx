'use client';

import Select, { type SingleValue } from 'react-select';
import './SelectInput.css';
export interface SelectOption {
    value: string;
    label: string;
}

interface SelectInputProps {
    id: string;
    label: string;
    value: SelectOption | null;
    options: SelectOption[];
    onChange: (value: SingleValue<SelectOption>) => void;
    error?: string;
    isClearable?: boolean;
    placeholder?: string;
}

const SelectInput = ({ id, label, value, options, onChange, error,
    isClearable = true, placeholder = 'Select an option...' }: SelectInputProps) => {

    const errorId = `${id}-error`;

    return (
        <div className="mt-2 w-full">
            <label
                htmlFor={id}
                className={`select-input-label ${error ? 'has-error' : ''}`}
            >
                {label}
            </label>

            <Select<SelectOption, false>
                inputId={id}
                options={options}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                isClearable={isClearable}
                className={`select-container ${error ? 'has-error' : ''}`}
                classNamePrefix="select"
            />

            {error && (
                <p
                    id={errorId}
                    className="select-input-error"
                    role="alert"
                >
                    {error}
                </p>
            )}
        </div>
    );
}