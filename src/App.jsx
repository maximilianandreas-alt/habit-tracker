import { useState, useEffect } from 'react';
import Header from './components/Header';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import './App.css';

function App() {
  // State Initialisierung mit Local Storage (FR009)
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem('habits');
    return saved ? JSON.parse(saved) : [];
  });

  // Automatisches Speichern bei Änderungen (FR009)
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  // Neues Habit hinzufügen (FR004)
  const addHabit = (name, goal) => {
    const newHabit = {
      id: crypto.randomUUID(),
      name: name,
      goal: parseInt(goal),
      current: 0,
      completed: false,
    };
    setHabits([...habits, newHabit]);
  };

  // Counter erhöhen & Fortschritt prüfen (FR005 & FR007)
  const toggleIncrement = (id) => {
    setHabits(habits.map(habit => {
      if (habit.id === id) {
        const newCurrent = habit.current + 1;
        if (newCurrent <= habit.goal) {
          return { 
            ...habit, 
            current: newCurrent, 
            completed: newCurrent === habit.goal 
          };
        }
      }
      return habit;
    }));
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  // Gesamtfortschritt berechnen (FR006)
  const totalHabits = habits.length;
  const completedCount = habits.filter(h => h.completed).length;

  return (
    <div className="app-container">
      <Header completed={completedCount} total={totalHabits} />
      <main className="content">
        <HabitForm onAdd={addHabit} />
        <HabitList 
          habits={habits} 
          onIncrement={toggleIncrement} 
          onDelete={deleteHabit} 
        />
      </main>
    </div>
  );
}

export default App;