import React from "react";

import Providers from "@features/Providers";
import Routes from "@routing/Routes";
import { REACT_APP_PURPLE_SILENCE_AWS_PINPOINT_PROJECT } from "@env";

const App: React.FC = () => {
  console.log(REACT_APP_PURPLE_SILENCE_AWS_PINPOINT_PROJECT);

  return (
    <Providers>
      <Routes />
    </Providers>
  );
};

export default App;
