export default function WhyInvestCard({ label, description, index }) {
  let className =
    "transition w-full md:w-1/2 lg:w-full mx-auto flex items-center justify-center lg:justify-start flex-col lg:flex-row px-4 mb-8 lg:mb-6 group-hover:ease-in ease-out duration-";
  let labelClassName =
    "transition mb-4 lg:mb-0 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-indigo-600 text-indigo-50 group-hover:bg-indigo-200 group-hover:text-indigo-900 group-hover:ease-in ease-out font-bold font-heading duration-";
  let descriptionClassName =
    "transition text-lg text-gray-600 leading-loose py-2 lg:pl-4 group-hover:text-indigo-100 group-hover:ease-in ease-out duration-";
  let duration = 200;
  if (label == 2) {
    duration = 700;
  } else if (label == 3) {
    duration = 2000;
  }
  className += `${duration}`;
  labelClassName += `${duration}`;
  descriptionClassName += `${duration}`;
  return (
    <div className={className}>
      <span className={labelClassName}>{label}</span>
      <div className="max-w-xs">
        <p className={descriptionClassName}>{description}</p>
      </div>
    </div>
  );
}
