import React from "react";
import Nabar from "./navbar";
import Footer from "./footer";
import { useRouter } from "next/router";

function Index(props) {
  const router = useRouter();
  const [except, setExcept] = React.useState(false);
  React.useEffect(() => {
    if (router.pathname === "/about-me") {
      setExcept(!except);
    }
  }, []);
  return (
    <div className='relative'>
      <Nabar />
      <div className='mt-16'>{props.children}</div>
      {!except ? <Footer /> : null}
    </div>
  );
}

export default Index;
