# Kickoffreact react及webpack入门
### 基于webpack的react开发环境搭建

### 总结
1. 学习了基于npm的包管理和开发环境搭建及npm scripts的使用
2. 学习了基于webpack的react开发环境搭建
3. 学习了webpack热替换插件的机制和在.babelrc中的配置

    ```javascript
    {
      "presets": ["react", "es2015"],
      "env": {
        "development": {
          "presets": ["react-hmre"]
        }
      }
    }
    ```
