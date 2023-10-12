import useWordPage from '@/app/swr/useWordPage';
import ResponsivePagination from 'react-responsive-pagination';

type PaginationProps = {
  conditions: any,
  onPageChange: (newPage: number) => any,
}

const Pagination = (props: PaginationProps) => {

  const {
    conditions,
    onPageChange,
  } = props

  const {data: pageInfo, isLoading} = useWordPage(conditions);
  const { total = 0, totalPage = 0, currentPage = 0, startPage = 0, pageSize = 0 } = pageInfo || {};

  const handlePageClick = (newPage: number) => {
    onPageChange(newPage);
  }

  return (
    <>
      <div className='px-4 mb-4'>
        <nav className="block">
          <ResponsivePagination
            className='flex pl-0 rounded list-none flex-wrap justify-center paginate'
            pageLinkClassName='first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500'
            onPageChange={handlePageClick}
            previousLabel="《"
            nextLabel="》"
            total={totalPage}
            current={currentPage}
          />
        </nav>
      </div>
    </>
  )
}

export default Pagination