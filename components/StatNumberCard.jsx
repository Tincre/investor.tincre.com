import DefaultStatsIcon from "./DefaultStatsIcon";

export default function StatNumberCard({ icon, numberStat, text }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center group ">
      <div className="p-8 group-hover:bg-gray-100 group-hover:ease-in ease-out duration-300 group-hover:text-black rounded-lg">
        {!icon ? <DefaultStatsIcon /> : icon}
        <h3 className="mb-2 text-2xl text-gray-800 font-bold font-heading group-hover:ease-in ease-out duration-300 group-hover:text-indigo-900">
          {numberStat}
        </h3>
        <p className="text-lg text-gray-500 group-hover:text-indigo-800">
          {text}
        </p>
      </div>
    </div>
  );
}
