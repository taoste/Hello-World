#! /bin/bash

date "+%Y年%m月%d日 周%w %H:%M:%S"
echo '为 Docker 更换官方国内源加速下载'
cat > /etc/docker/daemon.json << EOF
{
 "registry-mirrors": ["https://registry.docker-cn.com"]
}
EOF
service docker restart
docker info|grep "Registry Mirrors" -A 1
echo '显示 registry.docker-cn.com 即换源成功'
sleep 3

echo '开始安装 Portainer'
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9443:9443 --name portainer \
--restart=always \
-v /var/run/docker.sock:/var/run/docker.sock \
-v portainer_data:/data \
portainer/portainer-ce:latest
sudo docker ps
echo 'Portainer 安装完成，请检查是否出现 portainer/portainer-ce:latest 字样'
echo 'Web页面访问 https://127.0.0.1:9443/'
echo '或 https://服务器IP地址:9443/'
