"use client";

import { useActionState } from "react";
import { addNumbers, State } from "./actions";

export default function FormComponent() {
  const [result, formAction] = useActionState<State, FormData>(
    addNumbers,
    0
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          🔢 Add Two Numbers
        </h1>

        <form action={formAction} className="space-y-6">

          {/* First Number */}
          <input
            type="number"
            name="num1"
            placeholder="Enter first number"
            required
            className="w-full text-2xl font-bold text-indigo-700 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
          />

          {/* Second Number */}
          <input
            type="number"
            name="num2"
            placeholder="Enter second number"
            required
            className="w-full text-2xl font-bold text-indigo-700 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Calculate
          </button>
        </form>

        {/* Result Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wide">
            Result
          </p>
          <h2 className="text-5xl font-extrabold text-purple-700 drop-shadow-lg mt-2">
            {result}
          </h2>
        </div>

      </div>
    </div>
  );
}