type TableCellProps = {
  data?: any,
  align?: 'left' | 'center' | 'right',
  type?: 'string' | 'number' | 'array' | 'button',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
}

const TableCell = ({data = '', align = 'left', type = 'string', size = 'md'}: TableCellProps) => {
  return (
    <>
      <td className={`border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-${size} text-${align}`}>
        {data}
      </td>
    </>
  )
}

export default TableCell;