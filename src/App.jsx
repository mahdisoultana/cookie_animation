import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import styled from "styled-components";
export const Cookie = styled.aside`
  .info {
  }
`;
function App() {
  const CookieAnim = useAnimation();
  const WrapperAnim = useAnimation();
  const InfoAnim = useAnimation();
  useEffect(() => {
    async function animation() {
      await WrapperAnim.start({
        scale: 1,
        transition: {
          type: "spring",

          bounce: 0.6,
          duration: 1.2,
        },
      });

      await InfoAnim.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",

          bounce: 0.7,
        },
      });

      await CookieAnim.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",

          bounce: 0.7,
        },
      });
      await InfoAnim.start({
        y: [16, -16],

        transition: {
          yoyo: Infinity,
          duration: 1,
          ease: "easeOut",
          bounce: 0.7,
          type: "spring",
        },
      });
    }
    animation();
  }, []);

  return (
    <motion.div className="h-screen overflow-hidden w-full flex justify-center items-center p-4">
      <motion.div
        animate={WrapperAnim}
        initial={{
          scale: 0.2,
        }}
        className="max-w-xl overflow-hidden bg-gradient-to-l from-orange-600 to-orange-700 min-h-96 text-center lg:text-left  rounded-lg shadow-lg py-12  lg:grid lg:grid-cols-3 "
      >
        <motion.div
          animate={InfoAnim}
          initial={{
            x: -100,
            opacity: 0,
          }}
          className="flex justify-center items-center w-full   "
        >
          <div className="bg-green-400 w-[130px] h-[130px] rounded-full"></div>
        </motion.div>

        <motion.div
          animate={CookieAnim}
          initial={{
            x: 100,
            opacity: 0,
          }}
          className="    text-gray-100 col-span-2"
        >
          <h3 className="pb-4 text-4xl font-lighter ">Cookie Policy</h3>
          <p className="py-4 font-medium pr-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            deserunt a nisi id deleniti autem alias cumque natus rem{" "}
          </p>
          <button className="inline-block border-none rounded-lg shodow-lg bg-gray-100 text-black text-lg px-12 py-2   ">
            Okey ,Get It
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default App;
