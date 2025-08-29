# 快速开始

使用 Docker Compose 是启动 Foxel 最推荐的方式。

## 1. 创建数据目录
新建 `data` 文件夹用于持久化数据：

```bash
mkdir -p data/db
mkdir -p data/mount
chmod 777 data/db data/mount
```

## 2. 下载 Docker Compose 文件

```bash
curl -L -O https://github.com/DrizzleTime/Foxel/raw/main/compose.yaml
```

下载完成后，**强烈建议**修改 `compose.yaml` 文件中的环境变量以确保安全：

- 修改 `SECRET_KEY` 和 `TEMP_LINK_SECRET_KEY`：将默认的密钥替换为随机生成的强密钥

## 3. 启动服务

```bash
docker-compose up -d
```

## 4. 访问应用

服务启动后，在浏览器中打开页面。

> 首次启动，请根据引导页面完成管理员账号的初始化设置。