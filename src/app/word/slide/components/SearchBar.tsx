import { useWordStore } from '@/app/store/wordStore';
import { ChangeEvent, MouseEvent } from 'react';

type SearchProps = {
  onSearch: (data: any) => any,
}

const SearchBar = (props: SearchProps) => {

  const {
    onSearch
  } = props

  const wordInfo =useWordStore((state) => state.wordInfo);
  const setWordInfo = useWordStore((state) => state.setWordInfo);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setWordInfo({...wordInfo, [e.target.name]: e.target.value});
  }

  const handleSearch = (e: MouseEvent<HTMLElement>) => {
    onSearch && onSearch(wordInfo);
  }

  return (
    <>
      <div className="px-4 mx-auto w-full m-10 mb-12">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">검색</h6>
            </div>
          </div>
          <div className="flex-auto mt-3 lg:px-10 py-10 pt-0">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 md:py-0 md:px-4 sm:py-0 sm:px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    급수
                  </label>
                  <select name="level" onChange={handleChange} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option value="1">N1</option>
                    <option value="2">N2</option>
                    <option value="3">N3</option>
                    <option value="4">N4</option>
                    <option value="5">N5</option>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-6/12 pl-4 md:py-0 md:px-4 sm:py-0 sm:px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    품사
                  </label>
                  <select name="part" onChange={handleChange} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option value="">전체</option>
                    <option value="1">명사</option>
                    <option value="2">대명사</option>
                    <option value="3">동사</option>
                    <option value="4">조사</option>
                    <option value="5">형용사</option>
                    <option value="6">접사</option>
                    <option value="7">부사</option>
                    <option value="8">감동사</option>
                    <option value="9">형용동사</option>
                    <option value="10">기타</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='md:py-0 md:px-4 sm:py-0 sm:px-4'>
              <button
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 w-full"
                type="button"
                onClick={(e) => handleSearch(e)}
              >
                <i className="fas fa-search"></i> 조회
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar