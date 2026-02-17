// components/HabitListItem.jsx

export default function HabitListItem({ habit, onIncrement }) {
  // FR007: Bedingtes Styling festlegen
  // Wenn completed true ist, bekommt das div die Klasse 'habit-card completed'
  const cardClass = habit.completed ? 'habit-card completed' : 'habit-card';

  return (
    <div className={cardClass}>
      <h3>{habit.name}</h3>
      <p>Fortschritt: {habit.current} / {habit.goal}</p>
      
      <div className="controls">
        {/* FR005: Button zum Hochzählen */}
        <button 
          onClick={() => onIncrement(habit.id)}
          disabled={habit.completed} // Optional: Deaktivieren, wenn Ziel erreicht
        >
          {habit.completed ? 'Erledigt! ✅' : '+1 Fortschritt'}
        </button>
      </div>

      {/* FR007: Kleiner Text-Hinweis bei Erfolg */}
      {habit.completed && <p className="success-msg">Ziel erreicht! Super Job!</p>}
    </div>
  );
}