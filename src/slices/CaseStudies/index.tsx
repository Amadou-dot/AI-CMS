import Bounded from "@/app/components/Bounded";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";
import { FC, JSX } from "react";

/**
 * Props for `CaseStudies`.
 */
export type CaseStudiesProps = SliceComponentProps<Content.CaseStudiesSlice>;

/**
 * Component for "CaseStudies" Slices.
 */
const CaseStudies: FC<CaseStudiesProps> = async ({
  slice,
}): Promise<JSX.Element> => {
  const client = createClient();
  const caseStudies = await Promise.all(
    slice.primary.case.map(async (item) => {
      if (isFilled.contentRelationship(item.case_study))
        return await client.getByID<Content.CaseStudiesDocument>(
          item.case_study.id,
        );
    }),
  );
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="max-w-2xl text-center text-5xl font-medium text-balance md:text-7xl">
        <PrismicText field={slice.primary.heading} />
      </h2>
      <div className="max-auto mt-6 max-w-md text-center text-balance text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="mt-20 grid gap-16">
        {caseStudies.map(
          (caseStudy, i) =>
            caseStudy && (
              <div
                key={caseStudy.id}
                className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
              >
                <div className="col-span-1 flex flex-col justify-center gap-4">
                  <h3 className="text-4xl">
                    <PrismicText field={caseStudy.data.company} />
                  </h3>

                  <div className="max-w-md">
                    <PrismicRichText field={caseStudy.data.description} />
                  </div>
                  <PrismicNextLink
                    document={caseStudy}
                    className="after:absolute after:inset-0 hover:underline"
                  >
                    Read <PrismicText field={caseStudy.data.company} /> case
                    Study
                  </PrismicNextLink>
                </div>
                <PrismicNextImage
                  field={caseStudy.data.logo}
                  quality={100}
                  className={clsx(
                    "rounded-xl lg:col-span-2",
                    i % 2 && "md:-order-1", // oscillating effect
                  )}
                />
              </div>
            ),
        )}
      </div>
    </Bounded>
  );
};

export default CaseStudies;
