import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/lib/projects";

function Tile({
  slug,
  className,
}: {
  slug: string;
  className: string;
}) {
  const project = getProject(slug)!;
  const href =
    project.slug === "instantscripts"
      ? "/instantscripts"
      : `/work/${project.slug}`;
  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden ${className}`}
    >
      <span className="absolute top-0 left-0 z-10 bg-hel-orange px-5 py-2.5 text-[15px] font-medium text-white md:text-[18px]">
        {project.title}
      </span>
      <Image
        src={project.gridImage}
        alt={project.title}
        fill
        sizes="(max-width: 767px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 ease-in group-hover:scale-110"
      />
    </Link>
  );
}

function StackedPair({ slugs }: { slugs: [string, string] }) {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-[35px]">
      <Tile slug={slugs[0]} className="h-[290px] w-full md:h-[357px]" />
      <Tile slug={slugs[1]} className="h-[290px] w-full md:h-[357px]" />
    </div>
  );
}

function BigTile({ slug }: { slug: string }) {
  return (
    <Tile
      slug={slug}
      className="h-[350px] w-full flex-[2] md:h-[749px]"
    />
  );
}

export default function WorkGallery() {
  return (
    <div
      id="casestudy"
      className="mx-auto flex max-w-[1145px] flex-col gap-4 px-5 pt-10 md:gap-[15px] md:pt-16"
    >
      <div className="flex flex-col gap-4 md:flex-row md:gap-[15px]">
        <BigTile slug="instantscripts" />
        <StackedPair slugs={["yarra-trams-villages", "lumo-sa"]} />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-[15px]">
        <StackedPair slugs={["modeina-estate", "custom-plates"]} />
        <BigTile slug="yarra-trams" />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-[15px]">
        <BigTile slug="lightscape" />
        <StackedPair slugs={["be-kinder", "lumo-app"]} />
      </div>
    </div>
  );
}
