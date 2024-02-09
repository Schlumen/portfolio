import React from "react";

export default function settings({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-4 right-4 flex gap-3 justify-center items-center">
      {children}
    </div>
  );
}
