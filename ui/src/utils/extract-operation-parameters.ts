import { operations } from '../api/generated/cat-playground-api';

export type OperationInputs<T extends keyof operations> = {
  [key in keyof operations[T] as key extends 'parameters' | 'requestBody'
    ? key
    : never]: operations[T][key];
};
