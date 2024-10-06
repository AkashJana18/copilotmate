import Markdown from "react-markdown";

export function AnswerMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="markdown-wrapper text-slate-300">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
