"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { contact, company } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import styles from "./Contact.module.scss";

const validators = {
  name: (v) => (v.trim().length >= 2 ? "" : "Please enter your name."),
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Enter a valid email address.",
  subject: (v) => (v.trim().length >= 3 ? "" : "Please add a subject."),
  message: (v) => (v.trim().length >= 10 ? "" : "Message must be at least 10 characters."),
};

const fields = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
  { name: "subject", label: "Subject", type: "text", placeholder: "How can we help?" },
];

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: validators[name](value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    Object.keys(validators).forEach((k) => {
      const msg = validators[k](values[k]);
      if (msg) next[k] = msg;
    });
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // No backend in a static export — simulate a successful submission.
      setSent(true);
      setValues({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section id="contact" className={`${styles.root} section`}>
      <div className="container-x">
        <SectionHeading
          badge="Contact Us"
          title="Let's build success together"
          subtitle="Tell us about your goals — we'll get back to you shortly."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* info */}
          <Reveal>
            <div className="h-full rounded-3xl bg-navy-grad p-8 text-white shadow-lift">
              <h3 className="text-xl font-bold text-white">{company.name}</h3>
              <p className="mt-2 text-white/65">{company.tagline}</p>

              <ul className="mt-8 space-y-5">
                {contact.items.map((c) => {
                  const Icon = getIcon(c.icon);
                  const content = (
                    <span className="flex items-center gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold-light">
                        <Icon size={20} />
                      </span>
                      <span className="text-white/85">{c.label}</span>
                    </span>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a href={c.href} className="transition-colors hover:text-gold-light">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>

              <p className="mt-8 font-script text-xl text-gold-light">{company.slogan}</p>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-black/5 bg-cream p-8 shadow-card md:p-10"
            >
              {sent && (
                <div className="mb-6 flex items-center gap-3 rounded-xl border border-gold/30 bg-gold/10 p-4 text-gold-700">
                  <CheckCircle2 size={20} />
                  <p className="text-sm font-medium">
                    Thank you! Your message has been received. We&apos;ll be in touch soon.
                  </p>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((f) => (
                  <div key={f.name} className={f.name === "subject" ? "sm:col-span-2" : ""}>
                    <label
                      htmlFor={f.name}
                      className="mb-1.5 block font-heading text-sm font-semibold text-navy"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      value={values[f.name]}
                      onChange={(e) => update(f.name, e.target.value)}
                      placeholder={f.placeholder}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15 ${
                        errors[f.name] ? "border-red-400" : "border-black/10"
                      }`}
                    />
                    {errors[f.name] && (
                      <p className="mt-1 text-xs text-red-500">{errors[f.name]}</p>
                    )}
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-heading text-sm font-semibold text-navy"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Write your message..."
                    className={`w-full resize-y rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15 ${
                      errors.message ? "border-red-400" : "border-black/10"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>
              </div>

              <button type="submit" className="btn-navy mt-6 w-full">
                Send Message <Send size={17} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
