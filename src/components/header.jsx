import { useState } from "react";

const Header = ({ username, showDummyAlert }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello {username}</h1>
      <button onClick={showDummyAlert}>Dummy Alert</button>
      Header I am from Header Component working fine
    </div>
  );
};

export default Header;