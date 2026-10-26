import type { StatsDisplayProps } from "../../types";

// Receive stats from the parent component through props
// This function receives props because it needs the statistics from its parent.
export function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
     <div className="stats-container">
      {/* Character count */}
      <div className="stat-card">
        <p>Characters</p>
        <h2>{stats.characterCount}</h2>
      </div>

      {/* Word count */}
      <div className="stat-card">
        <p>Words</p>
        <h2>{stats.wordCount}</h2>
        <p>Min: 2 | Max: 200</p>
      </div>

      {/* Reading time */}
      <div className="stat-card">
        <p>Reading Time</p>
        <h2>{stats.readingTime}:00</h2>
      </div>
    </div>
  );
}