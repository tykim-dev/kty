import CardJlptAnswer from "@/app/components/Cards/CardJlptAnswer";
import CardJlptQuestion from "@/app/components/Cards/CardJlptQuestion";
import React, {memo, useMemo} from "react";
import { useJlptStore } from '@/app/store/jlptStore';
import { maxBy } from "lodash";
import Link from "next/link";

type ModalAnswerProps = {
  title: String,
  btnTitle?: String,
  goQuestion?: (questionId: string) => any,
}

const ModalAnswer = (props:ModalAnswerProps) => {
  const {title, btnTitle = '정답확인', goQuestion} = props;
  const [showModal, setShowModal] = React.useState(false);
  const jlptList = useJlptStore((state) => state.jlptList);
  const setJlptAnswer = useJlptStore((state) => state.setJlptAnswer);

  const handleGoQuestion = (questionId: string) => {
    goQuestion && goQuestion(questionId);
  }

  const getCollectCnt = useMemo(() => (collectType: String) => {
    return jlptList.filter((item) => item.answer && (collectType === 'collect' ? item.answer === item.selectedAnswer : item.answer !== item.selectedAnswer)).length;
  }, [jlptList]);

  return (
    <>
      <div className="flex justify-between">
        <Link scroll={false} href={`/jlpt`} className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          목록
        </Link>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => {setShowModal(true)}}
        >
          {btnTitle}
        </button>
      </div>
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
                          全体(전체)<br />total
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          {(jlptList.filter((item) => item.answer) || []).length}
                        </span>
                      </div>
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          正解(정답)<br />correct answer
                        </h5>
                        <span className="font-semibold text-xl text-lightBlue-500">
                          {getCollectCnt('collect')}
                        </span>
                      </div>
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          誤答(오답)<br />wrong answer
                        </h5>
                        <span className="font-semibold text-xl text-red-500">
                          {getCollectCnt('uncollect')}
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
                          番号(번호)<br />No
                        </th>
                        <th className="px-6 bg-blueGray-50 text-gray-800 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          選択(선택)<br />Choice
                        </th>
                        <th className="px-6 bg-blueGray-50 text-gray-800 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          正解(정답)<br />Answer
                        </th>
                        <th className="px-6 bg-blueGray-50 text-gray-800 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          問題確認<br />Check
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {jlptList.filter((item) => item.answer).map((item, idx) => {
                        return (
                          <tr key={`jlpt-question-answer-${idx}`} className="border-b">
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-center bg-blueGray-50 text-gray-800">
                              {item.questionNo}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-center text-gray-800">
                              {item.selectedAnswer === item.answer ? (
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                                  {item.selectedAnswer}: 正解
                                </span>
                              ) : (
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                                  {item.selectedAnswer}: 誤答
                                </span>
                              )}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-center text-gray-800">
                              {item.answer}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-center text-gray-800">
                              {/* <button onClick={() => handleGoQuestion(`jlpt-question-${item.questionNo}`)} className="bg-lightBlue-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                바로가기
                              </button> */}
                              <a href={`#jlpt-question-${item.questionNo}`} className="bg-lightBlue-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                見る
                              </a>
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
                    閉じる
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    確認
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
