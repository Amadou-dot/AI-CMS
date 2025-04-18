import Bounded from "@/app/components/Bounded";
import { type Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  type JSXMapSerializer,
  type SliceComponentProps,
} from "@prismicio/react";
import { type FC } from "react";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>;
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText: FC<RichTextProps> = ({ slice }) => {
  return (
    <Bounded className="prose prose-invert prose-lg prose-slate xl:prose-xl">
      <PrismicRichText field={slice.primary.content} components={components} />
    </Bounded>
  );
};

export default RichText;
