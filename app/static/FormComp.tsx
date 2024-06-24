import React from "react";
import { MdImage } from "react-icons/md";

const FormComp = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border rounded-md w-[500px] min-h-[300px] p-4 ">
        <div>Make A Post</div>

        <div className="my-10">
          <hr />
        </div>

        <form>
          <div className="flex">
            <div className="flex flex-col mb-4 flex-1">
              <label className="font-semibold text-[12px]">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border outline-none h-[45px] rounded-md pl-2"
              />
            </div>
            <div className="flex flex-col mb-4 items-center">
              <label
                htmlFor="pixID"
                className="mt-6 ml-2 text-[28px] font-semibold  items-center h-full"
              >
                <MdImage />
              </label>
              <input
                id="pixID"
                type="file"
                name="image"
                className="hidden border outline-none h-[45px] rounded-md pl-2"
              />
            </div>
          </div>

          <button className="w-full mt-8 h-[55px] flex items-center justify-center text-white bg-neutral-800 rounded-md">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComp;
