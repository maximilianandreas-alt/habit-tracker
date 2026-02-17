import { useState, useEffect } from 'react'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import Header from './components/Header'

function App() {
  // Das Herzstück: Ein Array von Objekten
  const [habits, setHabits] = useState([]);

  // Funktion zum Hinzufügen (wird an HabitForm übergeben)
  const addHabit = (name, goal) => {
    const newHabit = {
      id: crypto.randomUUID(),
      name: name,
      goal: parseInt(goal),
      current: 0,
      completed: false
    };
    setHabits([...habits, newHabit]);
  };

  return (
    <div className="app-container">
      <Header />
      <HabitForm onAdd={addHabit} />
      <HabitList habits={habits} setHabits={setHabits} />
    </div>
  );
}

// 1. Beim Laden: Daten aus LocalStorage holen
useEffect(() => {
  const savedHabits = localStorage.getItem('my-habits');
  if (savedHabits) setHabits(JSON.parse(savedHabits));
}, []);

// 2. Bei jeder Änderung: Daten speichern
useEffect(() => {
  localStorage.setItem('my-habits', JSON.stringify(habits));
}, [habits]);

// App.jsx

const toggleIncrement = (id) => {
  setHabits(habits.map(habit => {
    if (habit.id === id) {
      // Wir erhöhen 'current', aber nur wenn das Ziel noch nicht überschritten ist (optional)
      const newCurrent = habit.current + 1;
      return { 
        ...habit, 
        current: newCurrent,
        // FR007: Hier setzen wir den Status 'completed' auf true, wenn das Ziel erreicht ist
        completed: newCurrent >= habit.goal 
      };
    }
    return habit;
  }));
};