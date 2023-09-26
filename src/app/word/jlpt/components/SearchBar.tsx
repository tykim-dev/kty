const SearchBar = () => {

  return (
    <>
      <div className="px-4 mx-auto w-full -m-24 mb-12">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap">
                <div className="w-1/3 px-4">
                  <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">One of three columns</span>
                </div>
                <div className="w-1/3 px-4">
                  <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">One of three columns</span>
                </div>
                <div className="w-1/3 px-4">
                  <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">One of three columns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar