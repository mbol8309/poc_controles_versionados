import { Checkbox } from './checkbox';
import { TextBox } from './textbox';
import { Number } from './number';

const Components = {
    Checkbox,
    TextBox,
    Number
};

// Este archivo define la exportación global que se insertará en window.Components
const version = process.env.VERSION || 'v1.0';

window.Components = window.Components || {};
window.Components[version] = Components