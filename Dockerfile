FROM node:latest

RUN apt update && \
    apt install -y yarn && \
    yarn global add create-react-app

EXPOSE 3000

WORKDIR /app
