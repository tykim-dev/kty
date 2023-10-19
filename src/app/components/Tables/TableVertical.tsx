import TableCell from "./TableCell"
import TableHead from "./TableHead"

type TableHolizontalProps = {
  title?: string,
  headers?: any[],
  data: any[],
  classNameName?: string,
}

const TableVertical = ({title, headers, data, classNameName}: TableHolizontalProps) => {
  return (
    
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      <li className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4">
            {/* <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
            </div> */}
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
            </div>
          </div>
      </li>
      <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            {/* <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Neil image">
            </div> */}
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Bonnie Green
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $3467
            </div>
          </div>
      </li>
      <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            {/* <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
            </div> */}
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Michael Gough
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $67
            </div>
          </div>
      </li>
      <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            {/* <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
            </div> */}
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Thomas Lean
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $2367
            </div>
          </div>
      </li>
      <li className="pt-3 pb-0 sm:pt-4">
          <div className="flex items-center space-x-4">
            {/* <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Neil image">
            </div> */}
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Lana Byrd
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $367
            </div>
          </div>
      </li>
    </ul>

    // <div classNameName={`flex flex-wrap mt-4 ${classNameName}`}>
    //   <div classNameName="w-full mb-4 px-4">
    //     <div
    //       classNameName={
    //         "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
    //         "bg-white"
    //       }
    //     >
    //       {title && (
    //         <div classNameName="rounded-t mb-0 px-4 py-3 border-0">
    //           <div classNameName="flex flex-wrap items-center">
    //             <div classNameName="relative w-full px-4 max-w-full flex-grow flex-1">
    //               <h3
    //                 classNameName={
    //                   "font-semibold text-lg " +
    //                   "text-blueGray-700"
    //                 }
    //               >
    //                 {title}
    //               </h3>
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //       <div classNameName="block w-full overflow-x-auto">
    //         <table classNameName="items-center w-full bg-transparent border-collapse">
    //           {headers && (
    //             <thead>
    //               <tr>
    //                 {headers.map((data, idx) => {
    //                   return (
    //                     <TableHead key={`head-${idx}`} title={data?.title} width={data?.width} align={data?.align} />
    //                   )
    //                 })}
    //               </tr>
    //             </thead>
    //           )}
    //           <tbody>
    //             {data.map((wordInfo, idx) => {
    //               return (
    //                 <tr key={`row-${idx}`} classNameName="border border-solid border-l-0 border-r-0">
    //                   {headers?.map((head, idx) => {
    //                     return (
    //                       <td classNameName="border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 text-md text-left">
    //                         {head.fields.map((item:string) => {
    //                           return (<div>{wordInfo[item]}</div>);
    //                         })}
    //                       </td>
    //                     );
    //                   })}
    //                 </tr>
    //               )
    //             })}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default TableVertical