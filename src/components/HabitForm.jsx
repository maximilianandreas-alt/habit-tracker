import { useState } from 'react';

export default function HabitForm({ onAdd }) {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !goal) return;
    onAdd(name, goal);
    setName('');
    setGoal('');
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="e.g. drinking water" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input 
        type="number" 
        placeholder="Target (e.g., 8)" 
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        min="1"
        required
      />
      <button type="submit">+</button>
    </form>
  );
}