import Section from '../components/section';
import Facts from '../components/facts';
import Sets from '../components/sets';
import Home from '../components/home';
import Fibonacci from '../components/fibonacci';
import Spiral from '../components/spiral';
import Footer from '../components/footer';

export default function IndexPage() {
  return (
    <div>
      <Home />
      <Section
        leadingTitle="Golden ratio"
        highlight="overview"
        trailingTitle=""
        imgSrc="./golden_ratio.png"
      >
        <p className="mb-4 leading-relaxed">
          What makes a single number so interesting that ancient Greeks,
          Renaissance artists, a 17th century astronomer and a 21st century
          novelist all would write about it?
        </p>
        <p className="leading-relaxed">
          The Golden Ratio is a mathematical ratio. It is commonly found in
          nature, and when used in a design, it fosters organic and
          natural-looking compositions that are aesthetically pleasing to the
          eye. It’s a number that goes by many names. This “golden” number,
          1.61803399, represented by the Greek letter Phi, is known as the
          Golden Ratio, Golden Number, Golden Proportion, Golden Mean, Golden
          Section, Divine Proportion and Divine Section.
        </p>
      </Section>
      <Sets />
      <Section
        leadingTitle="Golden ratio and"
        highlight="Mathematics"
        trailingTitle=""
        imgSrc="./golden_ratio_math.png"
      >
        <p className="mb-4">
          This Golden Ratio truly is unique in its mathematical properties and
          pervasive in its appearance throughout nature. Where Pi (3.14) is the
          ratio of the circumference of a circle to its diameter, Phi or Φ
          (1.618) is the Golden Ratio that results when a line is divided in one
          very special and unique way.
        </p>
        <p className="mb-4">
          Two quantities are in the golden ratio if their ratio is the same as
          the ratio of their sum to the larger of the two quantities. The
          irrational number (1 + √5)/2, often denoted by the Greek letter ϕ or
          τ, which is approximately equal to 1.618 is golden ratio.
        </p>
        {/* <p className="mb-4">
          Golden Ratio can be written in many forms. Here are few of them -
          <img className="" src="./eqs/eq_1.svg" alt="Equation one" />
          <img src="./eqs/eq_2.svg" alt="Equation one" />
          <img src="./eqs/eq_3.svg" alt="Equation one" />
        </p> */}
      </Section>
      <Facts />
      <Section
        leadingTitle="Golden Spiral and"
        highlight="Nature"
        trailingTitle=""
        imgSrc="./golden_ratio_nature.png"
      >
        <p className="mb-4">
          There are many other fascinating mathematical relationships and
          oddities in both Phi and the Fibonacci series that can be explored in
          more depth, but for now let’s now take a step away from the purely
          mathematical and venture into nature, where Phi and the Fibonacci
          series manifest themselves pervasively, but not universally. Fibonacci
          numbers frequently appear in the numbers of petals in a flower and in
          the spirals of plants. The positions and proportions of the key
          dimensions of many animals are based on Phi. Examples include the body
          sections of ants and other insects, the wing dimensions and location
          of eye-like spots on moths, the spirals of sea shells and the position
          of the dorsal fins on porpoises. Even the spirals of human DNA embody
          phi proportions.
        </p>
      </Section>
      <Fibonacci />
      <Spiral />
      <Footer />
    </div>
  );
}
