import * as dotenv from 'dotenv';
dotenv.config();

export class ReflectClass {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return `Class name is ${this.name}`;
  }
}

export default function createReflectClass(): ReflectClass {
  const className = process.env.CLASS_NAME;

  if (!className) {
    throw new Error('.env CLASS_NAME is missing');
  }

  const instance = Reflect.construct(ReflectClass, [className]);
  return instance;
}
