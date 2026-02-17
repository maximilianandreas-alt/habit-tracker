import HabitListItem from './HabitListItem';

export default function HabitList({ habits, onIncrement, onDelete }) {
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitListItem 
          key={habit.id} 
          habit={habit} 
          onIncrement={onIncrement} 
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}