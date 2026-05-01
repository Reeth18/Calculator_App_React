# Calculator App

A simple, responsive calculator built with **React 19**, **Vite**, and **Bootstrap 5**, featuring a dark/light mode toggle.

## Features

- Basic arithmetic: `+`, `-`, `*`, `/`
- Clear (`C`) and Backspace (`⌫`)
- Decimal support with duplicate-dot prevention
- Smart post-evaluation flow: continue calculations from the last result by chaining an operator, or start fresh with a number
- Auto-replaces consecutive operators (e.g. `5+*` becomes `5*`)
- Division-by-zero handling shows `Error`
- Dark / Light mode toggle

## Tech Stack

- React 19 (Hooks: `useState`, `useEffect`)
- Vite 8
- Bootstrap 5
- [mathjs](https://mathjs.org/) for safe expression evaluation
- ESLint

## Project Structure

```
src/
├── App.jsx                  # Root component
├── main.jsx                 # Entry point
├── App.css / index.css      # Styles
└── components/
    ├── Calculator.jsx       # Calculator logic & UI
    └── Mode.jsx             # Dark/Light mode toggle
```

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview build
npm run lint     # run ESLint
```
