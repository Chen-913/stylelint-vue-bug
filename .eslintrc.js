module.exports = {
  root: true,
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
  /**
   * 运行环境 http://eslint.cn/docs/user-guide/configuring#specifying-environments
   */
  env: {
    browser: true,
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true, // 开启 setup 语法糖环境,解决 defineProps is not defined
  },
  /**
   * 规则继承 http://eslint.cn/docs/user-guide/configuring#extending-configuration-files
   */
  extends: [
    'plugin:vue/vue3-essential', // 导入 Vue3 规则
    'plugin:vue/recommended',
    'plugin:import/recommended', // 解决 import 引入找不到的问题
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base', // 使用 Airbnb 的代码规范
  ],
  parser: 'vue-eslint-parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    // 配置@别名后，需要在这里加上 eslint 的解析，不然会报错，eslint 无法解析加了@的路径
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
      },
      typescript: {
        alwaysTryTypes: true, // 总是尝试在' @types '目录下解析类型，即使它不包含任何源代码，比如' @types/unist '
        // use <root>/path/to/folder/tsconfig.json
        // project: './tsconfig.json',
      },
    },
  },
  /**
   * 解析器配置项 http://eslint.cn/docs/user-guide/configuring#specifying-parser-options
   */
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020, // 初始是6，解决Parsing error: The keyword 'import' is reserved
    sourceType: 'module', // 指定JS代码来源的类型，script(script标签引入) | module（es6的module模块）
    ecmaFeatures: { // Features是特征的意思，这里用于指定要使用其他那些语言对象
      modules: true,
    },
    requireConfigFile: false,
    // parser: '@babel/eslint-parser', // 打开这个会报错，暂时没找到原因
  },
  /**
   * 插件 http://eslint.cn/docs/user-guide/configuring#configuring-plugins
   */
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  /**
   * 自定义规则 http://eslint.cn/docs/user-guide/configuring#configuring-rules
   */
  rules: {
    // 部分 from 子句不是标准的 ES6 语法，例如路径别名、虚拟模块等, ts 编译器本身就会检查这些 from 子句并给出提示，这里关闭 eslint 检查
    'import/no-unresolved': 'off',
    'vue/multi-word-component-names': 0, // 允许组件名为一个单词。如果有条件，最好是把这个规则去除，避免与原来的 Html 的标签混用
    // 组件中允许多根标签
    'vue/no-multiple-template-root': 0,
    'max-len': ['error', { code: 300 }],
    'no-var': 'error', // 禁止使用 var
    // indent: ['error', 2], // 缩进2格
    'no-mixed-spaces-and-tabs': 'error', // 不能空格与tab混用
    quotes: [2, 'single'], // 使用单引号
    'no-empty-function': 'error', // 禁止出现空函数，有意而为之的可以在函数内部加条注释
    'no-multi-spaces': 'error', // 禁止出现多个空格，如===前后可以有一个空格，但是不能有多个空格
    'no-param-reassign': 'off', // 可以对函数的形参进行修改
    'vue/comment-directive': 'off', // html文件最后一行报错
    'import/prefer-default-export': 0, // 在导出为一个对象时，可以使用 export，而不是强制使用默认导出
    '@typescript-eslint/no-var-requires': 'off', // 允许使用 require 导入模块
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    // 暂时允许使用 any 类型
    '@typescript-eslint/no-explicit-any': 'off',
    // 官方推荐vue2需要开启此规则，vue3不需要
    'vue/no-v-model-argument': 'off',
    // 允许非空断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 生产环境下可以使用debugger调试
    'no-debugger': 'off',
    // 允许使用自增运算符
    'no-plusplus': 'off',
  },
};
