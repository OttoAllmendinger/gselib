import { target } from '../rollup/rollup.base';

const targetTests = target({
  input: 'src/index.ts',
  output: {
    file: 'dist/test.js',
    name: 'init',
    exports: 'default',
  },
});

export default [targetTests];
