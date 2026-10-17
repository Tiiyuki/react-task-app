import { Link } from "react-router-dom";
import type { Priority, Task } from "../../../types/task";
import styles from "../styles/taskCard.module.css";

type Props = {
  task: Task;
  onToggleStatus: (taskId: Task["id"], newStatus: boolean) => void;
};

export default function TaskCard({ task, onToggleStatus }: Props) {
  // ステータス変更時のハンドラー
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value === "true";

    if (onToggleStatus) {
      onToggleStatus(task.id, newStatus);
    }
  };

  // 優先度に応じたクラス名を返す関数
  const getPriorityClass = (priority: Priority): string => {
    switch (priority.toLowerCase()) {
      case "high":
        return styles.highPriority;
      case "medium":
        return styles.mediumPriority;
      case "low":
        return styles.lowPriority;
      default:
        return styles.defaultPriority;
    }
  };

  // ステータスに応じた表示ラベルを返す関数
  const getStatusLabel = (status: boolean): string => {
    return status ? "完了" : "未完了";
  };

  return (
    <div className={styles.taskCard}>
      <Link to={`/tasks/${task.id}`} className={styles.detailLink}>
        <h3 className={styles.taskTitle}>{task.title}</h3>
      </Link>

      {/* ステータスをセレクトボックスに変更 */}
      <select
        value={task.status ? "true" : "false"}
        onChange={handleStatusChange}
        className={`${styles.badge} ${
          task.status ? styles.completed : styles.incomplete
        }`}
      >
        <option value="false">{getStatusLabel(false)}</option>
        <option value="true">{getStatusLabel(true)}</option>
      </select>

      <p className={`${styles.badge} ${getPriorityClass(task.priority)}`}>
        {task.priority}
      </p>

      <p className={styles.taskDueDate}>{task.dueDate}</p>
    </div>
  );
}