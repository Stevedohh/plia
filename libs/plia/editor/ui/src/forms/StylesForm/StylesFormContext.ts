import { createContext } from 'solid-js';

export const StylesFormContext = createContext({
  formData: null,
  setFormData: null,
  updateStructure: null,
});
