import { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContactLink } from "@/components/ContactLink";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a project in mind or want to collaborate? Reach out to Rufus Gladness for software development and architectural consulting.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
          <Header />
          <main className="flex flex-col gap-12 sm:gap-16 md:gap-24 px-4 py-12 md:py-20">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="font-handwriting text-5xl md:text-6xl font-bold leading-tight tracking-[-0.033em] text-primary">
                  Let&apos;s build something great together.
                </h1>
                <p className="text-slate-500 dark:text-[#c8a993] text-base font-normal leading-normal">
                  Have a project in mind or just want to say hi? Feel free to
                  reach out.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="flex flex-col gap-6">
                <ContactLink
                  href="mailto:rufus.kenny09@gmail.com"
                  icon="mail"
                  label="rufus.kenny09@gmail.com"
                  showCopy
                />
                <ContactLink
                  href="#"
                  icon="calendar_month"
                  label="Schedule a Meeting"
                  showArrow
                />
                <ContactLink
                  href="https://www.linkedin.com/in/gladness-rufus/"
                  icon="linkedin"
                  label="LinkedIn Profile"
                  showArrow
                />
                <ContactLink
                  href="https://github.com/RkayG"
                  icon="github"
                  label="GitHub Profile"
                  showArrow
                />
              </div>
              <ContactForm />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

