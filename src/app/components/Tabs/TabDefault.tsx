import React, { memo, useState } from "react";

type TabDefaultProps = {
  data: any[],
  selectedIdx?: number,
  onSearch?: (data: any) => any,
  onClick?: (data: any) => any,
}

const TabDefault = (props: TabDefaultProps) => {
  const { data, selectedIdx = 0 } = props;
  const [openTab, setOpenTab] = useState(selectedIdx);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {data.map((item, idx) => {
              return (
                <li key={`tab-title-${idx}`} className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === idx
                        ? "text-white bg-blueGray-600"
                        : "text-blueGray-600 bg-white")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(idx);
                    }}
                    data-toggle="tab"
                    href={`#link${idx}`}
                    role="tablist"
                  >
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                {data.map((item, idx) => {
                  return (
                    <div key={`tab-content-${idx}`} className={openTab === idx ? "block" : "hidden"} id={`link${idx}`}>
                      <p>
                        {item.content}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(TabDefault);