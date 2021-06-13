import React, { useEffect, useState } from "react";

function NachiPage() {
  const [values, setValues]: any = useState({
    formdata: "",
  });

  const [number1, setNumber1] = useState([]);

  const { formdata } = values;

  useEffect(() => {
    setValues({ ...values, formdata: new FormData() });
    console.log(number1);
    console.log(number1.length);
  }, [number1]);

  const handleCategoryToggle = (number) => {
    console.log(number);
    const all = [...number1];
    const checkedNumber = number1.indexOf(number);

    if (checkedNumber === -1) {
      all.push(number);
    } else {
      all.splice(checkedNumber, 1);
    }
    setNumber1(all);
    formdata.set("formnumber", all);
    // console.log(number1);
  };

  const isToggleCategory = (num) => {
    if (number1.includes(num)) {
      return true;
    } else {
      return false;
    }
  };

  const handlebet = () => {
    console.log(number1);
  };
  const ismorenumber = () => {
    console.log(number1.length);
    if (number1.length >= 10) {
      return true;
    } else {
      return false;
    }
  };

  const reset = () => {
    setNumber1([]);
  };

  return (
    <div>
      {/* <div>Next block:</div> */}
      <div className="bg-gray-200 2xl:mx-30 xl:mx-60 lg:mx-60 md:mx-20 sm:mx-5 shadow-xl my-16 rounded-lg">
        <p className="ml-56 text-2xl font-bold">Pick Numbers</p>

        <div className="2xl:mx-10 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-3">
          {/* <div className="inline-flex"> */}
          <div className="grid grid-cols-10 bg-blue-500 gap-2">
            <div className="p-10 bg-green-500 col-span-4">
              <div className="grid grid-cols-6">
                <button
                  disabled={ismorenumber() && !number1.includes(1)}
                  onClick={() => handleCategoryToggle(1)}
                  className={`m-3 ${
                    isToggleCategory(1)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  1
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(2)}
                  onClick={() => handleCategoryToggle(2)}
                  className={`m-3 ${
                    isToggleCategory(2)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  2
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(3)}
                  onClick={() => handleCategoryToggle(3)}
                  className={`m-3 ${
                    isToggleCategory(3)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  3
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(4)}
                  onClick={() => handleCategoryToggle(4)}
                  className={`m-3 ${
                    isToggleCategory(4)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  4
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(5)}
                  onClick={() => handleCategoryToggle(5)}
                  className={`m-3 ${
                    isToggleCategory(5)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  5
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(6)}
                  onClick={() => handleCategoryToggle(6)}
                  className={`m-3 ${
                    isToggleCategory(6)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  6
                </button>

                <button
                  disabled={ismorenumber() && !number1.includes(7)}
                  onClick={() => handleCategoryToggle(7)}
                  className={`m-3 ${
                    isToggleCategory(7)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  7
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(8)}
                  onClick={() => handleCategoryToggle(8)}
                  className={`m-3 ${
                    isToggleCategory(8)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  8
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(9)}
                  onClick={() => handleCategoryToggle(9)}
                  className={`m-3 ${
                    isToggleCategory(9)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  9
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(10)}
                  onClick={() => handleCategoryToggle(10)}
                  className={`m-3 ${
                    isToggleCategory(10)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  10
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(11)}
                  onClick={() => handleCategoryToggle(11)}
                  className={`m-3 ${
                    isToggleCategory(11)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  11
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(12)}
                  onClick={() => handleCategoryToggle(12)}
                  className={`m-3 ${
                    isToggleCategory(12)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  12
                </button>

                <button
                  disabled={ismorenumber() && !number1.includes(13)}
                  onClick={() => handleCategoryToggle(13)}
                  className={`m-3 ${
                    isToggleCategory(13)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  13
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(14)}
                  onClick={() => handleCategoryToggle(14)}
                  className={`m-3 ${
                    isToggleCategory(14)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  14
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(15)}
                  onClick={() => handleCategoryToggle(15)}
                  className={`m-3 ${
                    isToggleCategory(15)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  15
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(16)}
                  onClick={() => handleCategoryToggle(16)}
                  className={`m-3 ${
                    isToggleCategory(16)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  16
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(17)}
                  onClick={() => handleCategoryToggle(17)}
                  className={`m-3 ${
                    isToggleCategory(17)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  17
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(18)}
                  onClick={() => handleCategoryToggle(18)}
                  className={`m-3 ${
                    isToggleCategory(18)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  18
                </button>

                <button
                  disabled={ismorenumber() && !number1.includes(19)}
                  onClick={() => handleCategoryToggle(19)}
                  className={`m-3 ${
                    isToggleCategory(19)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  19
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(20)}
                  onClick={() => handleCategoryToggle(20)}
                  className={`m-3 ${
                    isToggleCategory(20)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  20
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(21)}
                  onClick={() => handleCategoryToggle(21)}
                  className={`m-3 ${
                    isToggleCategory(21)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  21
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(22)}
                  onClick={() => handleCategoryToggle(22)}
                  className={`m-3 ${
                    isToggleCategory(22)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  22
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(23)}
                  onClick={() => handleCategoryToggle(23)}
                  className={`m-3 ${
                    isToggleCategory(23)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  23
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(24)}
                  onClick={() => handleCategoryToggle(24)}
                  className={`m-3 ${
                    isToggleCategory(24)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  24
                </button>

                <button
                  disabled={ismorenumber() && !number1.includes(25)}
                  onClick={() => handleCategoryToggle(25)}
                  className={`m-3 ${
                    isToggleCategory(25)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  25
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(26)}
                  onClick={() => handleCategoryToggle(26)}
                  className={`m-3 ${
                    isToggleCategory(26)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  26
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(27)}
                  onClick={() => handleCategoryToggle(27)}
                  className={`m-3 ${
                    isToggleCategory(27)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  27
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(28)}
                  onClick={() => handleCategoryToggle(28)}
                  className={`m-3 ${
                    isToggleCategory(28)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  28
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(29)}
                  onClick={() => handleCategoryToggle(29)}
                  className={`m-3 ${
                    isToggleCategory(29)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  29
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(30)}
                  onClick={() => handleCategoryToggle(30)}
                  className={`m-3 ${
                    isToggleCategory(30)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  30
                </button>

                <button
                  disabled={ismorenumber() && !number1.includes(31)}
                  onClick={() => handleCategoryToggle(31)}
                  className={`m-3 ${
                    isToggleCategory(31)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  31
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(32)}
                  onClick={() => handleCategoryToggle(32)}
                  className={`m-3 ${
                    isToggleCategory(32)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  32
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(33)}
                  onClick={() => handleCategoryToggle(33)}
                  className={`m-3 ${
                    isToggleCategory(33)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  33
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(34)}
                  onClick={() => handleCategoryToggle(34)}
                  className={`m-3 ${
                    isToggleCategory(34)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  34
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(35)}
                  onClick={() => handleCategoryToggle(35)}
                  className={`m-3 ${
                    isToggleCategory(35)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  35
                </button>
                <button
                  disabled={ismorenumber() && !number1.includes(36)}
                  onClick={() => handleCategoryToggle(36)}
                  className={`m-3 ${
                    isToggleCategory(36)
                      ? "bg-red-400"
                      : ismorenumber()
                      ? " bg-blue-300"
                      : "bg-red-100"
                  } w-10 h-10  rounded-full `}
                >
                  36
                </button>
              </div>
            </div>
            <div className="grid col-span-1 grid-cols-2">
              <div className="flex flex-col-reverse col-span-1 ">
                {/* <div className="grid  grid-rows-1"> */}
                {/* <div className="mt-96"> */}
                <button
                  hidden={number1.length <= 0}
                  className="bg-green-400 h-10 px-4  rounded-full"
                >
                  1
                </button>
                {/* </div> */}
                {/* <div className=" -mt-24"> */}
                <button
                  hidden={number1.length <= 1}
                  className="bg-green-400  h-10 px-4 rounded-full"
                >
                  2
                </button>
                {/* </div> */}

                <button
                  hidden={number1.length <= 2}
                  className="bg-green-400  h-10 px-4 rounded-full"
                >
                  3
                </button>
                <button
                  hidden={number1.length <= 3}
                  className="bg-green-400  h-10 px-4 rounded-full"
                >
                  4
                </button>
                <button
                  hidden={number1.length <= 4}
                  className="bg-green-400  h-10 px-4 rounded-full"
                >
                  5
                </button>
                <button
                  hidden={number1.length <= 5}
                  className="bg-green-400  h-10 px-4 rounded-full"
                >
                  6
                </button>
                <button
                  hidden={number1.length <= 6}
                  className="bg-green-400  h-10 px-4 rounded-full"
                >
                  7
                </button>
                <button
                  hidden={number1.length <= 7}
                  className="bg-green-400  h-10 px-4 rounded-full"
                >
                  8
                </button>
                <button
                  hidden={number1.length <= 8}
                  className="bg-green-400  h-10 px-4 rounded-full"
                >
                  9
                </button>
                <button
                  hidden={number1.length <= 9}
                  className="bg-green-400  h-10 px-4 rounded-full"
                >
                  10
                </button>
              </div>
              <div className="col-span-1 flex flex-col-reverse">
                <div className="text-center text-white font-bold mb-2">
                  0.0X
                </div>
                <div className="text-center text-white font-bold mb-3">
                  0.0X
                </div>
                <div className="text-center text-white font-bold mb-4">
                  1.0X
                </div>
                <div className="text-center text-white font-bold mb-4">
                  1.5X
                </div>
                <div className="text-center text-white font-bold mb-5">
                  3.30X
                </div>
                <div className="text-center text-white font-bold mb-4">
                  10.20X
                </div>
                <div className="text-center text-white font-bold mb-4">
                  25.0X
                </div>
                <div className="text-center text-white font-bold mb-4">
                  40.0X
                </div>
                <div className="text-center text-white font-bold mb-4">
                  75.0X
                </div>
                <div className="text-center text-white font-bold mb-4">
                  100.0X
                </div>
              </div>
            </div>

            {/* <div className="ml-32 my-32 bg-red-500"> */}
            <div className="bg-red-400 col-span-3">
              <div className="mt-20">
                <div className="mx-20">
                  <div className="bg-gray-500 rounded-lg p-4 text-center">
                    <div className="text-gray-50 mb-3 ">Bet Amount $</div>
                    <div className="inline-flex">
                      <div>
                        <button className="bg-red-50 px-2 hover:bg-red-300">
                          +
                        </button>
                      </div>
                      <div className="mx-4">
                        <input className="w-28" />
                      </div>
                      <div>
                        <button className="bg-red-50 px-2 hover:bg-red-300 ">
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div>
                    <button
                      onClick={() => handlebet()}
                      className="bg-yellow-400 px-24 mt-3 py-4 hover:bg-yellow-300"
                    >
                      BET
                    </button>
                    <button
                      onClick={() => reset()}
                      className="bg-gray-500 px-24 mt-3 py-4 hover:bg-gray-300"
                    >
                      Clear
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => handlebet()}
                      className="bg-white px-10 mt-3 py-4 hover:bg-yellow-300"
                    >
                      Deposit
                    </button>
                    <button
                      onClick={() => reset()}
                      className="bg-blue-300 px-10 mt-3 py-4 hover:bg-gray-300"
                    >
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-yellow-400 h-full">
                <div className=" text-center">
                  <div className="pt-6 font-bold">Results</div>
                </div>
              </div>
            </div>
            {/* <form className="flex px-10 py-6 flex-col"></form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NachiPage;
