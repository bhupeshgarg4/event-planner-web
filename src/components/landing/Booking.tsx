import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { Section, SectionHeader } from "./Section";

const eventTypes = [
  "Wedding",
  "Corporate",
  "College Fest",
  "school events",
  "concert Event",
  "cultural Event",
  "award nights",
];


export function Booking() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="booking">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeader
            center={false}
            eyebrow="Book the Stage"
            title={
              <>
                Let's design <span className="gold-gradient italic">your night.</span>
              </>
            }
            subtitle="Tell me a little about your event — I usually reply within 24 hours with a curated proposal."
          />
          <div className="space-y-4 text-sm text-white/65">
            <div>
              <span className="text-white/40 uppercase tracking-widest text-xs">Email</span>
              <div className="text-gold">your@email.com</div>
            </div>
            <div>
              <span className="text-white/40 uppercase tracking-widest text-xs">WhatsApp</span>
              <div className="text-gold">+91 89551 82955</div>
            </div>
            <div>
              <span className="text-white/40 uppercase tracking-widest text-xs">Based in</span>
              <div>India · Available Pan-India</div>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
         onSubmit={(e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const name = formData.get("name")?.toString() || "";
  const type = formData.get("type")?.toString() || "";
  const date = formData.get("date")?.toString() || "";
  const location = formData.get("location")?.toString() || "";
  const audience = formData.get("audience")?.toString() || "";
  const description = formData.get("description")?.toString() || "";

  const message = `Hi Garv,

I would like to enquire about booking you for an event.

Name: ${name}
Event Type: ${type}
Event Date: ${date}
Location: ${location}
Audience Size: ${audience || "Not specified"}

Event Details:
${description || "Not provided"}

Please let me know your availability and further details.

Thank you.`;

  const whatsappUrl = `https://wa.me/918955182955?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");

  setSent(true);
}}
          className="lg:col-span-7 glass rounded-3xl p-8 md:p-10 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Your Name" name="name" required />
            <Field label="Event Type" name="type" as="select" options={eventTypes} required />
            <Field label="Event Date" name="date" type="date" required />
            <Field label="Location" name="location" placeholder="City, Country" required />
            <Field label="Audience Size" name="audience" type="number" placeholder="e.g. 250" />
          
          </div>
          <Field
            label="Tell us about the event"
            name="description"
            as="textarea"
            placeholder="Vibe, theme, language, any special moments…"
          />

          <button
            type="submit"
            disabled={sent}
            className="group w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#f3d77a] via-[#d4af37] to-[#8a6a1f] text-black font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.55)] disabled:opacity-60"
          >
            {sent ? "Request Sent · Thank you" : "Send Booking Request"}
            {!sent && <Send className="h-4 w-4 group-hover:translate-x-1 transition" />}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  as = "input",
  options,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  as?: "input" | "select" | "textarea";
  options?: string[];
}) {
  const cls =
    "w-full bg-transparent border-b border-white/15 focus:border-[#d4af37] outline-none py-3 text-white placeholder:text-white/30 transition-colors";
  return (
    <label className="block group">
      <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 group-focus-within:text-gold transition-colors">
        {label}
        {required && " *"}
      </span>
      {as === "select" ? (
        <select required={required} name={name} className={`${cls} appearance-none`}>
          <option value="" className="bg-[#07060a]">Select…</option>
          {options?.map((o) => (
            <option key={o} value={o} className="bg-[#07060a]">
              {o}
            </option>
          ))}
        </select>
      ) : as === "textarea" ? (
        <textarea
          required={required}
          name={name}
          placeholder={placeholder}
          rows={4}
          className={`${cls} resize-none`}
        />
      ) : (
        <input
          required={required}
          type={type}
          name={name}
          placeholder={placeholder}
          className={cls}
        />
      )}
    </label>
  );
}