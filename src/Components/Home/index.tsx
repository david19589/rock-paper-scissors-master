import Triangle from "/src/assets/bg-triangle.svg";
import Pentagon from "/src/assets/bg-pentagon.svg";
import Rock from "/src/assets/icon-rock.png";
import Paper from "/src/assets/icon-paper.png";
import Scissors from "/src/assets/icon-scissors.png";
import { useEffect, useState } from "react";
import Rules from "../Rules";
import GameResult from "../GameResult";
import { motion } from "framer-motion";
import Header from "../Header";
import BonusGameComponent from "../BonusGameComponent";

function Home() {
  const [Score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [BonusGame, setBonusGame] = useState(false);
  const [ResultText, setResultText] = useState("");
  const [rockState, setRockState] = useState(false);
  const [paperState, setPaperState] = useState(false);
  const [scissorsState, setScissorsState] = useState(false);
  const [spockState, setSpockState] = useState(false);
  const [lizardState, setLizardState] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (ResultText === "YOU WIN") {
      setScore((prevScore) => prevScore + 1);
    }
  }, [ResultText]);

  const allPlayingStates = [
    rockState,
    paperState,
    scissorsState,
    spockState,
    lizardState,
  ].every((state) => !state);

  return (
    <div className="flex items-center flex-col pt-[32px] pb-[56px] px-[32px] w-[100vw] h-[100vh]">
      <Header BonusGame={BonusGame} Score={Score} />
      {!showResults && (
        <motion.div
          className="flex justify-center items-center mb-[65px] desktop:mb-[120px] relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="mobile:w-[270px] mobile:h-[240px] w-[190px] h-[170px]"
            src={BonusGame ? Pentagon : Triangle}
            alt={BonusGame ? "Pentagon" : "Triangle"}
          />
          <div className="flex flex-col-reverse justify-center items-center">
            {BonusGame && (
              <BonusGameComponent
                setSpockState={setSpockState}
                setLizardState={setLizardState}
                setShowResults={setShowResults}
              />
            )}
            <motion.img
              onClick={() => {
                setRockState(true);
                setShowResults(true);
              }}
              className={`w-full rounded-full cursor-pointer ${
                BonusGame
                  ? "max-w-[90px] mobile:max-w-[96px] desktop:max-w-[120px] desktop:w-[120px] absolute mobile:top-[75%] mobile:left-[65%] top-[75%] left-[60%]"
                  : "mobile:max-w-[130px] max-w-[103px] desktop:max-w-[160px] desktop:w-[160px] desktop:bottom-[-15%] desktop:left-[20%] absolute left-[25%] bottom-0"
              }`}
              src={Rock}
              alt="Rock"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="flex gap-[10px] mb-[15px] tablet:gap-[51px]">
              <motion.img
                onClick={() => {
                  setPaperState(true);
                  setShowResults(true);
                }}
                className={`w-full rounded-full cursor-pointer ${
                  BonusGame
                    ? "max-w-[90px] mobile:max-w-[96px] desktop:max-w-[120px] desktop:w-[120px] absolute left-[75%] top-[17%]"
                    : "mobile:max-w-[130px] max-w-[103px] desktop:max-w-[160px] desktop:w-[160px] desktop:top-[-25%] desktop:left-[-15%] absolute left-[-10%] top-[-20%]"
                }`}
                src={Paper}
                alt="Paper"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.img
                onClick={() => {
                  setScissorsState(true);
                  setShowResults(true);
                }}
                className={`w-full rounded-full cursor-pointer ${
                  BonusGame
                    ? "max-w-[90px] mobile:max-w-[96px] desktop:max-w-[120px] desktop:w-[120px] absolute mobile:right-[30%] mobile:top-[-15%] right-[24%] top-[-15%] desktop:right-[25%]"
                    : "mobile:max-w-[130px] max-w-[103px] desktop:max-w-[160px] desktop:w-[160px] desktop:top-[-25%] desktop:right-[-15%] absolute right-[-10%] top-[-20%]"
                }`}
                src={Scissors}
                alt="Scissors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      )}
      {showResults && (
        <GameResult
          rockState={rockState}
          setRockState={setRockState}
          paperState={paperState}
          setPaperState={setPaperState}
          scissorsState={scissorsState}
          setScissorsState={setScissorsState}
          setShowResults={setShowResults}
          ResultText={ResultText}
          setResultText={setResultText}
          spockState={spockState}
          setSpockState={setSpockState}
          lizardState={lizardState}
          setLizardState={setLizardState}
          BonusGame={BonusGame}
        />
      )}
      <div className="tablet:flex-row-reverse tablet:items-center tablet:justify-between tablet:w-full max-w-[1440px] flex flex-col">
        {allPlayingStates && (
          <motion.button
            onClick={() => {
              setShowRules(true);
            }}
            className="text-[16px] font-[600] leading-[19.2px] tracking-[2.5px] text-[#FFF] border-[2px] rounded-lg px-[37px] py-[11px] outline-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            RULES
          </motion.button>
        )}
        <Rules
          showRules={showRules}
          BonusGame={BonusGame}
          setShowRules={setShowRules}
        />
        {allPlayingStates && (
          <motion.button
            onClick={() => {
              setBonusGame(!BonusGame);
            }}
            className="tablet:mt-0 text-[16px] font-[600] leading-[19.2px] tracking-[2.5px] text-[#FFF] border-[2px] rounded-lg px-[37px] py-[11px] outline-none mt-[20px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {BonusGame ? "RETURN" : "BONUS GAME"}
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default Home;
