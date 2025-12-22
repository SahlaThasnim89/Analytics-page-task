import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "../lib/supabaseClient";


type AnalyticsFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
//   onApply: (data: any) => void;
    email: string;
  onSaved: (data: any) => void;
};

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

type MonthKey = Lowercase<typeof MONTHS[number]>;

export function AnalyticsFormDialog({
  open,
  onOpenChange,
  email,onSaved
}: AnalyticsFormDialogProps) {
  const [values, setValues] = useState<Record<MonthKey, string>>(
    Object.fromEntries(MONTHS.map(m => [m.toLowerCase(), ""])) as Record<MonthKey, string>
  );

  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    for (const [month, value] of Object.entries(values)) {
      if (value.trim() === "") {
        setError(`Please enter a value for ${month}`);
        return false;
      }
      const num = Number(value);
      if (Number.isNaN(num)) {
        setError("All values must be valid numbers");
        return false;
      }
      if (num < 0) {
        setError("Values cannot be negative");
        return false;
      }
    }
    return true;
  };

  const handleApply = async() => {
    if (!validate()) return;


      const payload = MONTHS.map((month) => ({
    month,
    desktop: Number(values[month.toLowerCase() as MonthKey]),
  }));

const { error } = await supabase
  .from("chart_overrides")
  .upsert(
    {
      email,
      chart_type: "area", // REQUIRED
      values: payload,
    },
    {
      onConflict: "email,chart_type",
    }
  );


  if (error) {
    setError("Failed to save data");
    return;
  }

    onSaved(payload);


    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-gray-800 text-white border border-gray-600">
        <DialogHeader>
          <DialogTitle>Edit chart data</DialogTitle>
          <DialogDescription className="text-gray-400">
            Update values to reflect your production metrics.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
          {MONTHS.map((month) => (
            <Input
              key={month}
              type="number"
              placeholder={`${month} value`}
              value={values[month.toLowerCase() as MonthKey]}
              onChange={(e) =>
                setValues({
                  ...values,
                  [month.toLowerCase()]: e.target.value,
                })
              }
            />
          ))}
        </div>

        {error && (
          <p className="mt-2 text-sm text-red-500">{error}</p>
        )}

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-violet-500" onClick={handleApply}>
            Apply to graph
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
