import { describe, it } from './minimocha';
import { dump } from './gselib/dump';

describe('dump', function () {
  it('primitives', function () {
    print(dump('string'));
    print(dump(true));
    print(dump([1, 2, 3]));
    print(dump({ a: { aa: { aaa: 1, aab: 2 } }, b: 3 }));
  });

  it('objects', function () {
    const Obj = function (this: { x: number; y: null }) {
      this.x = 1;
      this.y = null;
    };
    const o = new Obj();
    print(dump(o, { all: true }));
    o.o = o;
    o.x = undefined;
    print(dump(o, { all: false }));
    print(dump(null));

    const prop = {
      get x() {
        return 1;
      },
      y: 1,
    };

    print(dump(prop));
  });
});
