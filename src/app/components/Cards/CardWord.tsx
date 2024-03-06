import { memo } from "react";
import CardSentence from "./CardSentence";

type TableCellProps = {
  data?: any,
  align?: 'left' | 'center' | 'right',
  type?: 'string' | 'number' | 'array' | 'button',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
}

const CardWord = ({
  data = '', 
  align = 'left', 
  type = 'string', 
  size = 'md',
}: TableCellProps) => {
  

  return (
    <>
      <li className="px-6 py-3">
        <div className="flex items-center">
          <div className="flex-1 min-w-0">
              <p className={`text-${size} font-medium font-semibold text-gray-900 text-gray-900 truncate`}>
                {data?.word}
              </p>
              <p className={`text-${size} text-gray-900 truncate`}>
                {data?.read}
              </p>
              <p className={`text-${size} text-gray-900 truncate`}>
                {data?.means}
              </p>
          </div>
          {/* <div className={`inline-flex items-center text-${size}`}>
              <CardSentence word={data?.word || data?.read} />
          </div> */}
        </div>
    </li>
    </>
  )
}

export default memo(CardWord);