import Section from '../components/section';
import Facts from '../components/facts';
import Sets from '../components/sets';
import Home from '../components/home';

export default function IndexPage() {
  return (
    <div>
      <Home />
      <Section leadingTitle="Golden ratio" highlight="overview" trailingTitle="" img="">
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
      <Section leadingTitle="Golden ratio and" highlight="Mathematics" trailingTitle="" img="">
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
      </Section>
      <Facts />
      <Section leadingTitle="Golden Spiral and" highlight="Nature" trailingTitle="" img="">
        <p className="mb-4">
          A golden spiral can be approximated by first starting with a
          rectangle for which the ratio between its length and width is the
          golden ratio. This rectangle can then be partitioned into a square
          and a similar rectangle and this newest rectangle can then be
          split in the same way. After continuing this process for an
          arbitrary number of steps, the result will be an almost complete
          partitioning of the rectangle into squares. The corners of these
          squares can be connected by quarter-circles. The result, though
          not a true logarithmic spiral, closely approximates a golden
          spiral.
        </p>
      </Section>
    </div>
  );
}
