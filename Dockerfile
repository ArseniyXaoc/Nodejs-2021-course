FROM node:14-alpine

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
EXPOSE 4000
CMD ["npm", "run", "dev"]
