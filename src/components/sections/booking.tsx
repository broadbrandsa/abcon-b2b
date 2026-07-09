"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const SLOTS = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

export function Booking({ triggerClassName, label = "Book a private viewing" }: { triggerClassName?: string; label?: string }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [slot, setSlot] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) {
          setSubmitted(false);
          setSlot(null);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button className={triggerClassName}>{label}</Button>
      </DialogTrigger>
      <DialogContent className="booking-dialog">
        <DialogHeader>
          <DialogTitle className="booking-title">Book a private viewing</DialogTitle>
          <DialogDescription>Pick a date and time, the Abcon team will confirm by email.</DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="booking-success" role="status">
            <span className="booking-tick">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <h3>Request sent.</h3>
            <p>Thanks, we&apos;ll confirm your viewing{slot ? ` around ${slot}` : ""} shortly.</p>
          </div>
        ) : (
          <form className="booking-form" onSubmit={onSubmit}>
            <div className="bk-row">
              <label className="bk-field">
                <span>Preferred date</span>
                <input type="date" name="date" required />
              </label>
              <label className="bk-field">
                <span>Time</span>
                <select name="time" required defaultValue="" onChange={(e) => setSlot(e.target.value)}>
                  <option value="" disabled>
                    Choose…
                  </option>
                  {SLOTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="bk-row">
              <label className="bk-field">
                <span>Name</span>
                <input type="text" name="name" required autoComplete="name" placeholder="Olivia Rhye" />
              </label>
              <label className="bk-field">
                <span>Company</span>
                <input type="text" name="company" defaultValue="Nedbank" autoComplete="organization" />
              </label>
            </div>
            <label className="bk-field">
              <span>Anything we should prepare?</span>
              <textarea name="message" rows={3} placeholder="Who's joining, areas of interest…" />
            </label>
            <Button
              type="submit"
              className="h-auto w-full rounded-full bg-[var(--emerald)] px-7 py-4 text-[15px] font-semibold text-white shadow-none transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--emerald-bright)]"
            >
              Request viewing
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
