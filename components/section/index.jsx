export default function Section({
  leadingTitle, highlight, children, imgSrc,
}) {
  return (
    <div className="container mx-auto mb-8 md:mb-16 md:px-8">
      <div className="font-heading leading-10 text-3xl md:text-4xl tracking-tight font-semibold capitalize px-4 md:p-0 text-neutral">
        { leadingTitle }
        {' '}
        <span className="text-highlight">
          { highlight }
        </span>
      </div>
      <div className="flex flex-col-reverse mt-6 md:flex-row">
        <div className="w-full px-4 mt-4 md:w-4/6 md:p-0 md:pr-5 md:m-0 text-neutral">
          { children }
        </div>
        <div className="w-full px-4 md:pr-0 md:pl-6 md:w-2/6">
          <div className="max-h-full bg-blue-brand rounded-lg">
            <img className="rounded-lg" src={imgSrc} alt="Golden Raio" />
          </div>
        </div>
      </div>
    </div>
  );
}
