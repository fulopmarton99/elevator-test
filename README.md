# Setting up and running the server

## Prerequisites

To run the servers, you will need ```node``` and ```npm``` installed.
The code in this repository was developed and tested using ```node v16.13.1``` and ```npm v8.1.2```. Exactly matching versions arent necessary, but for best results it is recommended to use ```node v14``` or newer to avoid warnings when installing some packages.

## Installing dependencies

To install the required dependencies you can run ```npm install``` either in the root of the repository, or in each of the child projects.

## Configuring the environment

If you are planning on running and accessing the website from different hosts, you will have to specify the address of the backend server. You can do this by setting the ```API_HOST``` environment variable to the address of the backend host. If the environment variable is not set, it will default to ```http://localhost:3030```.

*Note: The API_HOST should be a URL that is accesible by the client's browser, the default will only work if the api is running on the client's machine.*

## Starting the servers

### Starting the back and frontend separately

If you only want to start one of the servers, you will have to navigate to its directory and run the ```npm start``` command.

### Starting both servers with the same command

To start both servers, you will have to navigate to the root directory of the projects (directory containing both projects) and run the ```npm start``` command.

# API documentation
You can access the description of the backend api [here](./backend/README.md).

# Diagrams

You can find the diagrams [here](./diagrams/README.md).