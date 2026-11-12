
'use client';

import type { ChangeEvent } from 'react';

export interface TextInputProps {
    id?: string;
    name?: string;
    value?: string;
    autoComplete?: string;
    onChange?: (value: string) => void;
    label?: string;
    type?: string;
    hasError?: boolean;
    error?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
}

export default function TextInput({
    id,
    name,
    value,
    autoComplete = 'off',
    onChange,
    label = '',
    type = 'text',
    hasError = false,
    error,
    placeholder,
    required = false,
    disabled = false,
    className = ' w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:opacity-60',
}: TextInputProps) {
    const invalid = hasError || Boolean(error);

    const fieldClassName = [
        'input-field',
        invalid ? 'input-field-error' : 'input-field-default',
        className,
    ].filter(Boolean).join(' ');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className="w-full space-y-1.5">
            {label && (
                <label
                    htmlFor={id}
                    className={`block text-sm font-medium ${invalid ? 'text-red-600' : 'text-slate-700'
                        }`}
                >
                    {label}
                    {required && (
                        <span className="ml-1 text-red-500" aria-hidden="true">
                            *
                        </span>
                    )}
                </label>
            )}

            <input
                id={id}
                name={name ?? id}
                type={type}
                autoComplete={autoComplete}
                value={value ?? ''}
                onChange={handleChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                aria-invalid={invalid}
                aria-describedby={error && id ? `${id}-error` : undefined}
                className={fieldClassName}
            />

            {error && (
                <p
                    id={id ? `${id}-error` : undefined}
                    role="alert"
                    className="text-sm text-red-600"
                >
                    {error}
                </p>
            )}
        </div>
    );
}
