import React from "react";

const DisplayScreen = () => {
  return (
    <div>
      <div className="border rounded-md w-[250px] h-[350px] overflow-hidden">
        <img
          width={1000}
          height={1000}
          alt="image"
          src=""
          className="w-full h-[90%] object-cover"
        />
        <p className="px-2 py-1 uppercase text-[12px]">name</p>
      </div>
    </div>
  );
};

export default DisplayScreen;
