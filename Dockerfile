FROM node:latest
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 4455
CMD ["npm", "start"]