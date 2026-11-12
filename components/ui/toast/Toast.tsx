
"use client";
import "./toast.css";
import { useEffect } from "react";
import { CheckCircle, Info, TriangleAlert, X } from "lucide-react";
import Button from "../button/Button";

type ToastVariant = "success" | "error" | "info";

type ToastProps = {
    message: string;
    variant?: ToastVariant;
    onClose: () => void;
};

const styles: Record<ToastVariant, string> = {
    success: "toast-success",
    error: "toast-error",
    info: "toast-info",
};

const icons = {
    success: CheckCircle,
    error: TriangleAlert,
    info: Info,
};

const Toast = ({ message, variant = "success", onClose }: ToastProps) => {

    useEffect(() => {
        const timer = window.setTimeout(onClose, 3500);
        return () => window.clearTimeout(timer);
    }, [onClose]);

    const Icon = icons[variant];

    return (
        <div
            role={variant === "error" ? "alert" : "status"}
            className={`flex items-center gap-3 rounded-lg border p-3 ${styles[variant]}`}
        >
            <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />

            <p className="flex-1 text-sm font-medium">{message}</p>

            <Button
                label={<X className="h-4 w-4" aria-hidden="true" />}
                type="button"
                onClick={onClose}
                aria-label="Dismiss notification"
                className="rounded p-1 hover:bg-black/5"
            />

        </div>
    );
}

export default Toast;
export type { ToastProps, ToastVariant };
