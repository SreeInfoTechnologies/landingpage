"use client";

import { useState, useCallback } from "react";
import { MapPin, Phone, Mail, Globe, Send } from "lucide-react";
import { contact, company } from "@/lib/data";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import Toast from "@/components/ui/Toast";
import styles from "./contact.module.scss";

const ICONS = { MapPin, Phone, Mail, Globe };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.subject.trim().length < 3) errors.subject = "Subject must be at least 3 characters.";
  if (values.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

const EMPTY = { name: "", email: "", subject: "", message: "" };

// Web3Forms access key — public by design (this is a static site). You can
// lock it to your domain and add captcha from the Web3Forms dashboard.
const ACCESS_KEY = "c7110036-e064-4abc-b11c-626df7a574f0";

export default function ContactPage() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  // "idle" | "submitting" | "sent" | "error"
  const [status, setStatus] = useState("idle");

  const closeToast = useCallback(() => setStatus("idle"), []);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === "sent" || status === "error") setStatus("idle");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          ...values,
          // Email metadata for the message that lands in your inbox.
          subject: `New contact form message: ${values.subject}`,
          from_name: values.name,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setValues(EMPTY);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.page}>
      {/* ---------- hero header ---------- */}
      <section className={styles.hero} id="contact">
        <div className="container-x">
          <Reveal as="p" className={styles.eyebrow}>
            Contact
          </Reveal>
          <Reveal as="h1" delay={0.05} className={styles.heading}>
            Let&apos;s build success <em>together.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.lead}>
            Tell us a bit about what you&apos;re working on, and we&apos;ll
            figure out how consulting, outsourcing, technology or marketing can
            help.
          </Reveal>
        </div>
      </section>

      {/* ---------- contact grid ---------- */}
      <section className={`${styles.body} ${styles.hairline}`}>
        <div className={`container-x ${styles.grid}`}>
          {/* LEFT — contact info card */}
          <Reveal as="aside" className={styles.info}>
            <p className={styles.infoTag}>Get in touch</p>
            <h2 className={styles.infoName}>{company.name}</h2>
            <p className={styles.infoTagline}>{company.tagline}</p>

            <Stagger className={styles.items} stagger={0.07}>
              {contact.items.map((it) => {
                const Icon = ICONS[it.icon];
                const inner = (
                  <>
                    <span className={styles.itemIc}>
                      {Icon ? <Icon size={20} strokeWidth={1.9} /> : null}
                    </span>
                    <span className={styles.itemLabel}>{it.label}</span>
                  </>
                );
                return (
                  <StaggerItem key={it.label} className={styles.cell}>
                    {it.href ? (
                      <a className={styles.item} href={it.href}>
                        {inner}
                      </a>
                    ) : (
                      <div className={styles.item}>{inner}</div>
                    )}
                  </StaggerItem>
                );
              })}
            </Stagger>

            <p className={styles.slogan}>{company.slogan}</p>
          </Reveal>

          {/* RIGHT — contact form */}
          <Reveal as="div" delay={0.1} className={styles.formWrap}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={`${styles.input} ${errors.name ? styles.inputErr : ""}`}
                  placeholder="Jane Doe"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && <p className={styles.err}>{errors.name}</p>}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`${styles.input} ${errors.email ? styles.inputErr : ""}`}
                  placeholder="jane@company.com"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p className={styles.err}>{errors.email}</p>}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className={`${styles.input} ${errors.subject ? styles.inputErr : ""}`}
                  placeholder="How can we help?"
                  value={values.subject}
                  onChange={handleChange}
                />
                {errors.subject && <p className={styles.err}>{errors.subject}</p>}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputErr : ""}`}
                  placeholder="Tell us a little about your goals…"
                  value={values.message}
                  onChange={handleChange}
                />
                {errors.message && <p className={styles.err}>{errors.message}</p>}
              </div>

              <button
                type="submit"
                className={styles.submit}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Send message"}
                <Send size={17} strokeWidth={2} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <Toast
        open={status === "sent" || status === "error"}
        variant={status === "error" ? "error" : "success"}
        message={
          status === "error"
            ? "Couldn't send your message. Please try again or email us directly."
            : "Thanks! Your message is on its way. We'll get back to you soon."
        }
        onClose={closeToast}
      />
    </div>
  );
}
