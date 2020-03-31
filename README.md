# React Browser Extension Starter

This project containes a minimal setup for developing a performant and well structured browser extension. The extension contains a demonstration counter that is displayed on the popup and options pages as well as any open tab. 

## Good to know before using:
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Webext-redux](https://github.com/tshaddix/webext-redux)
* [Typescript](https://www.typescriptlang.org/)
* [Styled-components](https://www.styled-components.com/)
* [Extensions](https://developer.chrome.com/extensions)

## Requirements:
* [NodeJS](https://nodejs.org/en/) - Javascript runtime
* [VSCode](https://code.visualstudio.com/) - Recomended editor
* [Chrome](https://www.google.com/chrome/) or [Firefox](https://www.mozilla.org/en-US/firefox/) - Web browser

## How does proxy store work here:
![Architecture](https://cloud.githubusercontent.com/assets/603426/18599404/329ca9ca-7c0d-11e6-9a02-5718a0fba8db.png)


## How to run:
### In terminal or command prompt

```
install dependencies
 - npm install
Transpile the code
 - npm run dev (only transpiles the code)
 - npm run watch (transpiles and watches for code changes)
```

### In Chrome web browser
1. Go to: [**chrome://extensions**](chrome://extensions)
2. Toggle: "**developer mode**" on.
3. Click on: "**Load unpacked**"
4. Select the newly created folder "**build**" from the project folder.
5. Thats it.

### In Firefox web browser
1. Go to: [**about:debugging**](about:debugging)
2. Select: "**This Firefox**" or for old version "**Enable add-on debugging**"
3. Click on: "**Load Temporary Add-on…**"
4. Open the newly created folder "**build**" from the project folder, and choose the "**manifest.json**" file.
5. Thats it.
