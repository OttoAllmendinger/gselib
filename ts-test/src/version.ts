import { describe, it } from './minimocha';
import { versionArray, versionEqual, versionGreater, zip } from './gselib/version';

describe('version', function () {
  it('zip/versionArray', function () {
    log('zip("1.2.3", "1.2")=' + JSON.stringify(zip(versionArray('1.2.3'), versionArray('1.2'))));
  });

  it('versionEqual', function () {
    log('versionEqual("1.2.3", "1.2")=' + versionEqual('1.2.3', '1.2'));

    [
      ['1', '1', false],
      ['1', '1.0', false],
      ['1', '1.0.0', false],
      ['1.0', '1.0', false],
      ['1.2', '2.1', false],
      ['1.2.3', '2.1', false],
      ['2.1', '1.2', true],
      ['2.1.1', '1.2', true],
      ['1.2.1', '1.2.0', true],
      ['1.2.1', '1.2', true],
      ['1.2', '1.2.0', false],
      ['1.2', '1.2.1', false],
      ['3.32.2', '3.32', true],
      ['3.32', '3.32.2', false],
    ].forEach(([a, b, expected]) => {
      const actual = versionGreater(a, b);
      if (expected !== actual) {
        log(`ERROR: versionGreater("${a}", "${b}") is ${actual}, ` + `expected ${expected}`);
      }
    });
  });
});
