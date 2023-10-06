import { usehWordStore } from '@/app/store/wordStore';
import { ChangeEvent, MouseEvent } from 'react';
import useWord from '@/app/swr/useWord';
import useWordPage from '@/app/swr/useWordPage';

type PaginationProps = {
  conditions: any,
}

const Pagination = (props: PaginationProps) => {

  const {
    conditions
  } = props

  const {data: pageInfo, isLoading} = useWordPage(conditions);

  const { total, totalPage, currentPage, startPage, endPage } = pageInfo;

  return (
    <>
      <div className="px-4 mb-4">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">
                <i className="fas fa-chevron-left -ml-px"></i>
              </a>
            </li>
            {/* {pageInfo.} */}
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 text-white bg-lightBlue-500">
                1
              </a>
            </li>
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">
                2
              </a>
            </li>
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">
                3
              </a>
            </li>
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">
                4
              </a>
            </li>
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">
                5
              </a>
            </li>
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">
                <i className="fas fa-chevron-right -mr-px"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Pagination