import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactLink } from "@/components/ContactLink";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
          <Header />
          <main className="flex-1 flex flex-col items-center justify-center py-20 gap-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-semibold text-primary dark:text-text-dark font-handwriting">
                Portfolio - Rufus Gladness
              </h1>
              <p className="mt-4 text-subtle-light dark:text-subtle-dark mb-6 text-lg">
                Welcome to my portfolio
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg h-12 px-6 bg-[#6b4a49] dark:bg-[#cf6417] text-white text-base font-bold hover:opacity-90 transition-opacity"
                >
                  View About Me
                </Link>
                <Link
                  href="/skills"
                  className="inline-flex items-center justify-center rounded-lg h-12 px-6 bg-[#6b4a49] dark:bg-[#cf6417] text-white text-base font-bold hover:opacity-90 transition-opacity"
                >
                  View Skills
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-lg h-12 px-6 bg-[#6b4a49] dark:bg-[#cf6417] text-white text-base font-bold hover:opacity-90 transition-opacity"
                >
                  View Projects
                </Link>
                
              </div>
             
            </div>

            {/* Get in Touch Section */}
            <section className="w-full max-w-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-semibold text-primary dark:text-text-dark font-handwriting mb-4">
                  Get in Touch
                </h2>
                <p className="text-subtle-light dark:text-subtle-dark text-base">
                  Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                </p>
              </div>
              
              <div className="bg-white dark:bg-[#2c2017] rounded-lg border border-slate-200 dark:border-[#473324] p-6 mb-6">
                <div className="flex flex-col gap-2">
                  <ContactLink
                    href="mailto:rufus.kenny09@gmail.com"
                    icon="mail"
                    label="rufus.kenny09@gmail.com"
                    showCopy
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
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg h-12 px-6 bg-[#6b4a49] dark:bg-[#cf6417] text-white text-base font-bold hover:opacity-90 transition-opacity"
                >
                  Send a Message
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
