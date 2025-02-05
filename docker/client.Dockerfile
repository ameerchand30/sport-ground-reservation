# Contents of /sport-ground-reservation/sport-ground-reservation/docker/client.Dockerfile

FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY client/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY client/ ./

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]