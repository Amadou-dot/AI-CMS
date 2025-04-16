import { asImageSrc } from "@prismicio/client";
import { PrismicText, SliceZone } from "@prismicio/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import Bounded from "@/app/components/Bounded";
import StarGrid from "@/app/components/StarGrid";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client
    .getByUID("case_studies", uid)
    .catch(() => notFound());

  return (
    <Bounded as="article">
      <div className="relative grid place-items-center text-center">
        <StarGrid />
        <h1 className="text-7xl font-medium">
          <PrismicText field={page.data.company} />
          <p className="text-lg text-yellow-500">Case Study</p>
        </h1>
        <p className="mt-8 mb-4 max-w-xl text-lg text-slate-300">
          <PrismicText field={page.data.description} />
        </p>
        <PrismicNextImage
          field={page.data.logo}
          className="rounded-lg"
          quality={100}
        />
      </div>

      <div className="max-auto">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </Bounded>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client
    .getByUID("case_studies", uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("case_studies");

  return pages.map((page) => ({ uid: page.uid }));
}
