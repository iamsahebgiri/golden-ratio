export default function Section({
  leadingTitle, highlight, children, imgSrc,
}) {
  return (
    <div className="container mx-auto mb-12 md:mb-10 md:px-8">
      <div className="font-heading leading-10 text-3xl tracking-tight md:text-4xl font-semibold capitalize px-4 text-neutral">
        { leadingTitle }
        {' '}
        <span className="text-highlight">
          { highlight }
        </span>
      </div>
      <div className="flex flex-col-reverse mt-5 md:flex-row">
        <div className="w-full px-4 mt-4 md:w-4/6 md:pl-4 md:m-0 text-neutral">
          { children }
        </div>
        <div className="w-full px-4 md:w-2/6">
          <div className="max-h-full bg-blue-brand rounded-lg">
            <img className="rounded-lg" src={imgSrc} alt="Golden Raio" />
          </div>
        </div>
      </div>
    </div>
  );
}
