const TableHead = ({title = '', width = 'auto', align = 'left'}: TableHeadType) => {
  return (
    <>
      <th
        className={
          `px-6 align-middle border border-solid py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-${align} ` +
          "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
        }
        style={{width: width}}
      >
        {title}
      </th>
    </>
  )
}

export default TableHead;