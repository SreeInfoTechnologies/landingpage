"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import styles from "./Toast.module.scss";

const EASE = [0.22, 0.61, 0.36, 1];
const ICONS = { success: CheckCircle2, error: AlertCircle };

/**
 * Floating toast notification — fixed to the bottom-center of the viewport,
 * slides up on enter, auto-dismisses, and can be closed manually.
 *  - open: whether the toast is visible
 *  - variant: "success" (gold) | "error" (red)
 *  - message: text to show
 *  - onClose: called on auto-dismiss or manual close (keep stable, e.g. useCallback)
 *  - duration: ms before auto-dismiss
 */
export default function Toast({
  open,
  variant = "success",
  message,
  onClose,
  duration = 5000,
}) {
  useEffect(() => {
    if (!open) return undefined;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);

  const Icon = ICONS[variant] || CheckCircle2;

  return (
    <div className={styles.viewport}>
      <AnimatePresence>
        {open && (
          <motion.div
            className={`${styles.toast} ${styles[variant]}`}
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.42, ease: EASE }}
          >
            <span className={styles.icon}>
              <Icon size={20} strokeWidth={2} />
            </span>
            <p className={styles.msg}>{message}</p>
            <button
              type="button"
              className={styles.close}
              onClick={onClose}
              aria-label="Dismiss notification"
            >
              <X size={16} strokeWidth={2.2} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
