import React from "react";
import NachiPage from "../components/NachiPage";
import dynamic from "next/dynamic";

const DynamicExample = dynamic(() => import("../components/header"), {
  ssr: false,
});

function Nachi() {
  return (
    <div>
      {typeof window !== "undefined" && <DynamicExample />}
      <NachiPage />
    </div>
  );
}

export default Nachi;
