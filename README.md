# React Custom Hook Counter App

A simple React application built using **Create React App (CRA)** that demonstrates how to create and use a **custom hook (`useCounter`)** to manage reusable counter logic. The project contains multiple independent counters that share the same custom hook while maintaining separate states.

---

## Features

- Custom `useCounter` hook
- Three independent counters
- Increment and decrement by a step value of **5**
- Reset counter to its initial value
- Reusable `Counter` component
- Clean and responsive user interface
- Built with Functional Components and React Hooks

---

## Project Structure

```text
src/
├── components/
│   └── Counter.jsx
├── hooks/
│   └── useCounter.js
├── App.js
├── App.css
├── index.js
└── index.css
```

---

## Technologies Used

- React.js
- JavaScript (ES6)
- CSS3
- Create React App (CRA)

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/counter-app.git
```

### 2. Navigate to the project

```bash
cd counter-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## How It Works

The custom hook `useCounter` accepts two parameters:

- `initialValue`
- `step`

It returns:

- `count`
- `increment()`
- `decrement()`
- `reset()`

Each `Counter` component uses the same hook, allowing the counter logic to be reused without duplicating code while keeping each counter's state independent.

---

## Learning Objectives

- Understand React Custom Hooks
- Reuse stateful logic across multiple components
- Manage state using the `useState` hook
- Build reusable React components
- Improve code organization and maintainability

---

## Future Enhancements

- Add user-defined step value
- Add Dark Mode
- Save counter values using Local Storage
- Add animations and transitions
- Display counter history

---

## Author

**Abhiram Chundru**
