FROM node:4.4.4

ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install -g npm && \
    npm config set progress false && \
    npm install -g nodemon

WORKDIR /opt/app

CMD ["nodemon", "index.js"]
