import * as GObject from '@imports/GObject-2.0';

export type Constructor<T> = new (...args: any[]) => T;

// eslint-disable-next-line @typescript-eslint/ban-types
export function registerClass<C>(meta: any, cls: Function): { new (): C } {
  return GObject.registerClass(meta, cls) as { new (): C };
}

export function extendGObject<A, B>(cls: Constructor<A>, parent: Constructor<B>): Constructor<A & B> {
  return registerClass<A & B>(
    {
      Name: cls.name,
      GTypeName: cls.name,
      Extends: parent,
    },
    cls,
  );
}
