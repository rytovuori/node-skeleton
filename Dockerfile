FROM node:alpine

# Create and copy files to distribution directory
RUN mkdir dist
ADD src /dist/src
COPY package.json /dist

# Make distribution directory working directory
WORKDIR dist

# Install dependencies
RUN npm install

# Start server
CMD ["npm", "start"]

# Expose container port 80
EXPOSE 80