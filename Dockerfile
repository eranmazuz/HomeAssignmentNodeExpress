FROM node:latest

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 5001 for the API
EXPOSE 5001

# Define the command to run the API
CMD ["npm", "start"]