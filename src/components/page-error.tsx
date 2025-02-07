import { AlertTriangle } from "lucide-react";

interface PageErrorProps {
  message: string;
}

export const PageError = ({
  message = "Something went wrong",
}: PageErrorProps) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <AlertTriangle className="size-6 text-muted-foreground" />
      <p className="text-sm font-medium text-muted-foreground">{message}</p>
    </div>
  );
};
