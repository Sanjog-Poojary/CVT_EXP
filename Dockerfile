# Use the lightweight Node.js 20 Alpine Linux image as the base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files first to leverage Docker's layer caching
# This ensures that 'npm install' only runs when dependencies change
COPY package*.json ./

# Install only production dependencies for a smaller image size
RUN npm install --production

# Copy the rest of the application source code into the container
COPY . .

# Inform Docker that the container listens on the specified network port at runtime
EXPOSE 3000

# Specify the command to run the application
CMD ["node", "index.js"]
