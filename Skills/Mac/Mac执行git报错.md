Mac刚升级到最新版（macOS High Sierra 10.13.1），执行git命令，会报错：

``` shell
$ git
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```

### 解决方法

``` shell
$ xcode-select --install
```

会弹出一个界面，按照提示安装即可。
