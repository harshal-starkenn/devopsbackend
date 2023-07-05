#use an official node image runtime as base image
FROM node:16

#Set the working directory in the container
WORKDIR /cloudl-server

#Copy package.json & package.json to WORKDIR
COPY package.json ./

#Install dependencies
RUN npm install 

#Copy app code to WORKDIR
COPY . .

#Expose port on which your express app runs
EXPOSE 9001

#Set Environment variables
ENV MONGODB_URL=mongodb://host.docker.internal:27017
ENV PORT=9001
ENV DATABASE=harshal

#Start Application
CMD ["npm","start"]