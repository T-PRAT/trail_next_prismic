import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";

/**
 * Props for `RaceCards`.
 */
export type RaceCardsProps = SliceComponentProps<Content.RaceCardsSlice>;
/**
 * Component for "RaceCards" Slices.
 */

const RaceCards = async ({ slice }: RaceCardsProps): Promise<JSX.Element> => {
  const client = createClient();

  const raceCards = await Promise.all(
    slice.items.map((item) => {
      if (isFilled.contentRelationship(item.race) && item.race.uid) {
        return client.getByUID("race", item.race.uid);
      }
    }),
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full my-12"
    >
      <div className="container mx-auto text-center my-6">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading3: ({ children }) => (
              <h3 className="text-3xl font-shade z-20 opacity-70 mt-28 pb-6">
                {children}
              </h3>
            ),
          }}
        />
        <div className="grid grid-cols-3 gap-12">
          {raceCards.map(
            (raceCard, index) =>
              raceCard && (
                <div
                  key={index}
                  className="bg-primary rounded-3xl border-4 border-text shadow-inner shadow-text p-4"
                >
                  <PrismicRichText
                    field={raceCard.data.name}
                    components={{
                      heading4: ({ children }) => (
                        <h4 className="font-inline">{children}</h4>
                      ),
                    }}
                  />
                  <div className="flex">
                    <p>{raceCard.data.distance}</p>
                    <p>{raceCard.data.elevation}</p>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </section>
  );
};

export default RaceCards;
