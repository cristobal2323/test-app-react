# pull official base image
FROM node:10.14.2

COPY ["./", "app/client"]
WORKDIR /app/client

RUN npm install
RUN npm rebuild node-sass

# start app
CMD ["npm", "start"]
#CMD ["tail", "-f","/dev/null" ]
