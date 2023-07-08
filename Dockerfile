# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:lts

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package*.json yarn.lock ./

# Install project dependencies using yarn
RUN yarn install --frozen-lockfile

# Copy all files from your local project directory to the working directory in the container
COPY . .

# Build your React app for production using Vite (modify this if you have different build requirements)
RUN yarn build

# Expose port 5173 (adjust if your application uses a different port)
EXPOSE 5000

# Define how to start your application when a container is created from this image 
CMD ["yarn", "run", "dev"]