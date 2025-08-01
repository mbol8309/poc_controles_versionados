import React from 'react';

export const Number = ({ value, onChange, min, max, step, ...props }) => (
    <input
        type="number"
        value={value ?? 0}
        onChange={e => onChange && onChange(Number(e.target.value))}
        min={min ?? 0}
        max={max ?? 100}
        step={step}
        {...props}
    />
);
