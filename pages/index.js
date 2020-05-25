import React, {useEffect} from "react";
import Router from "next/router";

import withApollo from "../lib/apollo";

const Index =  () => {

  useEffect(() => {
      Router.push("/landing");
    }
  , [])


  return <div />
}

export default withApollo({ ssr: true })(Index);