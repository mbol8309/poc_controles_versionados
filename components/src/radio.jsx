import React from 'react';

export const Radio = ({ name, value, checked, onChange, label, disabled }) => (
    <label style={{ display: 'inline-flex', alignItems: 'center', cursor: disabled ? 'not-allowed' : 'pointer' }}>
        <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            style={{ marginRight: 8 }}
        />
        {label}
    </label>
);