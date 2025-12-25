import { supabase } from "@/lib/supabaseClient";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";

const BROWSERS = ["chrome", "safari", "firefox", "edge", "other"] as const;

export type BrowserKey = (typeof BROWSERS)[number];

export function PieAnalyticsFormDialog({
  open,
  onOpenChange,
  email,
  initialValues,
  onSaved,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  email: string;
  initialValues?: any[];
  onSaved: (data: any[]) => void;
}) {
  const emptyValues = () =>
    Object.fromEntries(BROWSERS.map((b) => [b, ""])) as Record<
      BrowserKey,
      string
    >;

  const [values, setValues] = useState<Record<BrowserKey, string>>(
    emptyValues()
  );
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!open) return;

    if (initialValues?.length) {
      const hydrated = Object.fromEntries(
        initialValues.map((v) => [v.browser, String(v.visitors)])
      ) as Record<BrowserKey, string>;

      setValues(hydrated);
    } else {
      setValues(emptyValues());
    }
  }, [open, initialValues]);

  

  const handleSave = async () => {
      const hasEmpty = Object.values(values).some((v) => v.trim() === "");
  if (hasEmpty) {
    setError("All fields are required");
    return; // stop submission
  }

  // Reset error if validation passes
  setError("");
  
    const payload = BROWSERS.map((browser) => ({
      browser,
      visitors: Number(values[browser]),
    }));
    await supabase.from("chart_overrides").upsert(
      {
        email,
        chart_type: "pie",
        values: payload,
      },
      { onConflict: "email,chart_type" }
    );
    onSaved(payload);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-gray-800 text-white border border-gray-600">
        <DialogHeader>
          <DialogTitle>Edit Pie Chart</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
          {BROWSERS.map((b) => (
            <Input
              key={b}
              type="number"
              min={10}
              max={1000}
              placeholder={b}
              value={values[b]}
              onChange={(e) => setValues({ ...values, [b]: e.target.value })}
            />
          ))}
        </div>
        {error && <p className="text-red-500">{error}</p>}

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-violet-500" onClick={handleSave}>
            Apply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
