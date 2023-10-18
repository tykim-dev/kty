import TableCell from "./TableCell"
import TableHead from "./TableHead"

type TableHolizontalProps = {
  title?: string,
  headers?: any[],
  data: any[],
  className?: string,
}

const TableVertical = ({title, headers, data, className}: TableHolizontalProps) => {
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
              {headers && (
                <thead>
                  <tr>
                    {headers.map((data, idx) => {
                      return (
                        <TableHead key={`head-${idx}`} title={data?.title} width={data?.width} align={data?.align} />
                      )
                    })}
                  </tr>
                </thead>
              )}
              <tbody>
                {data.map((wordInfo, idx) => {
                  return (
                    <tr key={`row-${idx}`} className="border border-solid border-l-0 border-r-0">
                      {headers?.map((head, idx) => {
                        return (
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 text-md text-left">
                            {head.fields.map((item:string) => {
                              return (<div>{wordInfo[item]}</div>);
                            })}
                          </td>
                        );
                      })}
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

export default TableVertical