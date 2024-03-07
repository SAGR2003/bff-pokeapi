# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the app for production
RUN npm run build

# Use a lightweight Node.js runtime for the final image
FROM node:14-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Install serve to serve the application
RUN npm install -g serve

# Copy the build directory from the previous stage
COPY --from=0 /app/build .

# Expose port 5000 for the application
EXPOSE 5000

# Start the application
CMD ["serve", "-s", ".", "-l", "5000"]