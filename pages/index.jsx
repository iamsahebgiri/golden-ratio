import { RiQuestionFill } from 'react-icons/ri';

export default function IndexPage() {
  return (
    <div>
      <div className="bg-gradient-home py-40 md:h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-5xl md:text-7xl font-heading text-center text-white">
            Golden Ratio
          </h1>
          <div className="inline-block bg-green-500 font-bold tracking-widest text-sm px-6 py-1 font-heading uppercase leading-relaxed text-white">
            De Divina Proportione
          </div>
        </div>
      </div>
      <div className="container mx-auto my-12 md:my-16 md:py-8 md:px-8">
        <div className="font-heading leading-snug text-3xl md:text-4xl font-semibold capitalize px-4 text-neutral">
          Golden ratio
          <span className="text-highlight"> overview </span>
        </div>
        <div className="flex flex-col-reverse mt-5 md:flex-row">
          <div className="w-full px-4 mt-4 md:w-4/6 md:pl-4 md:m-0 text-neutral">
            <p className="mb-4 leading-relaxed">
              What makes a single number so interesting that ancient Greeks,
              Renaissance artists, a 17th century astronomer and a 21st century
              novelist all would write about it?
            </p>
            <p className="leading-relaxed">
              The Golden Ratio is a mathematical ratio. It is commonly found in
              nature, and when used in a design, it fosters organic and
              natural-looking compositions that are aesthetically pleasing to
              the eye. It’s a number that goes by many names. This “golden”
              number, 1.61803399, represented by the Greek letter Phi, is known
              as the Golden Ratio, Golden Number, Golden Proportion, Golden
              Mean, Golden Section, Divine Proportion and Divine Section.
            </p>
          </div>
          <div className="w-full px-4 md:w-2/6">
            <div className="h-48 bg-gray-300 rounded-lg"> </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-12 md:my-16 md:py-8 md:px-8">
        <div className="font-heading leading-tight text-3xl md:text-4xl font-semibold capitalize px-4 text-neutral">
          Frequently used
          <span className="text-highlight"> Ratio </span>
          Sets
        </div>
        <div className="flex px-4 mt-5 overflow-x-scroll hide-scroll">
          <div className="mr-5">
            <div className="h-32 w-32 bg-gray-300 rounded-lg" />
            <div className="h-5 w-32 bg-gray-300 rounded-full mt-3" />
          </div>
          <div className="mr-5">
            <div className="h-32 w-32 bg-gray-300 rounded-lg" />
            <div className="h-5 w-32 bg-gray-300 rounded-full mt-3" />
          </div>
          <div>
            <div className="h-32 w-32 bg-gray-300 rounded-lg" />
            <div className="h-5 w-32 bg-gray-300 rounded-full mt-3" />
          </div>
        </div>
      </div>
      <div className="container mx-auto my-12 md:my-16 md:py-8 md:px-8">
        <div className="font-heading leading-tight text-3xl md:text-4xl font-semibold capitalize px-4 text-neutral">
          Golden ratio and
          <span className="text-highlight"> Mathematics </span>
        </div>
        <div className="flex flex-col-reverse mt-5 md:flex-row">
          <div className="w-full px-4 mt-4 md:w-4/6 md:pl-4 md:m-0 text-neutral">
            <p className="mb-4">
              This Golden Ratio truly is unique in its mathematical properties
              and pervasive in its appearance throughout nature. Where Pi (3.14)
              is the ratio of the circumference of a circle to its diameter, Phi
              or Φ (1.618) is the Golden Ratio that results when a line is
              divided in one very special and unique way.
            </p>
            <p>
              Two quantities are in the golden ratio if their ratio is the same
              as the ratio of their sum to the larger of the two quantities. The
              irrational number (1 + √5)/2, often denoted by the Greek letter ϕ
              or τ, which is approximately equal to 1.618 is golden ratio.
            </p>
          </div>
          <div className="w-full px-4 md:w-2/6">
            <div className="h-48 bg-gray-300 rounded-lg"> </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-12 md:my-16 md:py-8 md:px-8">
        <div className="font-heading leading-tight text-3xl md:text-4xl font-semibold capitalize px-4 text-neutral">
          Interesting
          <span className="text-highlight"> Facts </span>
          about Phi
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 px-4 mt-5 overflow-x-scroll hide-scroll ">
          <div className="p-5 pb-8 bg-red-brand rounded-lg">
            <div className="flex flex-row-reverse">
              <RiQuestionFill color="#FFF" size="32" />
            </div>
            <p className="font-serif text-lg text-white">
              Phi is the only number whose square is greater than itself by one,
              expressed mathematically as Φ² = Φ + 1 = 2.618.
            </p>
          </div>
          <div className="p-5 bg-aqua-brand rounded-lg">
            <div className="flex flex-row-reverse">
              <RiQuestionFill color="#FFF" size="32" />
            </div>
            <p className="font-serif text-lg text-white">
              Phi is the only number whose square is greater than itself by one,
              expressed mathematically as Φ² = Φ + 1 = 2.618.
            </p>
          </div>
          <div className="p-5 bg-yellow-brand rounded-lg">
            <div className="flex flex-row-reverse">
              <RiQuestionFill color="#000" size="32" />
            </div>
            <p className="font-serif text-lg">
              Phi is the only number whose square is greater than itself by one,
              expressed mathematically as Φ² = Φ + 1 = 2.618.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
