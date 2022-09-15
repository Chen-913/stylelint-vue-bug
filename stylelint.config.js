module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    // 规范 css 属性的书写顺序
    'stylelint-config-recess-order',
    'stylelint-config-recommended-vue',
  ],
  overrides: [
    {
      // less 的语法解析器
      files: '**/*.less',
      customSyntax: 'postcss-less',
    },
  ],
  rules: {
    // 两个空格的缩进
    indentation: 2,
    'at-rule-no-unknown': [
      true,
      {
        // 解决 scss 中无法识别 @mixin 和 @include 语法的问题
        ignoreAtRules: ['mixin', 'extend', 'content', 'include'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
    // 允许使用 less 的 if 函数
    'function-no-unknown': [true, {
      ignoreFunctions: ['if'],
    }],
    // 设置 selector-class-pattern 允许做样式穿透
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)((-|__|--)[a-z0-9]+)*$',
      {
        resolveNestedSelectors: false,
      },
    ],
  },
};
