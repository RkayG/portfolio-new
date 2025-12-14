import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects } from "@/data/projects";
import { AnimatedButton } from "@/components/AnimatedButton";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params in Next.js 16+
  const { slug } = await params;
  
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Default project data for projects without detailed information
  const defaultGalleryImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAGWzrzVyOaV-6GhREOmfJqRhlez0d2cjEMVMIBe2wXMWt_WyOjSy3jdsdzFxcmP5OVZ4jacODopsr5B_MnfGkaIaCK2BkMKyH2oJ-rH4C3zd8G_tyzk1cuKgmsaJfFu_4G_K6UKsyyW2KWLIPnC_zSQJ2F0QTpKgzPFUf_-zrFVqCqOgCW7Wqh0fzhfZOXCKGvfRrnSYkwYC9lmkMZB-t_VoMSVMX-Sh2Z49jsk3XsszmGnnLswMLojSgVuFvFN3FJRD-xTSe346g",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBGYg8KRBfhnWex9PfaBYROuTTOHLZNTzi-CpYn-8_96YU5KNJQJ0ciiI7szujMheNX1vJctp2-WLDzE1ez0U4o29XybdWmyUUPWPwyifuV6iZxsEH4ztdqZ81_8M8jASx0sCyiuwKWF8jzqvHeTwt9d59eNeAfpWkO3QB02LKYjvjlJi-t_0n48YQh8gPVOK2sUYsgi5H-NlBkD_vA8d9foh3aBR54MJfCX7yhc1pDq-HwgYt99u2Ou6-qEp5_ryIKzcOTKgTVT6Q",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA1AzDnf2e_P4-1vBEq_fZ5oRDEFGo6ntVvKCGP4zlV3u9wcmtInz0n2XFSmFmj7bXcjw0FYXoOldi_bL2hYRxNbQomaMWz2qLIZ-uEAXvRXrJFxf10Cj0a-ChhPrYqTEl9dOrWnYASRFtNuZS8Z9kQkOULHzWL0YIi5AzHfULt8HbRvahc7HKwoCeYvxLrCdsaQ22i7ilrwNe3WtCf4y4FKS2EiWrFuoZhHwXgdBNYoV0kWbhgJ-d2Sf0GBUEnwLd0LHVzqfa1bLY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDNg5VP9a01l6NaWUDMIkd0nSgdBYQlHv6xRyBUeh7MvoKuBf8STHEbuusJsa0Q1hdeZDFJr933GzSK71IylClsaYq0tAOmFP-QnmRWduTtymM6Oro3QuH0hdQusQ9F-fqIzz_a1YQBeCED1FmpWvqdaerfOrLlaOnK59TwdWkjoK2imgEcKim3RXQeAH2_BBSHIjRUJiqEDMjw22HCw3QCk9UNUY514TBAhduaNkN-RH3bY_KkPC535mn77GV7DQe9k3XFdhpXEA8",
  ];

  const defaultOverview = "This project involved building a full-stack e-commerce platform from the ground up. The goal was to create a scalable, secure, and user-friendly online store with features like product management, a shopping cart, secure checkout, and user authentication. The platform is designed to be highly performant and easily customizable for different types of products. We focused on a clean UI/UX to ensure a smooth and intuitive shopping experience for customers, driving engagement and sales.";

  const defaultChallenges = [
    "One of the primary challenges was ensuring the payment gateway integration was both secure and seamless. We implemented Stripe's API, leveraging its robust security features and webhooks to handle payment processing and order status updates in real-time. This required careful handling of sensitive user data and thorough testing to prevent any vulnerabilities.",
    "Another challenge was optimizing database queries for performance, especially for product filtering and search functionalities. We solved this by implementing advanced indexing strategies and caching frequently accessed data with Redis, which significantly reduced page load times and improved the overall user experience.",
  ];

  const defaultResults = "The final platform successfully launched and handled a high volume of traffic without performance degradation. The streamlined checkout process led to a 15% increase in conversion rates compared to the previous system. The project not only met all client requirements but also provided a solid foundation for future feature enhancements and scalability. It was a great learning experience in building a complex, real-world application.";

  const defaultRole = "Full-Stack Developer";
  const defaultRoleDescription = "Responsible for backend architecture, database design, and frontend implementation.";

  const galleryImages = project.galleryImages || defaultGalleryImages;
  const overview = project.overview || defaultOverview;
  const challenges = project.challenges;
  const results = project.results;
  const role = project.role || defaultRole;
  const roleDescription = project.roleDescription || defaultRoleDescription;

  return (
    <div className="relative flex  min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">   
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/projects"
                className="text-[#8D6E63] dark:text-[#8D6E63]/80 text-base font-medium leading-normal hover:underline"
              >
                All Projects
              </Link>
              <span className="text-[#333333]/50 dark:text-[#E0E0E0]/50 text-base font-medium leading-normal">
                /
              </span>
              <span className="text-[#333333] dark:text-[#E0E0E0] text-base font-medium leading-normal">
                {project.title}
              </span>
            </div>

            {/* Project Header */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="font-handwriting text-5xl md:text-7xl font-bold text-[#5D4037] dark:text-[#8D6E63]">
                  {project.title}
                </h1>
                <p className="text-lg text-[#333333]/80 dark:text-[#E0E0E0]/80">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {project.liveDemoUrl && project.liveDemoUrl !== "#" && project.liveDemoUrl.trim() !== "" && (
                  <AnimatedButton
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </AnimatedButton>
                )}
                {project.githubUrl && project.githubUrl !== "#" && project.githubUrl.trim() !== "" && (
                  <AnimatedButton
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="ghost"
                  >
                    View on GitHub
                  </AnimatedButton>
                )}
              </div>
            </div>

            {/* Project Gallery */}
            {(galleryImages.length > 0 || project.videoUrl) && (
              <ProjectGallery 
                images={galleryImages} 
                imageAlt={project.imageAlt}
                videoUrl={project.videoUrl}
              />
            )}

            {/* Project Details */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 mt-8">
              <div className="flex flex-col gap-10 lg:col-span-2">
                <section>
                  <h2 className="font-handwriting text-4xl font-bold text-[#5D4037] dark:text-[#8D6E63] mb-4">
                    Project Overview
                  </h2>
                  <p className="text-base leading-relaxed text-[#333333]/90 dark:text-[#E0E0E0]/90 font-body">
                    {overview}
                  </p>
                </section>

                {challenges && challenges.length > 0 && (
                  <section>
                    <h2 className="font-handwriting text-4xl font-bold text-[#5D4037] dark:text-[#8D6E63] mb-4">
                      Challenges & Solutions
                    </h2>
                    <div className="space-y-4">
                      {challenges.map((challenge, index) => (
                        <p
                          key={index}
                          className="text-base leading-relaxed text-[#333333]/90 dark:text-[#E0E0E0]/90 font-body"
                        >
                          {challenge}
                        </p>
                      ))}
                    </div>
                  </section>
                )}

                {results && (
                  <section>
                    <h2 className="font-handwriting text-4xl font-bold text-[#5D4037] dark:text-[#8D6E63] mb-4">
                      Results & Impact
                    </h2>
                    <p className="text-base leading-relaxed text-[#333333]/90 dark:text-[#E0E0E0]/90 font-body">
                      {results}
                    </p>
                  </section>
                )}
              </div>

              {/* Sidebar */}
              <ProjectSidebar
                role={role}
                roleDescription={roleDescription}
                technologies={project.technologies}
              />
            </div>
          </div>
        </div>
      </main>
      </div>
      <Footer />
    </div>
  );
}

