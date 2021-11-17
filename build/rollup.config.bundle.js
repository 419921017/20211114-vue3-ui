import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
// import { getPackagesSync } from '@lerna/project';
import vue from 'rollup-plugin-vue';

// const inputs = getPackagesSync()
//   .map((pck) => pck.name)
//   .filter((name) => name.includes('@z-ui'));

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

export default {
  input: resolve('../packages/z-ui/index.ts'),
  output: { format: 'es', file: 'lib/index.esm.js' },
  plugins: [
    nodeResolve(),
    vue({ target: 'browser' }),
    typescript({
      tsconfigOverride: {
        exclude: ['node_modules', 'website'],
      },
    }),
  ],
  external(id) {
    return /^vue/.test(id);
  },
};
