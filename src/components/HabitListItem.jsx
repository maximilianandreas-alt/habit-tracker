export default function HabitListItem({ habit, onIncrement, onDelete }) {
  return (
    <div className={`habit-item ${habit.completed ? 'completed' : ''}`}>
      <div className="habit-info">
        <h3>{habit.name}</h3>
        <p>Progress: {habit.current} / {habit.goal}</p>
      </div>
      <div className="habit-actions">
        <button 
          onClick={() => onIncrement(habit.id)}
          disabled={habit.completed}
          className="increment-btn"
        >
          {habit.completed ? 'Completed ✅' : '+1 progress'}
        </button>
        <button onClick={() => onDelete(habit.id)} className="delete-btn">
          🗑️
        </button>
      </div>
    </div>
  );
}