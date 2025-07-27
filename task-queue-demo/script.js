// --- Task class ---
class Task {
    constructor(name) {
      this.name = name;
    }
  
    process() {
      console.log(`Starting task: ${this.name}`);
      const delay = Math.floor(Math.random() * 3000) + 1000;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Task ${this.name} completed`);
        }, delay);
      });
    }
  }
  
  // --- TaskQueue class ---
  class TaskQueue {
    constructor() {
      this.queue = [];
    }
  
    addTask(task) {
      this.queue.push(task);
    }
  
    async runAll(onDone = () => {}) {
      for (const task of this.queue) {
        const result = await task.process();
        onDone(result);
        console.log(result);
      }
      this.queue = [];
    }
  }
  
  // --- DOM Elements ---
  const taskInput = document.getElementById('taskName');
  const addBtn = document.getElementById('addTaskBtn');
  const runBtn = document.getElementById('runQueueBtn');
  const queueList = document.getElementById('queueList');
  const logArea = document.getElementById('log');
  
  const queue = new TaskQueue();
  
  // --- Event Listeners ---
  addBtn.addEventListener('click', () => {
    const name = taskInput.value.trim() || `Task ${queue.queue.length + 1}`;
    const task = new Task(name);
    queue.addTask(task);
  
    const li = document.createElement('li');
    li.textContent = name;
    queueList.appendChild(li);
  
    taskInput.value = '';
    runBtn.disabled = false;
  });
  
  runBtn.addEventListener('click', () => {
    runBtn.disabled = true;
    logArea.textContent = '';
  
    queue.runAll((msg) => {
      logArea.textContent += msg + '\n';
    }).then(() => {
      queueList.innerHTML = '';
    });
  });
  