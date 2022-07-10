import React from "react";

import Counter from "./Component/Counter";
import Container from "./Component/Container"
function App() {
  const countValue = {
    a: 1,
    initialVlaue: 5,
  };

  return (
    <Container>
    <div>
      <Counter {...countValue} />
    </div>
    </Container>
  );4
}

export default App;
