import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import { getPackagesSync } from '@lerna/project';
import vue from 'rollup-plugin-vue';

const inputs = getPackagesSync()
  .map((pck) => pck.name)
  .filter((name) => name.includes('@z-ui'));

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

export default inputs.map((name) => {
  const pkgName = name.split('@z-ui/')[1];

  return {
    input: resolve(`../packages/${pkgName}/index.ts`),
    output: { format: 'es', file: `lib/${pkgName}/index.js` },
    plugins: [
      nodeResolve(),
      vue({ target: 'browser' }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            // 打包单个组件的时候不生成ts声明文件
            declaration: false,
          },
          exclude: ['node_modules', 'website'],
        },
      }),
    ],
    external(id) {
      return /^vue/.test(id) || /^@z-ui/.test(id);
    },
  };
});
