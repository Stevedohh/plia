export type Id = string | number

export type Structure = {
  id: Id;
  component: string;
  children?: Structure[];
  props?: unknown;
};
