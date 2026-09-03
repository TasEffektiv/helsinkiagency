import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Helsinki Agency`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "instantscripts") redirect("/instantscripts");
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];
  const nextHref =
    next.slug === "instantscripts" ? "/instantscripts" : `/work/${next.slug}`;

  return (
    <>
      <Header />
      <main className="bg-black">
        <section className="relative flex min-h-[420px] items-end overflow-hidden md:min-h-[600px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
          <div className="relative z-10 w-full px-5 pb-10 md:px-10 md:pb-14">
            <p className="mb-2 font-body text-[13px] font-medium tracking-[3px] text-hel-orange uppercase">
              {project.client}
            </p>
            <h1 className="max-w-3xl font-heading text-[28px] leading-tight font-extrabold text-white uppercase md:text-[48px]">
              {project.title}
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-5 py-14 md:py-20">
          <p className="mb-10 font-heading text-[20px] font-bold text-hel-pink2 md:text-[26px]">
            {project.tagline}
          </p>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-3 font-body text-[13px] font-bold tracking-[2px] text-hel-teal uppercase">
                The Challenge
              </h2>
              <p className="font-body text-[16px] leading-[28px] text-white/90">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="mb-3 font-body text-[13px] font-bold tracking-[2px] text-hel-teal uppercase">
                The Solution
              </h2>
              <p className="font-body text-[16px] leading-[28px] text-white/90">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-10">
            <h2 className="mb-3 font-body text-[13px] font-bold tracking-[2px] text-hel-teal uppercase">
              The Result
            </h2>
            <p className="font-body text-[16px] leading-[28px] text-white/90">
              {project.results}
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 px-5 py-12">
          <div className="mx-auto flex max-w-[1145px] items-center justify-between">
            <Link
              href="/#casestudy"
              className="font-body text-[13px] font-medium tracking-wide text-white/70 uppercase hover:text-white"
            >
              &larr; All work
            </Link>
            <Link
              href={nextHref}
              className="font-body text-[13px] font-medium tracking-wide text-white/70 uppercase hover:text-white"
            >
              Next: {next.title} &rarr;
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
