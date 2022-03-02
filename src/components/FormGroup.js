import React from "react";

const FormGroup = (placeholder, label) => {
  return (
    <div className="relative">
      <label className="text-blgrey bg-white absolute  bottom-10 left-5 text-sm  ">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="border rounded-lg border-bgray placeholder-black py-3 px-4 w-full"
      />
    </div>
  );
};

export default FormGroup;
