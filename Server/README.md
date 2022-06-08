**The automapper applied, for more details, please read:** \
https://automapperts.netlify.app/docs/getting-started/installation

To use mappers: \
1- Go to file mapper.ts under utitlities folder \
2- Add your required map at function runMapper, \
&emsp;&emsp; for ex: mapper.createMap(Entity, PanelDto); \
3- Use code to apply mapping: \
&nbsp;&nbsp; let panelEntity: Entity = mapper.map(objectDto, Dto, Entity); \
&nbsp;&nbsp; where objectDto is the current object with data

**To start the app, run command** \
npm run dev \
or \
npm run dev-nodemon

**Note: Sequelize is not enabled/tested in repo, As my focus is on docker** \

**To generate and run the migration** \
npm run migration:gen -- -n Init \
npm run migration:run

**To run the seeders** \
npm run seed:run

**To solve issue**\
Uncaught Error: listen EADDRINUSE: address already in use \
To kill node process: \
Run cmd as administrator \
taskkill /F /IM node.exe \
