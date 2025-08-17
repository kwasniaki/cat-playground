import { operations } from '@/api';

export type OperationInputs<T extends keyof operations> = {
  [key in keyof operations[T] as key extends 'parameters' | 'requestBody'
    ? key
    : never]: operations[T][key];
};
