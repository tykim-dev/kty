import React, { useState } from "react";

type ModalFullScreenProps = {
  title?: string,
  visible: boolean,
  onChange?: (fullScreen: boolean) => void,
  children: any,
}

const ModalFullScreen = (props: ModalFullScreenProps) => {
  const {title, visible=false, onChange, children} = props;
  const [isFullScreen, setFullScreen] = useState<boolean>(false);

  const handleChangeScreen = (size: string | undefined) => {
    const isFull = (size === 'full');
    setFullScreen(isFull);
    onChange && onChange(isFull);
  }

  return (
    <>
      <div className={`${isFullScreen ? 'fixed inset-0 z-10 overflow-y-auto h-screen' : 'flex flex-wrap mt-4'} ${visible ? '' : 'hidden'}`}>
        <div className={`w-full ${isFullScreen ? '' : 'mb-4 px-4'}`}>
          <div className={`relative flex flex-col min-w-0 break-words w-full shadow-lg bg-blueGray-100 border-0 ${isFullScreen ? '' : 'rounded'}`}>
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className={`flex flex justify-between`}>
                <h6 className="text-blueGray-700 text-xl font-bold">{title}</h6>
                <button
                  className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => handleChangeScreen(isFullScreen ? '' : 'full')}
                >
                  전체화면 {isFullScreen ? '취소' : ''}
                </button>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalFullScreen;