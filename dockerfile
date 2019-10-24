# 指定使用最新版本的node基础镜像
FROM node:latest

# 在容器内创建/project目录
RUN mkdir -p /project

# 将容器内工作目录设置为/project
WORKDIR /project

# 将宿主机当前目录下内容复制到镜像/project目录下
COPY . /project

# 安装yarn 并安装依赖
RUN npm install yarn -g && yarn

# 对外开放容器的3000端口
EXPOSE 8080

# 容器启动后执行的命令。不可被docker run提供的参数覆盖
ENTRYPOINT ["npm", "run"]

# 在容器启动时，执行的命令，可被docker run提供的参数覆盖
CMD ["serve"]