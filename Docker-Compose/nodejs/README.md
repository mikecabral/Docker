Download for Windows: https://nodejs.org/en/download

VS Code Extensions: 

Go to an Empty Directory
Bring up the Terminal in  VS Code

#### Initialize Node.js
```powershell
npm init -y
```

This will create for us a **package.json** and give us a context for installing packages that we can use in **Node** like **Express**.

#### Install Express
```powershell
npm install express
```

It will add **express** to the **package.json** file and the **dependencies**

Create an index.js (The file to write our code in)

This will let us know if our API is working
```js
const app = require('express')();

const PORT = 8080;


app.listen(

    PORT,

    () => console.log('it\'s alive on http://192.168.50.57:' + PORT)

);
```

Go down to the Terminal and write
```powershell
node .
```
To start the Node.js environment

Go to your browser to double check it's working
```powershell
http://192.168.50.57:8080
```

If everything is working, let's download Insomnia to have a realtime working environment
https://insomnia.rest/download

Start a New Request and enter the API details to start testing/developing
