function calculateTime() {
  const tasksInput = document.getElementById("tasks").value;
  const tasks = tasksInput.split(",").map((task) => task.trim());
  const cooldown = parseInt(document.getElementById("cooldown").value);

  const taskCounts = new Map();
  let maxCount = 0;
  let maxTasks = 0;

  for (const task of tasks) {
    const count = (taskCounts.get(task) || 0) + 1;
    taskCounts.set(task, count);
    if (count > maxCount) {
      maxCount = count;
      maxTasks = 1;
    } else if (count === maxCount) {
      maxTasks++;
    }
  }

  const emptySlots = Math.max(0, (maxCount - 1) * (cooldown - (maxTasks - 1)));
  const totalSlots = (maxCount - 1) * cooldown + maxCount;
  const idleSlots = Math.max(
    0,
    emptySlots - (tasks.length - maxCount * maxTasks)
  );
  const totalTime = tasks.length + Math.max(totalSlots, idleSlots);

  document.getElementById(
    "result"
  ).innerText = `Least number of units of time: ${totalTime}`;
}
