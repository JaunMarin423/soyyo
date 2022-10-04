FROM oraclelinux:7-slim

RUN yum -y install oracle-release-el7 oracle-nodejs-release-el7 && \
yum-config-manager --disable ol7_developer_EPEL && \
yum -y install oracle-instantclient19.3-basiclite nodejs && \
rm -rf /var/cache/yum

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/index

COPY package*.json ./
COPY node_modules/ /node_modules
ADD dist service
EXPOSE $PORT
CMD ["node", "service/main"]
