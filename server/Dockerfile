# pull official base image
FROM node:10.14.2

# set working directory
COPY ["./", "app/server"]

WORKDIR /app/server

RUN npm install
RUN npm install -g nodemon

CMD ["npm", "start"]