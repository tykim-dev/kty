import CardSentence from "@/app/components/Cards/CardSentence"

type WordTableProps = {
  title?: string,
  data: any[],
  className?: string,
}

const WordTable = ({title, data, className}: WordTableProps) => {
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
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className={"px-6 align-middle border border-solid py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>단어</th>
                  <th className={"px-6 align-middle border border-solid py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>읽기</th>
                  <th className={"px-6 align-middle border border-solid py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>뜻</th>
                  {/* <th className={"px-6 align-middle border border-solid py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>예문</th> */}
                </tr>
              </thead>
              <tbody>
                {data.map((wordInfo, idx) => {
                  return (
                    <tr key={`row-${idx}`} className="border border-solid border-l-0 border-r-0">
                      <td className={`border-t-0 px-6 align-middle border-l-0 border-r-0 p-4`}>{wordInfo.word}</td>
                      <td className={`border-t-0 px-6 align-middle border-l-0 border-r-0 p-4`}>{wordInfo.read}</td>
                      <td className={`border-t-0 px-6 align-middle border-l-0 border-r-0 p-4`}>{wordInfo.means}</td>
                      {/* <td className={`border-t-0 px-6 align-middle border-l-0 border-r-0 p-4`}><CardSentence word={wordInfo?.word || wordInfo?.read} /></td> */}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WordTable