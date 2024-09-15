# Step 1: Use an official Node.js image as the base
FROM node:18-alpine AS builder

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json, then install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Step 4: Copy the rest of your project files
COPY . .

# Step 5: Build the app for production
RUN npm run build

# Step 6: Use a smaller image for serving the app
FROM node:18-alpine AS runner

# Step 7: Set working directory
WORKDIR /app

# Step 8: Copy the built files from the builder stage
COPY --from=builder /app/ .

# Step 9: Install only production dependencies
COPY package.json package-lock.json ./
RUN npm install --only=production

# Step 10: Expose port 3000
EXPOSE 3000

# Step 11: Run the Next.js app in production mode
CMD ["npm", "start"]
