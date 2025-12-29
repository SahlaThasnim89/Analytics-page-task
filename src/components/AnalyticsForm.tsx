import { useEffect, useState } from "react";
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
import { defaultAreaData } from "./Analysis";

type AnalyticsFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  email: string;
  initialValues?: any;
  onSaved: (data: any) => void;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

type MonthKey = Lowercase<(typeof MONTHS)[number]>;
const emptyValues = () =>
  Object.fromEntries(MONTHS.map((m) => [m.toLowerCase(), ""])) as Record<
    MonthKey,
    string
  >;

export function AnalyticsFormDialog({
  open,
  onOpenChange,
  email,
  onSaved,
  initialValues,
}: AnalyticsFormDialogProps) {
  const [values, setValues] = useState<Record<MonthKey, string>>(emptyValues());

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

  const handleApply = async () => {
    if (!validate()) return;

    const payload = MONTHS.map((month) => ({
      month,
      desktop: Number(values[month.toLowerCase() as MonthKey]),
    }));

    const { error } = await supabase.from("chart_overrides").upsert(
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

  const defaultAreaValues = () =>
    Object.fromEntries(
      MONTHS.map((m) => {
        const found = defaultAreaData.find((d) => d.month === m);
        return [m.toLowerCase(), found ? String(found.desktop) : ""];
      })
    ) as Record<MonthKey, string>;

  useEffect(() => {
    if (!open) return;

    // Overwrite case → populate inputs
    if (initialValues?.length) {
      const hydrated = Object.fromEntries(
        initialValues.map((item: any) => [
          item.month.toLowerCase(),
          String(item.desktop),
        ])
      ) as Record<MonthKey, string>;

      setValues(hydrated);
    }
    // New user → empty form
    else {
      setValues(defaultAreaValues());
    }

    setError(null);
  }, [open, initialValues]);

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

        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

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
