import { StatsDisplay } from '../StatsDisplay/StatsDisplay';
import type { TextStats } from '../../types';


export function CharacterCounter() {
   // Store the statistics in an object
    const stats: TextStats = {
        characterCount: 0,
        wordCount: 0,
        readingTime: 0,
  };
  return (
    <div>
      <h1>Character Counter</h1>
       {/* Pass the stats object to StatsDisplay using props */}
      <StatsDisplay stats={stats} />
    </div>
  );
}