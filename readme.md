Hello.
Setup+Installation Guide:
Clone repo on your system from Github.
There are 2 folders for BE and FE respectively.
The Mongo DB has been hosted online so you dont need to setup that on your local machine. The credentials have been directly added in code.

Setup of BE:
after opening root folder, open a terminal pointing to the root folder.
Run the following commands:
1) cd ./Backend
2) npm i

Now after this is done, you can start the backend server with the command: "node index.js"

After starting Backend, lets move to frontend. Now for installation, again create a new seperate terminal pointing to the root folder. 
Run the following commands:
1) cd ./frontendreact/
2) npm i

Now after this is done, you can start the frontend using the following command:
"npm run start"

Please Note: 
1) Run Frontend only after Backend code is up and running.
2) The getting live stock price api had a free plan with limited number of requests to the api. So after sometime it may stop working if the cron works for too long.
refer: https://rapidapi.com/sparior/api/yahoo-finance15/pricing

for rate limiting.

Alternate Api Key:
b9fcfc9b22msh3966c94e27f273ap1bba4fjsn50e0156785ba
please replace this in Backend nodejs code line 12 as key.

Path:
./Backend/cron/updatePriceInDb.js

PS: The desiging of Frontend is not given focus as it can be subjective. To see my Frontend work in more details, can discuss that over call where I can show you my projects in my current organisation.
