import CardWord from "@/app/components/Cards/CardWord"

type WordListProps = {
  title?: string,
  data: any[],
  className?: string,
}

const WordList = ({title, data, className}: WordListProps) => {
  return (
    <div className={`flex flex-wrap mt-4 ${className}`}>
      <div className="w-full mb-4 px-4">
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            "bg-white"
          }
        >
          {title && (
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3
                    className={
                      "font-semibold text-lg " +
                      "text-blueGray-700"
                    }
                  >
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          )}
          <div className="block w-full overflow-x-auto"></div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {data.map((item, index) => <CardWord key={`word-${index}`} data={item} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WordList