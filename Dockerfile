# Use official Node.js minimal image
FROM registry.access.redhat.com/ubi8/nodejs-20:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the rest of the application files
COPY . .

# Expose port (Change if needed)
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
