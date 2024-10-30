import React from "react";
import { cva, cx } from "class-variance-authority";

enum Color {
  red = "bg-red-200",
}

const containerStyles = cva(
  `
  flex justify-around items-top p-3
`,
  {
    variants: {
      success: {
        true: `bg-green-300`,
        false: Color.red,
      },
    },
  }
);

export default function App() {
  return (
    <div className={containerStyles({ success: false })}>
      Template: React + TypeScript + Tailwind
    </div>
  );
}
