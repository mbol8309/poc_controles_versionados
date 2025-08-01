import React from 'react';

export const TextBox = ({ value, onChange, placeholder, ...props }) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
        style={{ padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
    />
);
