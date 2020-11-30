# module_federation
This is a basic example of module federation. Where 2 different apps behaves like both host and remote for each other.

App1 is a basic Flight's page app

App2 is a basic Hotel's page app

App1 provides App2 with its Navigation component and routes

App1 consumes the routes of App2

App2 provides App1 with its routes

App2 consumes the routes of App1 and the Navigation Component of App1

In order to setup locally

**Steps**
1. cd app1 in 1 terminal
2. cd app2 in 2nd terminal
3. In both terminals npm i (to install the dependencies)
4. npm run build in both terminals in order to make build
5. For both applications open 2 more terminals and run npm run serve in both app1 and app2 (This will start serving the app on port 3001 and 3002 respectively)
6. Open localhost and enjoy the future

**HAPPY CODING**
