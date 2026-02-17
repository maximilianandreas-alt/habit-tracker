// src/components/HabitList.jsx
import HabitListItem from './HabitListItem';

export default function HabitList({ habits, onIncrement }) {
  return (
    <div className="habit-list">
      {habits.map(habit => (
        <HabitListItem key={habit.id} habit={habit} onIncrement={onIncrement} />
      ))}
    </div>
  );
}