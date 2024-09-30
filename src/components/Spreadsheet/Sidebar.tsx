import React from "react";
import { SpreadsheetData } from "./type";

interface SidebarProps {
  spreadsheets: SpreadsheetData[];
  selectedSpreadsheetIndex: number;
  setSelectedSpreadsheetIndex: (index: number) => void;
}

const Sidebar = ({
  spreadsheets,
  selectedSpreadsheetIndex,
  setSelectedSpreadsheetIndex,
}: SidebarProps) => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white overflow-auto p-5">
      <ul>
        {spreadsheets.map((spreadsheet, index) => (
          <li
            key={index}
            className={`mb-4 cursor-pointer ${
              index === selectedSpreadsheetIndex
                ? "ring-2 ring-blue-500 ring-inset p-3 rounded-lg"
                : "p-3"
            }`}
            onClick={() => setSelectedSpreadsheetIndex(index)}
          >
            {spreadsheet.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;