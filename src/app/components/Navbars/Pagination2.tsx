import { usehWordStore } from '@/app/store/wordStore';
import { ChangeEvent, MouseEvent } from 'react';
import useWord from '@/app/swr/useWord';
import useWordPage from '@/app/swr/useWordPage';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  conditions: any,
}

const Pagination = (props: PaginationProps) => {

  const {
    conditions
  } = props

  const {data: pageInfo, isLoading} = useWordPage(conditions);
  const { total = 0, totalPage = 0, currentPage = 0, startPage = 0, pageSize = 0 } = pageInfo || {};

  return (
    <>
      <div className="px-4 mb-4">
        <nav className="block">
        <ReactPaginate
        className='flex pl-0 rounded list-none flex-wrap justify-center'
        pageClassName='first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500'
        activeClassName='first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 text-white bg-lightBlue-500'
        breakLabel="..."
        nextLabel="next >"
        // onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPage}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
        </nav>
      </div>
    </>
  )
}

export default Pagination