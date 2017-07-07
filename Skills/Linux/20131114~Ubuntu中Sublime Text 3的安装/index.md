Ubuntu中Sublime Text 3的安装

1. 安装

$ sudo add-apt-repository ppa:webupd8team/sublime-text-3
$ sudo apt-get update
$ sudo apt-get install sublime-text-installer
2. 中文输入

(1) 安装gtk开发包

$ sudo apt-get install build-essential libgtk2.0-dev
(2) 下载sublime_imfix.c文件

(3) 编译文件

按照文件头上的注释所说的编译该文件，在终端里进入到文件当前目录中，输入如下命令：

$ sudo gcc -shared -o libsublime_imfix.so sublime_imfix.c `pkg-config --libs --cflags gtk+-2.0` -fPIC
得到libsublime_imfix.so这个共享库。

(4) 启动程序

在终端中输入：

LD_PRELOAD=./libsublime_imfix.so subl
启动Sublime Text后如果能用中文输入那就成功了。

3. 设置快速启动项

上一步最后每次启动时都要输入LD_PRELOAD太不方便了，这里提供修改命令行启动项和菜单启动项，方便快速打开Sublime Text。

(1) 设置命令行的快速启动项

修改文件/usr/bin/subl的内容。

$ sudo vi /usr/bin/subl
将

#!/bin/sh
exec /opt/sublime_text/sublime_text "$@"
修改为

#!/bin/sh
LD_PRELOAD=/opt/sublime_text/libsublime_imfix.so exec /opt/sublime_text/sublime_text "$@"
(2) 设置菜单的快速启动项

修改sublime_text.desktop文件。

$ sudo vi /usr/share/applications/sublime_text.desktop
将[Desktop Entry]中的

Exec=/opt/sublime_text/sublime_text %F
修改为

Exec=/usr/bin/subl %F
将[Desktop Action Window]中的

Exec=/opt/sublime_text/sublime_text -n
修改为

Exec=/usr/bin/subl -n
将[Desktop Action Document]中的

Exec=/opt/sublime_text/sublime_text --command new_file
修改为

Exec=/usr/bin/subl --command new_file
这样，通过快捷方式打开的Sublime Text 3也可以支持中文输入了。

http://my.oschina.net/daleyjh/blog/151457
 Ubuntu  Sublime Text  Linux
