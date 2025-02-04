# 🚁 Drone App - Frontend

Welcome to the **Drone App** frontend! 🚀 This app is built with **React JS**, **Next.js**, **TypeScript**, and **Tailwind CSS** to provide a smooth interface for receiving instructions and finding specific items from the backend. Let’s get you set up and flying! ✨

---

## ✨ Features

- 🛸 Receive drone instructions.
- 📦 Find specific items from the backend.
- 🔄 Real-time communication with the backend using Axios.

---

## 🚀 Installation

1. **Clone the backend repository**:

   ```bash
   git clone https://github.com/bigdatr/front-end-code-challenge
   ```

2. **Clone this frontend repository**:

   ```bash
   git clone https://github.com/vanskins/fe-drone-challenge
   ```

3. **Install dependencies for the frontend**:

   ```bash
   npm install
   ```

4. **Run the backend and frontend** (both need to be running for the app to work):

   - Start the **backend** (Refer to the backend's README for the commands to run it).
   - Start the **frontend**:
     ```bash
     npm run dev
     ```

5. **App will be running at**:  
   [http://localhost:3000](http://localhost:3000)

6. You can find other available commands in `package.json`.

---

## 💡 Important Notes

- You need to **run both the frontend and backend** for the app to function correctly.  
  (Backend repo: [Drone Backend](https://github.com/bigdatr/front-end-code-challenge))

- The app uses **Axios** to communicate with the backend API.

---

## 🗂️ File Structure

The project is organized as follows:

```
/src
  ├── /components       # Reusable UI components
  ├── /lib              # API logic & Axios config
  ├── /types            # TypeScript data types
```

- **`/components`**: This folder holds all the UI components for the frontend, from buttons to forms and cards.
- **`/lib`**: API-related logic and Axios configurations to handle communication between the frontend and backend.
- **`/types`**: Contains TypeScript types for the data.

---

## 💬 How to Contribute

We welcome contributions! Feel free to fork this repo, make improvements, and submit pull requests. 🛠️

---

## 🦸‍♂️ Built with:

- **React.js** - A JavaScript library for building user interfaces
- **Next.js** - React framework for production
- **TypeScript** - JavaScript with static typing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - Promise-based HTTP client for making requests

---

## 🙏 Recommendations for improvements

- Improve backend for realtime updates when giving instructions so that on the Front end we can have a realtime update or monitoring when instructions are given to the drone. Use websockets to give instant realtime updates from BE to FE.
- Error and Notifications - Ensure to provide feedbacks right away to users if there are error or any relevant information from the APP.

---

Happy coding! 🖥️🚀
