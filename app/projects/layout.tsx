import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore a showcase of my key software development and blockchain projects. From backend frameworks to decentralized applications.",
    alternates: {
        canonical: "/projects",
    },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
