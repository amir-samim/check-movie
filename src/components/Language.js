import { useState } from "react";

export const Language = ({ language }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="flex items-center">
      <span
        onMouseEnter={() => setHidden(!hidden)}
        onMouseLeave={() => setHidden(!hidden)}

        key={language.iso_639_1 + "key"}
        className=" cursor-pointer border rounded text-base m-0.5 px-1 text-gray-700 dark:text-gray-200 dark:border-gray-600 border-gray-400 font-normal"
      >
        {hidden ? language.iso_639_1 : language.english_name}
      </span>
    </div>
  );
};
