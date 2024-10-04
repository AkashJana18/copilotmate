"use client";
import "@copilotkit/react-ui/styles.css";

import React, { useState } from "react";
import Sidebar from "@/components/Spreadsheet/Sidebar";
import SingleSpreadsheet from "@/components/Spreadsheet/SingleSpreadsheet";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import {
  CopilotKitCSSProperties,
  CopilotSidebar,
  useCopilotChatSuggestions,
} from "@copilotkit/react-ui";
import { INSTRUCTIONS } from "./instructions";
import { canonicalSpreadsheetData } from "@/components/Spreadsheet/canonicalSpreadsheetData";
import { SpreadsheetData } from "@/components/Spreadsheet/type";
import { PreviewSpreadsheetChanges } from "@/components/Spreadsheet/PreviewSpreadsheetChanges";

const HomePage = () => {
  useCopilotChatSuggestions(
    {
      instructions: "Suggest the most relevant actions related to spreadsheet.",
    },
  );
  return (
    <div
      style={
        {
          "--copilot-kit-primary-color": "#222222",
          "--copilot-kit-background-color": "#555555",
          "--copilot-kit-response-button-background-color": "#444444",
          "--copilot-kit-response-button-color": "#fff",
          "--copilot-kit-separator-color": "#666666",
          "--copilot-kit-muted-color": "#fff",
        } as CopilotKitCSSProperties
      }
    >
      <CopilotSidebar
        instructions={INSTRUCTIONS}
        labels={{
          title: "CopilotMate",
          initial:
            "Welcome to the AI-assisted spreadsheet! How can I help you?",
        }}
        defaultOpen={true}
        clickOutsideToClose={false}
      >
        <Main />
      </CopilotSidebar>
    </div>
  );
};

const Main = () => {
  const [spreadsheets, setSpreadsheets] = React.useState<SpreadsheetData[]>([
    {
      title: "Spreadsheet 1",
      rows: [
        [{ value: "" }, { value: "" }, { value: "" }],
        [{ value: "" }, { value: "" }, { value: "" }],
        [{ value: "" }, { value: "" }, { value: "" }],
      ],
    },
  ]);

  const [selectedSpreadsheetIndex, setSelectedSpreadsheetIndex] = useState(0);

  useCopilotAction({
    name: "createSpreadsheet",
    description: "Create a new  spreadsheet",
    parameters: [
      {
        name: "rows",
        type: "object[]",
        description: "The rows of the spreadsheet",
        attributes: [
          {
            name: "cells",
            type: "object[]",
            description: "The cells of the row",
            attributes: [
              {
                name: "value",
                type: "string",
                description: "The value of the cell",
              },
            ],
          },
        ],
      },
      {
        name: "title",
        type: "string",
        description: "The title of the spreadsheet",
      },
    ],
    render: (props) => {
      const { rows, title } = props.args;
      const newRows = canonicalSpreadsheetData(rows);

      return (
        <PreviewSpreadsheetChanges
          preCommitTitle="Create spreadsheet"
          postCommitTitle="Spreadsheet created"
          newRows={newRows}
          commit={(rows) => {
            const newSpreadsheet: SpreadsheetData = {
              title: title || "Untitled Spreadsheet",
              rows: rows,
            };
            setSpreadsheets((prev) => [...prev, newSpreadsheet]);
            setSelectedSpreadsheetIndex(spreadsheets.length);
          }}
        />
      );
    },
    handler: ({ rows, title }) => {
      // Do nothing.
      // The preview component will optionally handle committing the changes.
    },
  });

  useCopilotReadable({
    description: "Today's date",
    value: new Date().toLocaleDateString(),
  });

  return (
    <div className="flex">
      <Sidebar
        spreadsheets={spreadsheets}
        selectedSpreadsheetIndex={selectedSpreadsheetIndex}
        setSelectedSpreadsheetIndex={setSelectedSpreadsheetIndex}
      />
      <SingleSpreadsheet
        spreadsheet={spreadsheets[selectedSpreadsheetIndex]}
        setSpreadsheet={(spreadsheet) => {
          setSpreadsheets((prev) => {
            console.log("setSpreadsheet", spreadsheet);
            const newSpreadsheets = [...prev];
            newSpreadsheets[selectedSpreadsheetIndex] = spreadsheet;
            return newSpreadsheets;
          });
        }}
      />
    </div>
  );
};

export default HomePage;
