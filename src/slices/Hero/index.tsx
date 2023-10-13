import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full my-12 max-h-[700px]"
    >
      <div className="container mx-auto shadow-lg shadow-accent rounded-2xl">
        <PrismicNextImage
          field={slice.primary.image}
          className="rounded-2xl object-cover w-full h-[700px]"
        />
        <div className="absolute top-0 m-12">
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-7xl font-shade z-20 opacity-70 mt-28">
                  {children}
                </h1>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.date}
            components={{
              paragraph: ({ children }) => (
                <p className="text-6xl text-primary font-inline z-20 opacity-70 pl-4 mt-2">
                  {children}
                </p>
              ),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
