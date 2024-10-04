import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconClipboardList,
  IconFileSpreadsheet,
  IconHome,
  IconReportMoney,
  IconTerminal2,
  IconTimeDurationOff,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Chatbot",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/chat",
    },
    {
      title: "Expense Tracker",
      icon: (
        <IconReportMoney className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/expensetracker",
    },
    {
      title: "Spreadsheet",
      icon: (
        <IconFileSpreadsheet className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/spreadsheet",
    }, 
    {
      title: "Todo list",
      icon: (
        <IconClipboardList className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/todo",
    },

    {
      title: "Vote",
      icon: (
        <IconTimeDurationOff className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://quira.sh/repo/AkashJana18-copilotmate-863038853",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/AkashJana18/copilotmate",
    },
  ];
  return (
    <div className="flex items-center justify-center fixed bottom-12 inset-x-0 mx-auto z-10">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
