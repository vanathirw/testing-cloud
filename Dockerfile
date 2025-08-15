
FROM node:20-alpine


# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install only production dependencies for smaller image
RUN npm install --only=production

# Copy rest of the source code
COPY . .

# Expose the port (same as in server.js / index.js)
EXPOSE 3005

# Command to run the app
CMD ["node", "index.js"]
