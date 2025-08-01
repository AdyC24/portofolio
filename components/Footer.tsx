'use client';
import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <div className="text-xs text-gray-500 text-center mt-auto py-4">
      &copy; {year} Ady Candra
    </div>
  );
}
