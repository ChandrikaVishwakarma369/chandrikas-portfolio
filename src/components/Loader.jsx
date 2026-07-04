import { useEffect, useState } from "react";


export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <img
        src="/gemini-svg.svg"
        alt="Loading"
        className="w-32 h-32 animate-gemini-spin"
      />
    </div>
  );
}
