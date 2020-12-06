import { mount } from "marketing/MarketingApp";

import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      // now we need understand where child navigate to , need add arg to cb()
      // location
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) history.push(nextPathName);
      },
    });
    // emitter
    // if any change to history listen to it and emit listener
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref} />;
};
