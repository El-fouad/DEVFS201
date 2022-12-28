import { useState } from "react";

const Checkboxgrp = () => {
  const checkboxes = [
    { value: 1, text: "chek1" },
    { value: 2, text: "chek2", checked: true },
    { value: 3, text: "chek3", checked: true },
    { value: 4, text: "chek4" },
  ];
  const [checked, setvalue] = useState([]);

  return (
    <>
      <form action="">
        {checkboxes.map((chk) => (
          <>
            <label htmlFor={chk.text}>
              {chk.text}
              <input
                type="checkbox"
                key={chk.value}
                value={chk.text}
                checked={chk.checked}
              />
            </label>
            <br />
          </>
        ))}
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default Checkboxgrp;
