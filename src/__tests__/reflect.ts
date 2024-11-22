import createDynamicClass from '../reflect';

import * as dotenv from 'dotenv';
dotenv.config();

describe('Reflect Class Creation', () => {
  it('should create a class with the name defined in the environment variable', () => {
    const reflectClass = createDynamicClass();

    expect(reflectClass.name).toBe(process.env.CLASS_NAME);
    expect(reflectClass.getName()).toBe(
      `Class name is ${process.env.CLASS_NAME}`
    );
  });

  it('should throw an error if CLASS_NAME is not set', () => {
    delete process.env.CLASS_NAME;

    expect(() => createDynamicClass()).toThrowError(
      new Error('.env CLASS_NAME is missing')
    );
  });
});
