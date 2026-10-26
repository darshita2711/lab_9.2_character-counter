import { StatsDisplay } from '../StatsDisplay/StatsDisplay';
import type { TextStats } from '../../types';
import { useState } from 'react';
import { TextInput } from '../TextInput/TextInput';

// this is the parent component not need to receive any props information 
export function CharacterCounter() {
// Store the text entered by the user
  const [text, setText] = useState('');
   // Store the statistics in an object
    const stats: TextStats = {
        characterCount: text.length,
        wordCount: 0,
        readingTime: 0,
  };
  return (
    <div>
      <h1>Character Counter</h1>
      {/* setText is the setter method that update the information */}
      <TextInput onTextChange={setText} />
       {/* Pass the stats object to StatsDisplay using props */}
      <StatsDisplay stats={stats} />
    </div>
  );
}