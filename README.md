element-ui 组件二次封装
主要针对 回到顶部组件，登录组件

项目准备工作：
1. vue create ele-components  // 创建项目
2. 将项目中不需要的多余的组件删除
3. 安装 elem: cnpm i -S element-ui
4. npm run serve 启动项目

正式操作 elem
1. 进入 main.js 引入 element-ui。(写个按钮验证一下是否引入成功)





回到顶部组件
1. 在 views 下新建两个文件：BackTopOne.vue/BackTopTwo.vue
2. 在 router 里的 index.js 中加上 上面那两个文件的路径
3. 在 Home.vue 文件中添加2个按钮

全部准备工作做完了，现在正式编写全局的回到顶部组件
1. 在 components 里面添加 backTop 组件

回到顶部组件的要求：
1. 页面内容必须超过屏幕高度
2. 所有内容必须在一个容器里面，并且这个容器需要撑满整个页面
    小技巧： .pages-content-scroll { // 作为最外面一层 必须撑满整个屏幕
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                overflow-x: hidden;
            }

3. 在 backTop.vue 里面编写这个组件
    让全部页面具有回到顶部的效果： 在 backTop.vue 注入 slot 插槽(而这个slot 就是代表 app.vue 里面的router-view)
4. src 下添加 globalComponents 文件夹，并在里面的 index.js 注册全局组件
5. 在 main.js 中引入 globalComponents
6. 在 App.vue 引用 back-top 组件





账号密码登录组件封装
1. views 下添加 Login.vue, router 下添加对应路径
2. main.js 中注册这个组件
3. components 下添加 accountLogin.vue 并开始在这个文件中编写账号密码登录组件