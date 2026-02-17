// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import HabitList from './components/HabitList';
import './App.css';

function App() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Wasser trinken', goal: 3, current: 0, completed: false }
  ]);

  const toggleIncrement = (id) => {
    setHabits(habits.map(habit => {
      if (habit.id === id) {
        const newCurrent = habit.current + 1;
        return { ...habit, current: newCurrent, completed: newCurrent >= habit.goal };
      }
      return habit;
    }));
  };

  return (
    <div className="App">
      <Header />
      {/* Wir geben die Daten (habits) und die Funktion (onIncrement) weiter */}
      <HabitList habits={habits} onIncrement={toggleIncrement} />
    </div>
  );
}
export default App;