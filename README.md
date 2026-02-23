📌 Server-Side Addition App (Next.js)

A simple Next.js App Router project demonstrating Server Actions, form handling, and server-side execution.

This application allows users to enter two numbers, submits them to the server, performs addition on the server side, and displays the result on the same page — without using API routes or client-side fetching.

🚀 Features

✅ Built using Next.js App Router

✅ Uses Server Components

✅ Implements Server Actions

✅ Form submission handled on the server

✅ No API routes used

✅ No client-side fetch/axios

✅ Clean and minimal UI

✅ Demonstrates UI → Server → UI data flow

🛠 Tech Stack

Next.js (App Router)

React

TypeScript

Tailwind CSS (for styling)

📂 Project Structure
app/
│
├── page.tsx            # Main page
├── FormComponent.tsx   # Form UI component
├── actions.ts          # Server Action (addition logic)
⚙️ How It Works

User enters two numbers in the form.

The form submits using a Server Action.

The server:

Receives the form data

Converts values to numbers

Performs addition

The result is returned and displayed on the same page.

This demonstrates true server-side execution in Next.js.

🧠 Learning Objectives Covered

App Router fundamentals

Server vs Client execution

Server Actions

Form handling in Next.js

Data flow from UI → Server → UI
