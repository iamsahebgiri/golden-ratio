import Section from '../components/section';
import Facts from '../components/facts';
import Sets from '../components/sets';
import Home from '../components/home';
import Fibonacci from '../components/fibonacci';
import Spiral from '../components/spiral';
import Sunflower from '../components/sunflower';
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
        <p className="mb-4 leading-6">
          What makes a single number so interesting that nearly everyone from
          scientist to the artist would write about it? What is so special about
          the golden ratio? This golden number, 1.61803399, represented by the Greek letter Phi,
          is known as the Golden Ratio.
        </p>
        <p className="mb-4 leading-6">
          It goes by many names, golden mean, divine proportions, golden
          section, etc. which implies that it has been discovered and
          rediscovered many times throughout history. Egyptians used both pi and
          phi in the design of the Great Pyramids. Da Vinci’s The Last Supper
          was based on the Golden Ratio. Not only Da Vinci but Michelangelo,
          Raphael, Botticelli, Burne Jones and many more have used the golden
          ratio to bring harmony and balance in art and design.
        </p>
        {/* <p className="mb-4 leading-6">
          It was first called the “Divine Proportion” in the 1500s by Luca
          Pacioli in his dissertation “De Divina Proportione”. It is believed
          that Martin Ohm (1792–1872) was the first person to use the term
          “golden” to describe the golden ratio. It wasn’t until the 1900s that
          American mathematician Mark Barr used the Greek letter phi (Φ) to
          designate this proportion.
        </p> */}
      </Section>
      <Sets />
      <Section
        leadingTitle="Golden ratio and"
        highlight="Mathematics"
        trailingTitle=""
        imgSrc="./golden_ratio_math.png"
      >
        <p className="mb-4 leading-6">
          This Golden Ratio truly is unique in its mathematical properties and
          pervasive in its appearance throughout nature. Where Pi (3.14) is the
          ratio of the circumference of a circle to its diameter, Phi or Φ
          (1.618) is the Golden Ratio that results when a line is divided in one
          very special and unique way.
        </p>
        <p className="mb-4 leading-6">
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
      <Fibonacci />
      <Facts />
      <Section
        leadingTitle="Golden Spiral and"
        highlight="Nature"
        trailingTitle=""
        imgSrc="./golden_ratio_nature.png"
      >
        <p className="mb-4 leading-6">
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
      <Sunflower />
      <Spiral />
      <Footer />
    </div>
  );
}
