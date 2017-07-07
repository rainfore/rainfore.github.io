Ubuntu中Apache启动错误：AH00558：Could not reliably determine the server's fully qualified domain name

错误信息

AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 127.0.1.1. Set the 'ServerName' directive globally to suppress this message
解决方法

$ sudo vi /etc/apache2/apache2.conf
在文件里加上：

ServerName 127.0.0.1
http://blog.163.com/miracle_tan/blog/static/1632471052010330101935784/
 Ubuntu  Apache  错误  Linux
