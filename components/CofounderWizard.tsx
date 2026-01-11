"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedButton } from "@/components/AnimatedButton";

interface WizardData {
  "full-name": string;
  email: string;
  "idea-description": string;
  "background-role": string;
  "stage-of-idea": string;
  timeline: string;
  "technical-needs": string[];
  "equity-compensation": string;
  // Add more fields for other steps later
}

export function CofounderWizard() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [formData, setFormData] = useState<WizardData>({
    "full-name": "",
    email: "",
    "idea-description": "",
    "background-role": "",
    "stage-of-idea": "",
    timeline: "",
    "technical-needs": [],
    "equity-compensation": "",
  });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (value: string) => {
    setFormData({
      ...formData,
      "technical-needs": formData["technical-needs"].includes(value)
        ? formData["technical-needs"].filter((item) => item !== value)
        : [...formData["technical-needs"], value],
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCancel = () => {
    // Reset form and navigate back
    setCurrentStep(1);
    setFormData({
      "full-name": "",
      email: "",
      "idea-description": "",
      "background-role": "",
      "stage-of-idea": "",
      timeline: "",
      "technical-needs": [],
      "equity-compensation": "",
    });
    setIsConfirmed(false);
    setStatus("idle");
    setErrorMessage("");
    router.push("/");
  };

  const handleSubmit = async () => {
    if (isConfirmed) {
      setStatus("loading");
      setErrorMessage("");

      try {
        const response = await fetch("/api/cofounder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to send application");
        }

        setStatus("success");
      } catch (error) {
        setStatus("error");
        setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
      }
    }
  };

  const handleEditStep = (step: number) => {
    setCurrentStep(step);
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  // Show Thank You page if submitted
  if (status === "success") {
    return (
      <div className="relative flex min-h-screen w-full flex-col">
        <div className="flex-grow">
          <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
            <Header />
            <main className="flex flex-1 flex-col items-center justify-center text-center py-20 px-4">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary !text-5xl">check_circle</span>
              </div>
              <h1 className="font-handwriting text-primary text-5xl md:text-6xl font-bold leading-tight pb-4">
                Thank You!
              </h1>
              <p className="max-w-xl text-lg font-normal leading-relaxed text-[#9a6c4c] dark:text-[#a18a7c] pb-8">
                I have received your submission. I&apos;ll review your
                details and get back to you shortly.
              </p>
              <div className="flex w-fit mx-auto max-w-md flex-col sm:flex-row gap-4">
                <AnimatedButton href="/">Return to Homepage</AnimatedButton>

              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
          <Header />
          <main className="flex-1">

            {/* Main Content */}
            {currentStep === 4 ? (
              <div className="flex h-full grow flex-col">
                <div className="container mx-auto flex flex-1 flex-col px-4 py-10 sm:py-16">
                  <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-subtle-light dark:text-subtle-dark">
                      <button onClick={() => handleEditStep(1)} className="hover:text-primary">
                        Step 1: Your Project
                      </button>
                      <span className="material-symbols-outlined text-lg">chevron_right</span>
                      <button onClick={() => handleEditStep(2)} className="hover:text-primary">
                        Step 2: Ideal Cofounder
                      </button>
                      <span className="material-symbols-outlined text-lg">chevron_right</span>
                      <button onClick={() => handleEditStep(3)} className="hover:text-primary">
                        Step 3: Your Profile
                      </button>
                      <span className="material-symbols-outlined text-lg">chevron_right</span>
                      <span className="font-bold text-primary">Step 4: Review</span>
                    </div>

                    {/* Page Heading */}
                    <div className="flex flex-col gap-2 text-center">
                      <h1 className="font-handwriting text-5xl font-bold text-primary sm:text-6xl">
                        Review Your Submission
                      </h1>
                      <p className="text-subtle-light dark:text-subtle-dark">
                        Please review the details below before submitting.
                      </p>
                    </div>

                    {/* Summary Cards */}
                    <div className="flex flex-col gap-8">
                      {/* Card 1: Project Details */}
                      <div className="rounded-xl border border-black/10 bg-white dark:border-white/10 dark:bg-background-dark/50">
                        <div className="flex items-center justify-between border-b border-black/10 p-4 dark:border-white/10 sm:p-6">
                          <h3 className="font-handwriting text-2xl font-semibold text-primary sm:text-3xl">
                            Project Details
                          </h3>
                          <button
                            onClick={() => handleEditStep(2)}
                            className="flex items-center gap-1 text-sm font-medium text-subtle-light hover:text-primary dark:text-subtle-dark dark:hover:text-accent"
                          >
                            <span className="material-symbols-outlined text-base">edit</span>
                            <span>Edit</span>
                          </button>
                        </div>
                        <div className="grid grid-cols-1 divide-y divide-black/5 p-4 dark:divide-white/5 sm:grid-cols-[200px_1fr] sm:divide-y-0 sm:p-6">
                          <p className="py-3 text-sm font-medium text-subtle-light dark:text-subtle-dark sm:py-2">
                            Elevator Pitch
                          </p>
                          <p className="py-3 text-sm sm:py-2">{formData["idea-description"] || "Not provided"}</p>
                          <p className="py-3 text-sm font-medium text-subtle-light dark:text-subtle-dark sm:py-2 sm:border-t sm:border-black/5 dark:sm:border-white/5">
                            Current Stage
                          </p>
                          <p className="py-3 text-sm sm:py-2 sm:border-t sm:border-black/5 dark:sm:border-white/5 capitalize">
                            {formData["stage-of-idea"] || "Not provided"}
                          </p>
                          <p className="py-3 text-sm font-medium text-subtle-light dark:text-subtle-dark sm:py-2 sm:border-t sm:border-black/5 dark:sm:border-white/5">
                            Timeline
                          </p>
                          <p className="py-3 text-sm sm:py-2 sm:border-t sm:border-black/5 dark:sm:border-white/5">
                            {formData.timeline || "Not provided"}
                          </p>
                        </div>
                      </div>

                      {/* Card 2: Ideal Cofounder */}
                      <div className="rounded-xl border border-black/10 bg-white dark:border-white/10 dark:bg-background-dark/50">
                        <div className="flex items-center justify-between border-b border-black/10 p-4 dark:border-white/10 sm:p-6">
                          <h3 className="font-handwriting text-2xl font-semibold text-primary sm:text-3xl">
                            Ideal Cofounder Profile
                          </h3>
                          <button
                            onClick={() => handleEditStep(3)}
                            className="flex items-center gap-1 text-sm font-medium text-subtle-light hover:text-primary dark:text-subtle-dark dark:hover:text-accent"
                          >
                            <span className="material-symbols-outlined text-base">edit</span>
                            <span>Edit</span>
                          </button>
                        </div>
                        <div className="grid grid-cols-1 divide-y divide-black/5 p-4 dark:divide-white/5 sm:grid-cols-[200px_1fr] sm:divide-y-0 sm:p-6">
                          <p className="py-3 text-sm font-medium text-subtle-light dark:text-subtle-dark sm:py-2">
                            Required Technical Skills
                          </p>
                          <p className="py-3 text-sm sm:py-2">
                            {formData["technical-needs"].length > 0
                              ? formData["technical-needs"].join(", ")
                              : "Not provided"}
                          </p>
                          <p className="py-3 text-sm font-medium text-subtle-light dark:text-subtle-dark sm:py-2 sm:border-t sm:border-black/5 dark:sm:border-white/5">
                            Equity/Compensation
                          </p>
                          <p className="py-3 text-sm sm:py-2 sm:border-t sm:border-black/5 dark:sm:border-white/5">
                            {formData["equity-compensation"] || "Not provided"}
                          </p>
                        </div>
                      </div>

                      {/* Card 3: Your Information */}
                      <div className="rounded-xl border border-black/10 bg-white dark:border-white/10 dark:bg-background-dark/50">
                        <div className="flex items-center justify-between border-b border-black/10 p-4 dark:border-white/10 sm:p-6">
                          <h3 className="font-handwriting text-2xl font-semibold text-primary sm:text-3xl">
                            Your Information
                          </h3>
                          <button
                            onClick={() => handleEditStep(1)}
                            className="flex items-center gap-1 text-sm font-medium text-subtle-light hover:text-primary dark:text-subtle-dark dark:hover:text-accent"
                          >
                            <span className="material-symbols-outlined text-base">edit</span>
                            <span>Edit</span>
                          </button>
                        </div>
                        <div className="grid grid-cols-1 divide-y divide-black/5 p-4 dark:divide-white/5 sm:grid-cols-[200px_1fr] sm:divide-y-0 sm:p-6">
                          <p className="py-3 text-sm font-medium text-subtle-light dark:text-subtle-dark sm:py-2">
                            Your Name
                          </p>
                          <p className="py-3 text-sm sm:py-2">{formData["full-name"] || "Not provided"}</p>
                          <p className="py-3 text-sm font-medium text-subtle-light dark:text-subtle-dark sm:py-2 sm:border-t sm:border-black/5 dark:sm:border-white/5">
                            Your Role / Skills
                          </p>
                          <p className="py-3 text-sm sm:py-2 sm:border-t sm:border-black/5 dark:sm:border-white/5">
                            {formData["background-role"] || "Not provided"}
                          </p>
                          <p className="py-3 text-sm font-medium text-subtle-light dark:text-subtle-dark sm:py-2 sm:border-t sm:border-black/5 dark:sm:border-white/5">
                            Contact Information
                          </p>
                          <p className="py-3 text-sm sm:py-2 sm:border-t sm:border-black/5 dark:sm:border-white/5">
                            {formData.email || "Not provided"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Confirmation */}
                    <div className="mt-4 flex flex-col items-center justify-center gap-4">
                      {status === "error" && (
                        <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-900/10 rounded-lg">
                          {errorMessage}
                        </div>
                      )}

                      <label className="flex cursor-pointer items-center gap-3" htmlFor="confirmation">
                        <input
                          className="h-5 w-5 rounded border-black/20 bg-transparent text-primary focus:ring-primary/50 dark:border-white/20"
                          id="confirmation"
                          type="checkbox"
                          checked={isConfirmed}
                          onChange={(e) => setIsConfirmed(e.target.checked)}
                          disabled={status === "loading"}
                        />
                        <span className="text-sm text-subtle-light dark:text-subtle-dark">
                          I confirm that the information provided is accurate.
                        </span>
                      </label>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-col-reverse items-center justify-between gap-4 border-t border-black/10 pt-8 dark:border-white/10 sm:flex-row">
                      <AnimatedButton
                        onClick={handlePrevious}
                        variant="ghost"
                        direction="left"
                        disabled={status === "loading"}
                      >
                        Previous
                      </AnimatedButton>
                      <AnimatedButton
                        onClick={handleSubmit}
                        disabled={!isConfirmed || status === "loading"}
                        className={!isConfirmed || status === "loading" ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
                      >
                        {status === "loading" ? "Submitting..." : "Submit Application"}
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`flex w-full ${currentStep === 3 ? 'max-w-4xl' : 'max-w-2xl'} flex-col items-center justify-center p-4 pt-12 sm:pt-16 md:pt-24 mx-auto`}>
                <div className={`flex w-full flex-col gap-8 ${currentStep === 3 ? '' : 'rounded-xl border border-[#D7CCC8] dark:border-[#473324]'} bg-background-light dark:bg-[#2c2017] p-6 sm:p-8 md:p-12`}>
                  {/* Progress Bar */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-6">
                      <p className="text-sm font-medium text-primary">
                        {currentStep === 3 ? `Step ${currentStep}/${totalSteps}` : `Step ${currentStep} of ${totalSteps}`}
                      </p>
                      {currentStep === 3 && (
                        <p className="text-sm font-medium text-primary">{progressPercentage}%</p>
                      )}
                    </div>
                    <div className={`h-2 rounded-full ${currentStep === 3 ? 'bg-primary/20 dark:bg-primary/30' : 'bg-[#EFEBE9] dark:bg-background-dark'}`}>
                      <div
                        className="h-2 rounded-full bg-primary transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Step 1: Introduction & Contact */}
                  {currentStep === 1 && (
                    <>
                      {/* Page Heading */}
                      <div className="flex flex-col gap-2 text-center">
                        <h1 className="font-handwriting text-5xl font-bold text-primary sm:text-6xl">
                          Want a Technical Co-founder?
                        </h1>
                        <p className="text-base text-text-light/80 dark:text-text-dark/80">
                          I&apos;d like to get to know you better. Please fill out the form below.
                        </p>
                      </div>

                      {/* Form Fields */}
                      <div className="flex flex-col gap-6">
                        <label className="flex flex-col gap-2">
                          <p className="font-handwriting text-2xl font-semibold text-primary">Full Name</p>
                          <input
                            className="flex w-full resize-none rounded-lg border border-[#D7CCC8] bg-background-light p-3 text-base text-text-light placeholder:text-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-[#473324] dark:bg-background-dark dark:text-text-dark dark:placeholder:text-text-dark/50 dark:focus:border-primary"
                            placeholder="Enter your full name"
                            type="text"
                            name="full-name"
                            value={formData["full-name"]}
                            onChange={handleChange}
                            required
                          />
                        </label>

                        <label className="flex flex-col gap-2">
                          <p className="font-handwriting text-2xl font-semibold text-primary">Email Address</p>
                          <input
                            className={`flex w-full resize-none rounded-lg border bg-background-light p-3 text-base text-text-light placeholder:text-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:bg-background-dark dark:text-text-dark dark:placeholder:text-text-dark/50 dark:focus:border-primary ${formData.email && !validateEmail(formData.email)
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                              : "border-[#D7CCC8] dark:border-[#473324]"
                              }`}
                            placeholder="Enter your email address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          {formData.email && !validateEmail(formData.email) && (
                            <p className="text-sm text-red-500">Please enter a valid email address.</p>
                          )}
                        </label>
                      </div>
                    </>
                  )}

                  {/* Step 2: Idea & Background */}
                  {currentStep === 2 && (
                    <>
                      {/* Page Heading */}
                      <div className="flex flex-col gap-3">
                        <h1 className="font-handwriting text-4xl sm:text-5xl font-bold leading-tight text-primary">
                          Tell me about your idea and yourself.
                        </h1>
                        <p className="text-base font-normal leading-normal text-[#9a6c4c] dark:text-[#a18c7c]">
                          This helps me understand your vision.
                        </p>
                      </div>

                      {/* Form Fields */}
                      <div className="flex flex-col gap-6">
                        <label className="flex flex-col w-full">
                          <p className="font-handwriting text-2xl pb-2 text-primary">Describe your idea</p>
                          <textarea
                            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#D7CCC8] dark:border-[#473324] bg-background-light dark:bg-[#2a1f16] focus:border-primary dark:focus:border-primary min-h-36 placeholder:text-[#9a6c4c] dark:placeholder:text-[#a18c7c] p-[15px] text-base font-normal leading-normal"
                            placeholder="Keep it concise, 2-3 sentences is perfect."
                            name="idea-description"
                            value={formData["idea-description"]}
                            onChange={handleChange}
                            required
                          />
                        </label>

                        <label className="flex flex-col w-full">
                          <p className="font-handwriting text-2xl pb-2 text-primary">Your Background & Role</p>
                          <input
                            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#D7CCC8] dark:border-[#473324] bg-background-light dark:bg-[#2a1f16] focus:border-primary dark:focus:border-primary h-14 placeholder:text-[#9a6c4c] dark:placeholder:text-[#a18c7c] p-[15px] text-base font-normal leading-normal"
                            placeholder="e.g., Business Lead, Marketing Expert, Designer"
                            type="text"
                            name="background-role"
                            value={formData["background-role"]}
                            onChange={handleChange}
                            required
                          />
                        </label>
                      </div>
                    </>
                  )}

                  {/* Step 3: Technical Needs & Terms */}
                  {currentStep === 3 && (
                    <>
                      {/* Page Heading */}
                      <div className="flex flex-col gap-2 text-center">
                        <h1 className="font-handwriting text-4xl font-bold text-primary dark:text-primary/90 tracking-wide sm:text-5xl">
                          Technical Needs & Terms
                        </h1>
                        <p className="text-base text-neutral-600 dark:text-neutral-400">
                          Detail the technical skills you need and the terms of the partnership.
                        </p>
                      </div>

                      {/* Form Content */}
                      <div className="mt-6 space-y-8">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                          {/* Left Column: Dropdowns and Inputs */}
                          <div className="space-y-8">
                            {/* Stage of Idea */}
                            <label className="flex flex-col">
                              <p className="pb-2 font-handwriting text-2xl font-bold text-primary/90 dark:text-primary/80">
                                Stage of Idea
                              </p>
                              <select
                                className="h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-2 border-primary/20 bg-background-light p-4 text-base font-normal leading-normal text-neutral-800 placeholder:text-neutral-500 focus:border-primary focus:outline-0 focus:ring-0 dark:border-primary/40 dark:bg-background-dark/50 dark:text-neutral-200 dark:placeholder:text-neutral-400"
                                name="stage-of-idea"
                                value={formData["stage-of-idea"]}
                                onChange={handleChange}
                                required
                              >
                                <option value="">Select stage</option>
                                <option value="concept">Concept</option>
                                <option value="prototyping">Prototyping</option>
                                <option value="mvp">MVP</option>
                                <option value="beta">Beta</option>
                                <option value="launched">Launched</option>
                              </select>
                            </label>

                            {/* Timeline */}
                            <label className="flex flex-col">
                              <p className="pb-2 font-handwriting text-2xl font-bold text-primary/90 dark:text-primary/80">
                                Timeline
                              </p>
                              <input
                                className="h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-2 border-primary/20 bg-background-light p-4 text-base font-normal leading-normal text-neutral-800 placeholder:text-neutral-500 focus:border-primary focus:outline-0 focus:ring-0 dark:border-primary/40 dark:bg-background-dark/50 dark:text-neutral-200 dark:placeholder:text-neutral-400"
                                placeholder="e.g., ASAP, Within 3 months, Q4 2025"
                                type="text"
                                name="timeline"
                                value={formData.timeline}
                                onChange={handleChange}
                                required
                              />
                            </label>
                          </div>

                          {/* Right Column: Checkboxes */}
                          <div className="space-y-4">
                            <p className="font-handwriting text-2xl font-bold text-primary/90 dark:text-primary/80">
                              What You&apos;re Looking For
                            </p>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                              {["Full-stack", "Backend", "Frontend", "Mobile", "Blockchain", "DevOps"].map((skill) => (
                                <label key={skill} className="flex items-center gap-x-3">
                                  <input
                                    className="h-5 w-5 rounded border-2 border-primary/30 text-primary focus:ring-0 focus:ring-offset-0 checked:border-primary checked:bg-primary"
                                    type="checkbox"
                                    checked={formData["technical-needs"].includes(skill)}
                                    onChange={() => handleCheckboxChange(skill)}
                                  />
                                  <span className="text-base font-normal text-neutral-800 dark:text-neutral-300">
                                    {skill}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Full-width Textarea */}
                        <div className="pt-2">
                          <label className="flex flex-col">
                            <p className="pb-2 font-handwriting text-2xl font-bold text-primary/90 dark:text-primary/80">
                              Equity/Compensation Structure
                            </p>
                            <textarea
                              className="min-h-36 w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg border-2 border-primary/20 bg-background-light p-4 text-base font-normal leading-normal text-neutral-800 placeholder:text-neutral-500 focus:border-primary focus:outline-0 focus:ring-0 dark:border-primary/40 dark:bg-background-dark/50 dark:text-neutral-200 dark:placeholder:text-neutral-400"
                              placeholder="e.g., 50/50 equity split, small salary + equity..."
                              name="equity-compensation"
                              value={formData["equity-compensation"]}
                              onChange={handleChange}
                              required
                            />
                          </label>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Action Buttons */}
                  <div className={`mt-4 flex items-center justify-between ${currentStep === 3 ? 'mt-12 border-t border-primary/20 dark:border-primary/40 pt-8' : 'pt-6 border-t border-[#D7CCC8] dark:border-[#473324]'} ${currentStep === 1 ? 'flex-col-reverse gap-4 sm:flex-row sm:justify-end' : ''}`}>
                    {currentStep === 1 ? (
                      <AnimatedButton onClick={handleCancel} variant="ghost" direction="left">
                        Cancel
                      </AnimatedButton>
                    ) : (
                      <AnimatedButton onClick={handlePrevious} variant="ghost" direction="left">
                        Previous
                      </AnimatedButton>
                    )}
                    <AnimatedButton
                      onClick={handleNext}
                      className={
                        ((currentStep === 1 && (!formData["full-name"] || !validateEmail(formData.email))) ||
                          (currentStep === 2 && (!formData["idea-description"] || !formData["background-role"])) ||
                          (currentStep === 3 && (!formData["stage-of-idea"] || !formData.timeline || formData["technical-needs"].length === 0 || !formData["equity-compensation"])))
                          ? "opacity-50 cursor-not-allowed pointer-events-none"
                          : ""
                      }
                    >
                      {currentStep === 1 ? "Next" : currentStep === totalSteps ? "Submit" : "Next"}
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
