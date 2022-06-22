module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/script-setup-uses-vars': 'error', // This rule is not needed when using vue-eslint-parser v9.0.0 or later.
    'vue/multi-word-component-names': 0, //关闭vue文件和组件命名校验
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-types': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        printWidth: 80, //代码单行长度
        tabWidth: 2, //tab键缩进为2空格
        useTabs: false, //使用空格缩进
        singleQuote: true, //js单引号
        semi: false, //去分号
        trailingComma: 'es5', //尾随逗号
        arrowParens: 'avoid', //箭头函数尽可能省略括号
        jsxBracketSameLine: true, //标签换行后>单独一行
        endOfLine: 'auto',
      },
    ],
  },
}
