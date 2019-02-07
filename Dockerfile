FROM node:10-alpine
LABEL maintainer="Mark Franciose (ekta)"

RUN mkdir /usr/app
WORKDIR /usr/app
COPY . /usr/app

ENV COOL_DUDE="mark"

RUN ls
RUN npm i
EXPOSE 1025

CMD ["node", "index.js"]
