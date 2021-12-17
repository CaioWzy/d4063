FROM node:12
WORKDIR /var/www/d4063
COPY . .

EXPOSE 8080

RUN npm install

ENTRYPOINT ["npm", "start"]