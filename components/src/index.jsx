import { Checkbox } from './checkbox';
import { TextBox } from './textbox';

const Components = {
  Checkbox,
  TextBox,
};

// Este archivo define la exportación global que se insertará en window.Components
const version = process.env.VERSION || 'v1.0';

window.Components = window.Components || {};
window.Components[version] = Components