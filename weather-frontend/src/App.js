function App() {
  return (
    <div className="w-[100%] h-screen bg-[#88caef]">
      <div className="max-w-[1320px] mx-auto py-6">
        <h1 className="text-[40px] font-bold">Simple Weather App</h1>
        <form className="flex max-w-[700px] my-6">
          <input type="text" className="basis-[70%] h-[50px] px-4 capitalize" />
          <button type="submit" className=" basis-[30%] bg-yellow-300">
            Save
          </button>
        </form>
        <div className="flex gap-3 flex-wrap">
          <div className="p-3 bg-white basis-[32%]">
            <h2 className="font-bold">Jodhpur IN</h2>
            <h2 className="font-bold">32.23</h2>
            <img src="" alt="" />
            <p>Broken Clouds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;