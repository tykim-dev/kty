type TableCellProps = {
  data?: any,
  align?: 'left' | 'center' | 'right',
  type?: 'string' | 'number' | 'array' | 'button',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  visibleResponsive?: Array<string>
}

const TableCell = ({
  data = '', 
  align = 'left', 
  type = 'string', 
  size = 'md',
  visibleResponsive = [],
}: TableCellProps) => {
  return (
    <>
      <td className={`border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 text-${size} text-${align} hidden ${visibleResponsive.map((data:string) => data + ':block')}`}>
        {data}
      </td>
    </>
  )
}

export default TableCell;