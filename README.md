# React Counter App

A simple React application demonstrating fundamental concepts of component-based design, state management, and parent-to-child communication using props. The project is suitable for beginners and for submission as a small assignment or lab exercise.

## Overview

This application implements a counter with the following capabilities:
- Display the current counter value.
- Increment and decrement the counter.
- Reset the counter to zero.
- Toggle between light and dark themes.

The design separates concerns by keeping state and logic in the parent component and delegating presentation and user interaction to a child component.

## Features

- Counter operations: increment, decrement, reset.
- Theme toggle: light and dark mode with smooth transitions.
- Clear demonstration of `useState` for local component state.
- Parent-to-child data passing with props and child-to-parent state updates through functions passed as props.
- Minimal and readable CSS for presentation.

## Project Structure
src/
├── App.jsx # Parent component: holds state, handlers and theme toggle
├── Counter.jsx # Child component: receives props and renders UI
├── App.css # Styling and theme rules
└── index.js # Application entry point


## Installation

1. Ensure Node.js and npm are installed.
2. Clone the repository (or copy the project folder).
3. In the project root, run:

```bash
npm install
Development

Start the development server:

npm start
