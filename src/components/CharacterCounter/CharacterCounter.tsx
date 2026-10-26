import { StatsDisplay } from '../StatsDisplay/StatsDisplay';
import type { TextStats } from '../../types';
import { useState } from 'react';
import { TextInput } from '../TextInput/TextInput';

// this is the parent component not need to receive any props information 
export function CharacterCounter() {
// Store the text entered by the user
  const [text, setText] = useState('');

  const minWords = 2;
  const maxWords = 200;

  // Calculate the word count
  const wordCount = text.trim() === '' ? 0 : text.trim().split(' ').length;
  // Calculate reading time
  let readingTime = 0;

  if (wordCount > 0) {
    readingTime = Number((wordCount / 200).toFixed(2));
  }
  const stats: TextStats = {
    characterCount: text.length,
    wordCount: wordCount,
    readingTime: readingTime,
  };
  return (
    <div>
      <h1>Character Counter</h1>
      {/* setText is the setter method that update the information */}
      <TextInput onTextChange={setText} />
       {/* Pass the stats object to StatsDisplay using props */}
      <StatsDisplay stats={stats} />

      {/* Check whether the word count meets the goal */}
      {wordCount < minWords ? (
        <p>Please write at least {minWords} words.</p>
      ) : wordCount > maxWords ? (
        <p>You have exceeded the maximum of {maxWords} words.</p>
      ) : (
        <p>Your text is within the word limit!</p>
      )}
    </div>
  );
}