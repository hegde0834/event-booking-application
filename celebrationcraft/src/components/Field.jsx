import { AlertCircle } from "lucide-react";

export default function Field({ label, error, children, className = "" }) {
  return (
    <label className={className}>
      <span>{label}</span>
      {children}
      {error && (
        <span className="err" role="alert">
          <AlertCircle size={14} />
          {error}
        </span>
      )}
    </label>
  );
}
