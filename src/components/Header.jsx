export default function Header({ completed, total }) {
  return (
    <header className="main-header">
      <h1>🌟 Habit Tracker</h1>
      <div className="progress-summary">
        {total > 0 ? (
          <p>Today's accomplishments: <strong>{completed} out of {total}</strong> completed!</p>
        ) : (
          <p>Get started and add a habit!</p>
        )}
      </div>
    </header>
  );
}