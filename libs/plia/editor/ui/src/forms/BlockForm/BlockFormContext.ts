import { createContext } from 'solid-js';

export const BlockFormContext = createContext({
  formData: null,
  setFormData: null,
  updateStructure: null,
});
