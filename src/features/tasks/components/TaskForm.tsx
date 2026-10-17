import { TaskFormData } from "../../../types/task";
import styles from "../styles/taskForm.module.css";

type Props = {
  formData: TaskFormData;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  id?: string;
};

export default function TaskForm({
  formData,
  onChange,
  onSubmit,
  id,
}: Props) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="title">タスク名：</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={onChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description">説明：</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={onChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="priority">優先度：</label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={onChange}
        >
          <option value="high">高</option>
          <option value="medium">中</option>
          <option value="low">低</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="dueDate">期限日：</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={formData.dueDate}
          onChange={onChange}
          required
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        {id ? "更新する" : "作成する"}
      </button>
    </form>
  );
}