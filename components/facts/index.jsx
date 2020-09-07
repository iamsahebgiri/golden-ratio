import { RiQuestionFill } from 'react-icons/ri';

export default function Facts() {
  return (
    <div className="container mx-auto mb-12 md:mb-16 md:px-8">
      <div className="font-heading leading-tight text-3xl md:text-4xl font-semibold capitalize px-4 md:p-0  text-neutral">
        Interesting
        <span className="text-highlight"> Facts </span>
        about Phi
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 px-4 md:p-0 mt-8">
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
            Phi is also the only number whose reciprocal is less than itself
            by one, expressed as 1/Φ = Φ – 1 = 0.618.
          </p>
        </div>
        <div className="p-5 bg-yellow-brand rounded-lg">
          <div className="flex flex-row-reverse">
            <RiQuestionFill color="#000" size="32" />
          </div>
          <p className="font-serif text-lg">
            The Golden Ratio is also equal to 2 × sin(54°), interesting isn&apos;t it?
          </p>
        </div>
      </div>
    </div>
  );
}
