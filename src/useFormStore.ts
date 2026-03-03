import { create } from 'zustand';
import { postData } from './api/PostData';
import { deleteData } from './api/DeleteData';
import { patchData } from './api/PatchData';
import { getData } from './api/GetData';
import type { ClientTodos, Todos } from './shared/Interfaces';

interface FormState {
  error: Error | null;
  setError: (error: Error | null) => void;
  handleError: (err: unknown, fallback: string) => void;
  todos: Todos[];
  setTodos: (newTodos: Todos[]) => void;
  handleAdd: () => void;
  formData: ClientTodos;
  setFormData: (d: ClientTodos) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleRemove: (id: number) => Promise<void>;
  handleRemoveAll: () => Promise<void>;
  handleUpdate: (id: number, changes: Partial<Todos>) => Promise<void>;
  fetchTodos: () => Promise<void>
}

export const useFormStore = create<FormState>((set, get) => ({
  // To send
  formData: { title: '', due_date: null, content: '', done: false },
  setFormData: (d) => set({ formData: d }),

  // To get
  todos: [],
  setTodos: (d) => set({ todos: d }),

  // Errors
  error: null,
  setError: (err) => set({ error: err }),

  // Initialization
  fetchTodos: async () => {
    try {
      const data = await getData();
      set({ todos: data });
    } catch (err) {
      get().handleError(err, "Erreur de chargement");
    }
  },
  
  // Handler
  handleRemove: async (id: number) => {
    const { setError, todos, setTodos, handleError } = get();
    setError(null);
    try {
      await deleteData(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      handleError(err, 'Failed to remove task');
    }
  },

  handleRemoveAll: async () => {
    const { setError, setTodos, handleError } = get();
    setError(null);
    try {
      await deleteData();
      setTodos([]);
    } catch (err) {
      handleError(err, 'Failed to remove tasks');
    }
  },

  handleError: (err: unknown, fallback = 'Unknown error occured') => {
    const { setError } = get();
    if (err instanceof Error) {
      setError(err);
      console.error(err);
    } else {
      const newError = new Error(fallback);
      console.error(newError);
      setError(newError);
    }
  },

  handleInputChange: (e) => {
    const { name, value } = e.target;
    set((s) => ({
      formData: { ...s.formData, [name]: value },
    }));
  },

  handleAdd: async () => {
    const { formData, setFormData, setTodos, todos, handleError } = get();

    if (!formData.title.trim()) {
      handleError(null, 'Task must have a title');
      return;
    }

    try {
      const postedTodo = await postData(formData);
      setTodos([...todos, postedTodo]);
      setFormData({
        title: '',
        content: '',
        due_date: null,
        done: false,
      });
    } catch (err) {
      handleError(err, "Couldn't save task.");
    }
  },

  handleUpdate: async (id: number, changes: Partial<Todos>) => {
    const { setError, handleError, todos, setTodos } = get();
    setError(null);

    if (
      changes.title !== undefined &&
      (!changes.title || changes.title.trim() === '')
    )
      return;

    if (
      changes.content !== undefined &&
      (!changes.content || changes.content.trim() === '')
    ) {
      changes.content = 'No description';
    }

    if (
      changes.due_date !== undefined &&
      (!changes.due_date || changes.due_date === '')
    ) {
      changes.due_date = null;
    }

    try {
      const currentTodo = todos.find((t) => t.id === id);
      if (!currentTodo) return;

      const updatedTodo = { ...currentTodo, ...changes };
      await patchData(updatedTodo, id);

      setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
    } catch (err) {
      handleError(err, 'Failed to update task.');
    }
  },
}));
