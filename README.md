 #Output
 ![Screenshot 2024-12-27 185153](https://github.com/user-attachments/assets/0bb3267b-7e6a-4d34-9077-08ef44126072)
 
![Screenshot 2024-12-27 185220](https://github.com/user-attachments/assets/0fd72581-652e-4b1a-97cf-91e1eacb8119)

![Screenshot 2024-12-27 185300](https://github.com/user-attachments/assets/f59cc9a6-d9f7-42c7-8691-581e7371c6f4)

![Screenshot 2024-12-27 185331](https://github.com/user-attachments/assets/60428937-1e60-4852-9a7f-44565913e819)


# Lms Frontend

## Setup instruction

1. Clone the project

```
  git clone    https://github.com/codepriyanshu2004/Lms-frontend.git
```

2. Move into the directory

```
  cd lms-frontend
```

3. install dependencies
```
 npm i

```

4. run the server

```
  npm run dev
```

### setup instructions for tailwind

1. install tailwindCss
```
 npm install -D tailwindcss postcss autoprefixer

```

2. Create tailwind config file
```
 npx tailwindcss init

```

3. Add file extension to tailwind config file in the contents property
```
 "./src/**/*.{html,js,jsx,ts,tsx}","./index.html"

```

4. Add the tailwind directives at the top of the index.css file
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

5. Add the following details in the plugin property of tainwind config

```
    [require("daisyui"), require("@tailwindcss/line-clamp")]
```

### Adding plugins and dependencies

```
 npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwind/line-clamp @tailwindcss/line-clamp
```
  

