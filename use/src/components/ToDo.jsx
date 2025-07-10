import { useState, useRef, useMemo } from 'react';

const ToDo = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [priority, setPriority] = useState('low');
  const [editInput, setEditInput] = useState('');
  const [editPriority, setEditPriority] = useState('low');
  const refid = useRef(0);

  const addTodo = () => {
    if (input.trim() === '') return;
    refid.current += 1;

    const newTodo = {
      id: refid.current,
      text: input,
      completed: false,
      priority: priority
    };

    setTodos([...todos, newTodo]);
    setInput('');
    setPriority('low');
  };

  const deleteTodo = (id) => {
    const filteredTodo = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodo);
  };

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const editing = (id, currentInput,currentPriority) => {
    setEditId(id);
    setEditInput(currentInput);
    setEditPriority(currentPriority)
  };

  const editTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: editInput, priority: editPriority };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditId(null);
    setEditInput('');
    setEditPriority('low');
  };

  const priorityOrder = {
    high:1,
    medium:2,
    low:3
  }

  const sortedOrder = useMemo(() => {
    return todos.slice().sort((a,b) =>
      priorityOrder[a.priority] - priorityOrder[b.priority]
    )
  }, [todos])

  return (
    <div className="todo-container">
      <h2 className="todo-heading">📝 Todo App</h2>

      <div className="todo-input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') addTodo();
          }}
          placeholder="Add a task"
          className="todo-input"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="todo-priority-select"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={addTodo} className="todo-button">Add</button>
      </div>

      <ul className="todo-list">
        {sortedOrder.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
              className="todo-checkbox"
            />
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  className="todo-edit-input"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') editTodo(todo.id);
                  }}
                />
                <select
                  value={editPriority}
                  onChange={(e) => setEditPriority(e.target.value)}
                  className="todo-priority-select"
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <button className="todo-save-button" onClick={() => editTodo(todo.id)}>Save</button>
                <button
                  className="todo-cancel-button"
                  onClick={() => {
                    setEditId(null);
                    setEditInput('');
                    setEditPriority('low');
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span
                  className="todo-text"
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    marginLeft: '8px',
                  }}
                >
                  {todo.text}
                </span>
                <span
                  className="todo-priority"
                  style={{
                    color:
                      todo.priority === "high"
                        ? "red"
                        : todo.priority === "medium"
                          ? "orange"
                          : "green",
                    fontWeight: "bold",
                    marginLeft: "10px"
                  }}
                >
                  [{todo.priority}]
                </span>
                <button className="todo-edit-button" onClick={() => editing(todo.id, todo.text, todo.priority)}>Edit</button>
              </>
            )}
            <button
              className="todo-delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
