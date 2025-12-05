"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    "full-name": "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div>
        <label
          className="block text-sm font-medium text-slate-600 dark:text-white/80 mb-2"
          htmlFor="full-name"
        >
          Full Name
        </label>
        <input
          className="block w-full rounded-lg border-slate-300 dark:border-[#473324] bg-white dark:bg-[#2c2017] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus:border-primary focus:ring-primary border px-3 py-2"
          id="full-name"
          name="full-name"
          placeholder="Your Name"
          type="text"
          value={formData["full-name"]}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-slate-600 dark:text-white/80 mb-2"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className="block w-full rounded-lg border-slate-300 dark:border-[#473324] bg-white dark:bg-[#2c2017] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus:border-primary focus:ring-primary border px-3 py-2"
          id="email"
          name="email"
          placeholder="you@example.com"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-slate-600 dark:text-white/80 mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="block w-full rounded-lg border-slate-300 dark:border-[#473324] bg-white dark:bg-[#2c2017] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus:border-primary focus:ring-primary border px-3 py-2"
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button
        className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#6b4a49] dark:bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
        type="submit"
      >
        <span className="truncate">Send Message</span>
      </button>
    </form>
  );
}

