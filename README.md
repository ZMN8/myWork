# Gulp 构建利器
 - **package.json为nodejs的配置文件**，记录了插件的安装历史，可以利用命令提示符执行`cnpm init`初始化创建，如果把package.json配置文件从一个项目粘贴到另一个项目的根目录下，则可以通过`npm install 回车`根据配置文件的目录快速安装。
 - **gulpfile.js为gulp项目的配置文件**，文件名固定不可更改，位于项目根目录下。它可以用来定义gulp的task命令。
 - **"src"文件夹**是用来存放项目的生产文件夹，及开发文件。包括`html`、`less`、`js`、`images`。
 - **"dest"文件夹**是用来存放项目的发布文件，及最终达成效果的文件。包括`html`、`css`、`js(.min.js)`、`images`。

*******
#下面介绍一下Gulp的使用步骤：
###1. 安装nodejs
如果在安装时win7系统出现rolling back action的错误，可以直接安装`exe`文件，并下载[npm](http://nodejs.org/dist/npm/)（`包管理器`）文件，然后再高级系统设置>环境变量>PATH>添加nodejs的安装路径。

PS：a.`npm`可以用来安装`npm install <module name> -g`(全局安装)|`npm install <module name> --save-dev`(本地安装且会记录在package.json配置文件中)、更新`npm update <module name>`、删除`npm uninstall <module name>`、搜索`npm search <module name>`模块;如果要`删除模块`不要手动删除，用`命令删除`。

全局安装和本地安装的区别：

    全局安装gulp是为了执行gulp任务，本地安装gulp是为了调用gulp插件的功能；
    -g 全局安装将会安装在C:\Users\Administrator\AppData\Roaming\npm，并且写入系统环境变量,可以通过命令行在任何地方调用它
    --save-dev 局部安装将会安装在当前定位目录node_modules文件夹下，通过require()调用；
b.删除全部插件：借助rimraf插件 `npm install rimraf -g`，使用方法 `rimraf node_modules`;

c.更新全部插件：`npm update [--save-dev]`;

d.使用npm安装一些包失败了，可以使用npm国内镜像：

    1.通过config命令
    npm config set registry https://registry.npm.taobao.org 
    npm info underscore （如果上面配置正确这个命令会有字符串response）
    2.命令行指定
    npm --registry https://registry.npm.taobao.org info underscore 

e.运行>`cmd`>`node -v`：检查是否成功安装nodejs，若没有显示版本号则安装失败。

f.运行>`cmd`>`npm -v`：检查是否成功安装npm
g.常用命令:

      `cd`：定位目录
      `cd ..`：定位至上层目录
      `ctrl+c`：终止操作
      `mkdir 文件名`：创建文件夹

###2.新建package.json文件 
package.json文件是nodejs的配置文件，放在根目录下；使用手动添加文件，命令提示符执行`npm init`，即初始化的意思
![img](http://i1.buimg.com/567571/edc88d43b728465d.png)

###3. 全局安装gulp 

    npm install gulp -g
    gulp -v      //检查是否安装成功
###4. 本地安装gulp

    npm install gulp --save-dev
会记录在package.json文件中。
###4. 本地安装gulp插件

    npm install gulp-less --save-dev   //安装的是gulp-less插件，用于将less文件转换成css文件
    npm install gulp-uglify --save-dev  //压缩js文件
    npm install gulp-minify-css --save-dev  //压缩css文件
    npm install gulp-rename --save-dev       //重命名插件
    npm install gulp-load-plugins --save-dev   //自动加载插件，无需在gulpfile.js文件中用require()加载。

###5. 新建gulpfile.js文件
![img](http://i1.buimg.com/567571/b51ea5444cc54449.png)

###6. 运行gulp任务

    gulp less     //运行gulpfile.js中用“gulp.task()”定义的less任务
###7. 在webStrom中可视化运行gulp
将项目导入webstorm，右键gulpfile.js 选择”Show Gulp Tasks”打开Gulp窗口，若出现”No task found”，选择右键”Reload tasks”，双击运行即可。
![img](http://i1.buimg.com/567571/3d4261b3e724e56c.png)

##总结
- 安装nodejs 
- 新建package.json (npm init)
- 全局安装gulp和本地安装gulp
- 安装gulp插件
- 使用命令提示符运行gulp


 

