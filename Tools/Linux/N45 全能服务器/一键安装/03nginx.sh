#! /bin/bash

date "+%Y年%m月%d日 周%w %H:%M:%S"
echo '开始安装 Nginx'
docker run -d -p 80:80 --name nginx \
--restart=always \
-v ~/nginx:/usr/share/nginx/html \
nginx:latest
sudo docker ps
echo 'Nginx 安装完成，请解压缩 nginx 文件至主目录'
echo '然后访问 https://127.0.0.1'
echo '或 https://服务器IP地址'
