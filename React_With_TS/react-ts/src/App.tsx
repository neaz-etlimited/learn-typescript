import "./App.css";
import Reminder from "./models/reminder";
import ReminderList from "./components/ReminderList";
import { useEffect, useState } from "react";
import reminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    const loadReminders = async () => {
      try {
        const reminders = await reminderService.getReminders();
        setReminders(reminders);
      } catch (error) {
        console.error("Failed to load reminders:", error);
      }
    };

    loadReminders();
  }, []);

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);

    setReminders([newReminder, ...reminders]);
  };

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
