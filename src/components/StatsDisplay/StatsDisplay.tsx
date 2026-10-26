import type { StatsDisplayProps } from "../../types";

// Receive stats from the parent component through props
export function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
     <div>
      <h2>Characters: {stats.characterCount}</h2>
      <h2>Words: {stats.wordCount}</h2>
      <h2>Reading Time: {stats.readingTime}</h2>
      </div>
  );
}