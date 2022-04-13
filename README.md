### tailwind css installation method
## 1 // npm install -D tailwindcss [D == means developer dependencies]
## 2 // npx tailwindcss init [ It helps to create your tailwind.config.js file.]
then inside the config file use this :::: {
            module.exports = {
        content: [ './pages/**/*.{js,jsx,jsx}',
        './components/**/*.{js,jsx,jsx}',],
        theme: {
            extend: {},
        },
        plugins: [],
        }

}

optional ::
## 3 // create src/tailwind.css file [ inside this file put this --- @tailwind base;
@tailwind components;
@tailwind utilities;] 
---- this time you need to settings vs-code , open setting.json and use this => 
{
   "css.validate": false,
   "tailwindCSS.emmetCompletions": true
}
## 4 // create a build scripts inside the package.json => 
  "scripts": {
    "build": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
  },