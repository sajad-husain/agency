import React from "react";

export default function Loader() {
  return (
    <div className="loader-container">
      <span className="loader"></span>
      <style jsx>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0px;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 1); /* Arka plan rengi */
          z-index: 9999; /* Üstte görünmesi için */
        }

        .loader {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: block;
          box-sizing: border-box;
          animation: shadowRolling 2s linear infinite;
          background-color: transparent; /* zemin yok, sadece glow */
        }

        @keyframes shadowRolling {
          0% {
            box-shadow: none;
          }
          12% {
            box-shadow: 100px 0 #b3e5fc, 100px 0 15px 5px #b3e5fc66; /* açık mavi glow */
          }
          25% {
            box-shadow: 110px 0 #81d4fa, 110px 0 15px 5px #81d4fa66,
              100px 0 #b3e5fc, 100px 0 15px 5px #b3e5fc66;
          }
          36% {
            box-shadow: 120px 0 #4fc3f7, 120px 0 15px 5px #4fc3f766,
              110px 0 #81d4fa, 110px 0 15px 5px #81d4fa66, 100px 0 #b3e5fc,
              100px 0 15px 5px #b3e5fc66;
          }
          50% {
            box-shadow: 130px 0 #29b6f6, 130px 0 15px 5px #29b6f666,
              120px 0 #4fc3f7, 120px 0 15px 5px #4fc3f766, 110px 0 #81d4fa,
              110px 0 15px 5px #81d4fa66, 100px 0 #b3e5fc,
              100px 0 15px 5px #b3e5fc66;
          }
          62% {
            box-shadow: 130px 0 #e1f5fe, 130px 0 15px 5px #e1f5fe88,
              120px 0 #29b6f6, 120px 0 15px 5px #29b6f666, 110px 0 #81d4fa,
              110px 0 15px 5px #81d4fa66;
          }
          75% {
            box-shadow: 130px 0 #ffffff, 130px 0 15px 5px #ffffff88,
              120px 0 #e1f5fe, 120px 0 15px 5px #e1f5fe88;
          }
          87% {
            box-shadow: 130px 0 #bbdefb, 130px 0 15px 5px #bbdefb88;
          }
          100% {
            box-shadow: none;
          }
        }
      `}</style>
    </div>
  );
}
