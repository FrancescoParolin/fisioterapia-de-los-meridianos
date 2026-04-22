"use client";

import { useState, useTransition } from "react";
import type { Service } from "@/lib/services";
import type { Dictionary } from "@/lib/i18n";

type Props = {
  services: Service[];
  preselected?: string;
  dict: Dictionary["prenota"];
};

type Status = "idle" | "success" | "error";

export function BookingForm({ services, preselected, dict }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    startTransition(async () => {
      try {
        const res = await fetch("/api/prenota", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Invio fallito");
        setStatus("success");
        setMessage(dict.successMsg);
        form.reset();
      } catch {
        setStatus("error");
        setMessage(dict.errorMsg);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={dict.nome} name="nome" required />
        <Field label={dict.cognome} name="cognome" required />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={dict.email} name="email" type="email" required />
        <Field label={dict.telefono} name="telefono" type="tel" required />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          {dict.trattamento}
        </label>
        <select
          name="servizio"
          required
          defaultValue={preselected ?? ""}
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
        >
          <option value="" disabled>
            {dict.selectService}
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name} — {s.duration} min · €{s.price}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={dict.data} name="data" type="date" required />
        <Field label={dict.orario} name="orario" type="time" required />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          {dict.messaggio}
        </label>
        <textarea
          name="messaggio"
          rows={4}
          placeholder={dict.messaggioPlaceholder}
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm text-background hover:bg-foreground/85 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? dict.sending : dict.submit}
      </button>

      {status !== "idle" && (
        <p
          className={`text-sm ${
            status === "success" ? "text-accent" : "text-red-600"
          }`}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
      />
    </div>
  );
}
