import CardJlptAnswer from "@/app/components/Cards/CardJlptAnswer";
import CardJlptQuestion from "@/app/components/Cards/CardJlptQuestion";
import React, {memo, useMemo} from "react";
import { useJlptStore } from '@/app/store/jlptStore';
import { maxBy } from "lodash";

type ModalAnswerProps = {
  title: String,
  btnTitle?: String,
}

const ModalAnswer = (props:ModalAnswerProps) => {
  const {title, btnTitle = '정답확인'} = props;
  const [showModal, setShowModal] = React.useState(false);
  const jlptList = useJlptStore((state) => state.jlptList);
  const setJlptAnswer = useJlptStore((state) => state.setJlptAnswer);

  const handleClick = (selectedData: any) => {
    setJlptAnswer(selectedData);
  }


  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => {setShowModal(true)}}
      >
        {btnTitle}
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-75 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-75 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex flex-col min-w-0 break-words bg-white">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          전체
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          {maxBy(jlptList.filter((item) => item.questionNo), 'questionNo')?.questionNo}
                        </span>
                      </div>
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          정답
                        </h5>
                        <span className="font-semibold text-xl text-lightBlue-500">
                          30
                        </span>
                      </div>
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          오답
                        </h5>
                        <span className="font-semibold text-xl text-red-500">
                          30
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-y-scroll h-96">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-6 bg-blueGray-50 text-gray-800 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          번호
                        </th>
                        <th className="px-6 bg-blueGray-50 text-gray-800 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          선택
                        </th>
                        <th className="px-6 bg-blueGray-50 text-gray-800 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          정답
                        </th>
                        <th className="px-6 bg-blueGray-50 text-gray-800 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          바로가기
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {jlptList.filter((item) => item.questionNo).map((item, idx) => {
                        return (
                          <tr key={`jlpt-question-answer-${idx}`} className="border-b">
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-center bg-blueGray-50 text-gray-800">
                              {item.questionNo}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-center text-gray-800">
                              {item.selectedAnswer === item.answer ? (
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                                  {item.selectedAnswer}: 정답
                                </span>
                              ) : (
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                                  {item.selectedAnswer}: 오답
                                </span>
                              )}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-center text-gray-800">
                              {item.answer}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-center text-gray-800">
                              340
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    닫기
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    확인
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default memo(ModalAnswer);
