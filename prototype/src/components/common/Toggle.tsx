import React from "react";
import styles from "./Toggle.module.css";

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  size = "md",
}) => {
  const toggleId = `toggle-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={styles.container}>
      <label htmlFor={toggleId} className={styles.label}>
        <input
          type="checkbox"
          id={toggleId}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className={styles.input}
        />
        <span
          className={`${styles.slider} ${styles[size]} ${
            checked ? styles.checked : ""
          }`}
        >
          <span className={styles.thumb} />
        </span>
        {(label || description) && (
          <span className={styles.textContainer}>
            {label && <span className={styles.labelText}>{label}</span>}
            {description && (
              <span className={styles.description}>{description}</span>
            )}
          </span>
        )}
      </label>
    </div>
  );
};

export default Toggle;
