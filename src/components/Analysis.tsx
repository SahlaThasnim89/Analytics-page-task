import { Card } from "@/components/ui/card";
import { ChartAreaDefault } from "./CallDurationChart";
import { ChartPieDonut } from "./SadPathChart";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { AlertDialogDemo } from "./AlertDialog";
import { NewUserAlert } from "./NewUserAlert";
import { AnalyticsFormDialog } from "./AnalyticsForm";

const defaultAreaData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 186 },
  { month: "August", desktop: 305 },
  { month: "September", desktop: 237 },
  { month: "October", desktop: 73 },
  { month: "November", desktop: 209 },
  { month: "December", desktop: 214 },
];

export function Analysis() {
  const [email, setEmail] = useState("");
  const [previousValues, setPreviousValues] = useState<any>(null);
  const [showOverwrite, setShowOverwrite] = useState(false);
  const [chartData, setChartData] = useState(defaultAreaData);
  const [showNewAlert, setShowNewAlert] = useState(false);
  const [showOverwriteAlert, setShowOverwriteAlert] = useState(false);
  const [canEditChart, setCanEditChart] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showAnalyticsForm, setShowAnalyticsForm] = useState(false);

  const [open, setOpen] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

  const { data, error } = await supabase
    .from("chart_overrides")
    .select("values")
    .eq("email", email)
    .eq("chart_type", "area")
    .maybeSingle();

      if (error) {
        console.error("❌ Supabase error:", error.message);
        return;
      }

      
  if (data?.values) {
    setPreviousValues(data.values);
    setChartData(data.values);
    setCanEditChart(false);
    setShowOverwriteAlert(true);
  } else {
    setCanEditChart(true);
    setShowAnalyticsForm(true);
  }

      if (data) {
        setPreviousValues(data.values);
        setShowOverwrite(true);
        setShowOverwriteAlert(true);
      } else {
        setShowOverwrite(false);
        setShowNewAlert(true);
      }
    } catch (err) {
      console.error("🔥 Unexpected error:", err);
    }

  };



  const handleAllowAnalysis = () => {
    setShowForm(true);
    console.log(showForm);
    setError(null);
  };

  useEffect(() => {
    console.log("showForm changed:", showForm);
  }, [showForm]);

  return (
    <>
      <section className="pt-20 px-36 bg-gray-900">
        <div className="flex flex-col gap-2">
          <p className="text-[#41E5E4] font-semibold text-[12px] tracking-[1.4px]">
            MANY VARIATIONS OF PASSAGES
          </p>

          <h2 className="font-bold text-[48px] text-primary leading-14 w-1/2 mt-4 tracking-[-1px]">
            Your <span className="text-[#855CF1]">voice</span>{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              agents
            </span>{" "}
            <span className="text-[#41E5E4]">pass</span> every test. Then they
            fail real customers.
          </h2>
          <p className="text-[17px] w-1/2 mt-4 leading-8 text-[#FFFFFFB3]">
            Demos work perfectly. Production breaks silently. The gap between
            testing and reality is where trust dies.
          </p>
        </div>

        <div className="flex text-center">
          <div className="my-24">
            <div className="flex flex-col items-center justify-center text-center ">
              <div className="grid md:grid-cols-1 gap-30">
                <div className="flex flex-row gap-10">
                  <Card className="text-start w-full rounded-4xl border border-gray-600 p-12 bg-gray-800">
                    <p className="text-[#FFFFFFB3] font-semibold text-[12px] tracking-[1.4px]">
                      MANY VARIATIONS OF PASSAGES
                    </p>
                    <h3 className="text-[24px] mt-4 mb-6 font-semibold text-white">
                      You're flying blind in production.
                    </h3>

                    <ChartAreaDefault chartData={chartData} />
                  </Card>
                  <div className="flex flex-col w-full gap-8 items-start px-8 py-4">
                    <div className="text-start text-3xl font-semibold text-white">
                      Do you want to analyze your data?
                    </div>

                    <p className="text-start text-[17px] w-full mt-4 leading-8 text-[#FFFFFFB3]">
                      Start by exploring trends in your call analytics below.
                      You can adjust the values to reflect your real production
                      data and immediately see how performance patterns change
                      over time.
                    </p>

                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <Button
                        variant="outline"
                            size="lg"
                         className="text-white rounded-full h-16 px-8 text-md cursor-pointer bg-violet-500 text-[16px] hover:text-[#FFFFFF] hover:border-2 hover:bg-transparent hover:border-amber-50">
                          Edit chart Data
                        </Button>
                      </DialogTrigger>

                      <DialogContent className="max-w-131.25 bg-gray-800 p-12 text-white rounded-xl border border-gray-600">
                        <DialogHeader>
                          <DialogTitle>Enter Email</DialogTitle>
                          <DialogDescription>
                            Enter your email here. Click save when done.
                          </DialogDescription>
                        </DialogHeader>

                        <form
                          onSubmit={async (e) => {
                            await handleEmailSubmit(e);
                            setOpen(false);
                          }}
                          className="grid gap-6"
                        >
                          <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>

                          <DialogFooter>
                            <DialogClose asChild>
                              <Button type="button" variant="outline">
                                Cancel
                              </Button>
                            </DialogClose>
                            <Button
                              type="submit"
                              variant="default"
                              className="bg-violet-500"
                            >
                              Submit
                            </Button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <div className="flex flex-row gap-10">
                  <div className="flex flex-col w-full gap-8 items-start py-4">
                    <p className="text-start text-[17px] w-full mt-4 leading-8 text-[#FFFFFFB3] pr-8">
                      The chart below visualizes call activity trends using
                      sample data. You can replace these values with your own
                      metrics to better reflect real production behavior. As you
                      update the data, the chart will instantly adapt, helping
                      you identify patterns, anomalies, and performance shifts
                      across time without leaving the dashboard.
                    </p>
                    <Dialog>
                      <form>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="lg"
                            className="text-white rounded-full h-16 px-8 text-md cursor-pointer bg-violet-500 text-[16px] hover:text-[#FFFFFF] hover:border-2 hover:bg-transparent hover:border-amber-50"
                          >
                            Edit chart Data
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-131.25 bg-gray-800 border border-gray-600 p-12 text-white rounded-xl">
                          <DialogHeader>
                            <DialogTitle className="text-lg font-semibold">
                              Enter Email
                            </DialogTitle>
                            <DialogDescription className="text-gray-400">
                              Enter you email here. Click save when you're done.
                            </DialogDescription>
                          </DialogHeader>

                          <form className="grid gap-6">
                            <div className="grid gap-2">
                              <Label htmlFor="email" className="text-sm">
                                Email
                              </Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className="rounded-md bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-violet-500"
                                required
                              />
                            </div>

                            <DialogFooter className="gap-2">
                              <DialogClose asChild>
                                <Button
                                  type="button"
                                  variant="outline"
                                  className="rounded-md border-gray-600 text-white hover:bg-gray-700"
                                >
                                  Cancel
                                </Button>
                              </DialogClose>

                              <Button
                                type="submit"
                                className="rounded-md bg-violet-600 hover:bg-violet-700 text-white"
                              >
                                Submit
                              </Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </form>
                    </Dialog>
                  </div>
                  <Card className="w-full rounded-4xl border border-gray-600 p-12 bg-gray-800 text-start">
                    <p className="text-[#FFFFFFB3] font-semibold text-[12px] tracking-[1.4px]">
                      MANY VARIATIONS OF PASSAGES
                    </p>
                    <h3 className="text-[24px] mt-4 mb-6 font-semibold text-white">
                      You're flying blind in production.
                    </h3>
                    <ChartPieDonut />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AlertDialogDemo
        open={showOverwriteAlert}
        onOpenChange={setShowOverwriteAlert}
        onConfirm={() => {
          setChartData(previousValues);
          setCanEditChart(true);
          handleAllowAnalysis();
          setShowAnalyticsForm(true);
        }}
      />

      <NewUserAlert
        open={showNewAlert}
        onOpenChange={setShowNewAlert}
        onConfirm={() => {
          setCanEditChart(true);
          handleAllowAnalysis();
          setShowAnalyticsForm(true);
        }}
      />

      <AnalyticsFormDialog
        open={showAnalyticsForm}
        onOpenChange={setShowAnalyticsForm}
        email={email}
        onSaved={(newData) => {
          setChartData(newData);
        }}
      />
    </>
  );
}
