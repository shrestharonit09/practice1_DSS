import React from "react";

const Prapanna = () => {
  return (
    <div className="mt-10 ml-4">
      {/* <div className="mt-24 ml-4 flex flex-col gap-5">
        <h1 className="text-xl font-bold">Crop Calendar</h1>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-md">Plot number</h1>
          <h1 className="font-semibold text-md">01</h1>
          <hr />
          <h1 className="font-semibold text-md">02</h1>
          <hr />
          <h1 className="font-semibold text-md">03</h1>
          <hr />
          <h1 className="font-semibold text-md">04</h1>
          <hr />
          <h1 className="font-semibold text-md">05</h1>
          <hr />
        </div>
      </div> */}
      <table>
        <thead>
          <tr>
            <th className="border border-slate-300 p-4">Plot number</th>
            <th className="border border-slate-300 p-4">Baisakh</th>
            <th className="border border-slate-300 p-4">Jestha</th>
            <th className="border border-slate-300 p-4">Aashad</th>
            <th className="border border-slate-300 p-4">Shrawan</th>
            <th className="border border-slate-300 p-4">Bharda</th>
            <th className="border border-slate-300 p-4">Ashwin</th>
            <th className="border border-slate-300 p-4">Kartik</th>
            <th className="border border-slate-300 p-4">Mangsir</th>
            <th className="border border-slate-300 p-4">Poush</th>
            <th className="border border-slate-300 p-4">Magh</th>
            <th className="border border-slate-300 p-4">Falgun</th>
            <th className="border border-slate-300 p-4">Chaitra</th>
          </tr>
          <tr className="overflow-x-auto">
            <th className="border border-slate-300 p-4">01</th>
            <th className="border border-slate-300 p-4" colSpan="3">
              <div className="flex justify-center item-center border border-gray-200 rounded-full">
                <img
                  className="w-10 h-10"
                  src="https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"
                  alt="picture"
                />
              </div>
            </th>
            <th className="border border-slate-300 p-4"></th>
            
            <th className="border border-slate-300 p-4">
              <img
                className="w-12 h-12"
                src="https://m.media-amazon.com/images/I/410ifk4yIrL._AC_UF1000,1000_QL80_.jpg"
                alt="cauliflower"
              />
            </th>
            <th className="border border-slate-300 p-4"></th>
            <th className="border border-slate-300 p-4"></th>
            <th className="border border-slate-300 p-4"></th>
            <th className="border border-slate-300 p-4" colSpan="3">
              <div className="flex justify-center item-center border border-gray-200 rounded-full">
                <img
                  className="w-10 h-10"
                  src="https://media.istockphoto.com/id/510515443/photo/eggplant-isolated-on-white.jpg?s=612x612&w=0&k=20&c=AfRLY-0SanZ7Xo1Vdgpdv--PmAbKOdPUiLtvw4X8YJY="
                  alt="picture"
                />
              </div>
            </th>
            <th className="border border-slate-300 p-4"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-slate-300 p-4">
            <th className="border border-slate-300 p-4">02</th>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4">
            <img
                className="w-12 h-12"
                src="https://m.media-amazon.com/images/I/410ifk4yIrL._AC_UF1000,1000_QL80_.jpg"
                alt="cauliflower"
              />
            </td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4" colSpan="3">
              <div className="flex justify-center item-center border border-gray-200 rounded-full">
                <img
                  className="w-10 h-10"
                  src="https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"
                  alt="picture"
                />
              </div>
            </td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4">
            <img
                className="w-12 h-12"
                src="https://m.media-amazon.com/images/I/410ifk4yIrL._AC_UF1000,1000_QL80_.jpg"
                alt="cauliflower"
              />
            </td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>

          </tr>
          <tr className="border border-slate-300 p-4">
            <th className="border border-slate-300 p-4">03</th>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4" colSpan="3">
              <div className="flex justify-center item-center border border-gray-200 rounded-full">
                <img
                  className="w-10 h-10"
                  src="https://media.istockphoto.com/id/510515443/photo/eggplant-isolated-on-white.jpg?s=612x612&w=0&k=20&c=AfRLY-0SanZ7Xo1Vdgpdv--PmAbKOdPUiLtvw4X8YJY="
                  alt="picture"
                />
              </div>
            </td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4" colSpan="3">
              <div className="flex justify-center item-center border border-gray-200 rounded-full">
                <img
                  className="w-10 h-10"
                  src="https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"
                  alt="picture"
                />
              </div>
            </td>

          </tr>
          <tr className="border border-slate-300 p-4">
            <th className="border border-slate-300 p-4">04</th>
            <td className="border border-slate-300 p-4" colSpan="3">
              <div className="flex justify-center item-center border border-gray-200 rounded-full">
                <img
                  className="w-10 h-10"
                  src="https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"
                  alt="picture"
                />
              </div>
            </td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4">
            <img
                className="w-12 h-12"
                src="https://m.media-amazon.com/images/I/410ifk4yIrL._AC_UF1000,1000_QL80_.jpg"
                alt="cauliflower"
              />
            </td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>


          </tr>
          <tr className="border border-slate-300 p-4">
            <th className="border border-slate-300 p-4">05</th>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4" colSpan="3">
              <div className="flex justify-center item-center border border-gray-200 rounded-full">
                <img
                  className="w-10 h-10"
                  src="https://media.istockphoto.com/id/510515443/photo/eggplant-isolated-on-white.jpg?s=612x612&w=0&k=20&c=AfRLY-0SanZ7Xo1Vdgpdv--PmAbKOdPUiLtvw4X8YJY="
                  alt="picture"
                />
              </div>
            </td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4" colSpan="3">
              <div className="flex justify-center item-center border border-gray-200 rounded-full">
                <img
                  className="w-10 h-10"
                  src="https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"
                  alt="picture"
                />
              </div>
            </td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>
            <td className="border border-slate-300 p-4"></td>

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Prapanna;
