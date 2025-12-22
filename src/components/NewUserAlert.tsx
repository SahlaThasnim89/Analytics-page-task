
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

type NewUserAlertProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
};

export function NewUserAlert({
  open,
  onOpenChange,
  onConfirm,
}: NewUserAlertProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-gray-800 text-white border border-gray-600">
        <AlertDialogHeader>
          <AlertDialogTitle>Save new chart data?</AlertDialogTitle>
          <AlertDialogDescription>
            No previous data was found for this email.
            Would you like to continue and enter new values?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction className="bg-violet-500"
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

