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

type OverwriteAlertProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
};

export function AlertDialogDemo({
  open,
  onOpenChange,
  onConfirm,
}: OverwriteAlertProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-gray-800 text-white border border-gray-600">
        <AlertDialogHeader>
          <AlertDialogTitle>Overwrite existing data?</AlertDialogTitle>
          <AlertDialogDescription>
            We found previously saved chart values for this email.
            Do you want to overwrite them with new values?
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
            Yes, overwrite
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

