import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [ 
          '프론트엔드',
          '웹 앱',
          '하이브리드 앱',
          'Android',
          'IOS'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
