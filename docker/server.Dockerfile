FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY server/src ./src

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]