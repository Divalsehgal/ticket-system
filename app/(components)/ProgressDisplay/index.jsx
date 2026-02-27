const ProgressDisplay = ({ progress }) => {
  return (
    <div className="w-32 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-[var(--primary)] h-2.5 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
