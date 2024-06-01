import Logo from "/src/assets/logo.svg";
import Triangle from "/src/assets/bg-triangle.svg";
import Rock from "/src/assets/icon-rock.png";
import Paper from "/src/assets/icon-paper.png";
import Scissors from "/src/assets/icon-scissors.png";
import { useEffect, useState } from "react";
import Rules from "../Rules";
import GameResult from "../GameResult";

function Home() {
  const [Score, setScore] = useState<number>(0);
  const [showRules, setShowRules] = useState<boolean>(false);
  const [BonusGame, setBonusGame] = useState<boolean>(false);
  const [ResultText, setResultText] = useState<string>("");
  const [rockState, setRockState] = useState<boolean>(false);
  const [paperState, setPaperState] = useState<boolean>(false);
  const [scissorsState, setScissorsState] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  useEffect(() => {
    if (ResultText === "YOU WIN") {
      setScore((prevScore) => prevScore + 1);
    }
  }, [ResultText]);

  return (
    <div className="flex items-center flex-col pt-[32px] pb-[56px] px-[32px]">
      <div className="flex justify-between items-center border-[3px] border-slate-500 rounded-sm w-full max-w-[700px] pl-[24px] pr-[12px] py-[24px] mb-[145px]">
        <img className="w-[116px] tablet:w-max" src={Logo} alt="Logo" />
        <div className="tablet:w-[150px] tablet:h-[114px] flex justify-center items-center flex-col w-[80px] h-[72px] rounded-lg bg-[#FFF] overflow-hidden">
          <h1 className="tablet:text-[16px] tablet:leading-[19.2px] tablet:tracking-[2.5px] text-[10px] font-[600] leading-[12px] tracking-[1.56px] text-[#2A45C2]">
            SCORE
          </h1>
          <span className="tablet:text-[64px] tablet:leading-[64px] text-[40px] font-[700] leading-[40px] text-[#000]">
            {Score}
          </span>
        </div>
      </div>
      {!showResults && (
        <div className="flex justify-center items-center mb-[140px]">
          <img
            className="mobile:w-[270px] mobile:h-[240px] w-[190px] h-[170px]"
            src={Triangle}
            alt="Triangle"
          />
          <div className="flex flex-col-reverse justify-center items-center absolute">
            <img
              onClick={() => {
                setRockState(true);
                setShowResults(true);
              }}
              className="w-full h-full mobile:max-w-[130px] max-w-[103px] mt-[-20px] rounded-full cursor-pointer"
              src={Rock}
              alt="Rock"
            />
            <div className="flex gap-[10px] mb-[15px] mt-[-40px] tablet:gap-[51px]">
              <img
                onClick={() => {
                  setPaperState(true);
                  setShowResults(true);
                }}
                className="w-full h-full mobile:max-w-[130px] max-w-[103px] rounded-full cursor-pointer"
                src={Paper}
                alt="Paper"
              />
              <img
                onClick={() => {
                  setScissorsState(true);
                  setShowResults(true);
                }}
                className="w-full h-full mobile:max-w-[130px] max-w-[103px] rounded-full cursor-pointer"
                src={Scissors}
                alt="Scissors"
              />
            </div>
          </div>
        </div>
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
        />
      )}
      <button
        onClick={() => {
          setShowRules(true);
        }}
        className="text-[16px] font-[600] leading-[19.2px] tracking-[2.5px] text-[#FFF] border-[1px] rounded-lg px-[37px] py-[11px] outline-none"
      >
        RULES
      </button>
      <Rules
        showRules={showRules}
        BonusGame={BonusGame}
        setShowRules={setShowRules}
      />
      <button
        onClick={() => {
          setBonusGame(!BonusGame);
        }}
        className="text-[16px] font-[600] leading-[19.2px] tracking-[2.5px] text-[#FFF] border-[1px] rounded-lg px-[37px] py-[11px] outline-none mt-[20px]"
      >
        {BonusGame ? "RETURN" : "BONUS GAME"}
      </button>
    </div>
  );
}

export default Home;
