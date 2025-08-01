import React, { useState } from 'react';

export function Checkbox({ label, checked: checkedProp = false, onChange }) {
    const [checked, setChecked] = useState(checkedProp);

    const handleChange = (e) => {
        setChecked(e.target.checked);
        if (onChange) {
            onChange(e.target.checked);
        }
    };

    return (
        <label>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            {label}
        </label>
    );
}