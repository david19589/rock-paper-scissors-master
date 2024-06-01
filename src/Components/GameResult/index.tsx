import Rock from "/src/assets/icon-rock.png";
import Paper from "/src/assets/icon-paper.png";
import Scissors from "/src/assets/icon-scissors.png";
import { useEffect, useState } from "react";

interface GameResultProps {
  rockState: boolean;
  setRockState: React.Dispatch<React.SetStateAction<boolean>>;
  paperState: boolean;
  setPaperState: React.Dispatch<React.SetStateAction<boolean>>;
  scissorsState: boolean;
  setScissorsState: React.Dispatch<React.SetStateAction<boolean>>;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
  ResultText: string;
  setResultText: React.Dispatch<React.SetStateAction<string>>;
}

function GameResult({
  rockState,
  setRockState,
  paperState,
  setPaperState,
  scissorsState,
  setScissorsState,
  setShowResults,
  ResultText,
  setResultText,
}: GameResultProps) {
  const [housePick, setHousePick] = useState<string>("");

  useEffect(() => {
    const images = [Rock, Paper, Scissors];
    const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    };

    const houseChoice = getRandomImage();
    setHousePick(houseChoice);

    if (
      (rockState && houseChoice === Scissors) ||
      (paperState && houseChoice === Rock) ||
      (scissorsState && houseChoice === Paper)
    ) {
      setResultText("YOU WIN");
    } else if (
      (rockState && houseChoice === Rock) ||
      (paperState && houseChoice === Paper) ||
      (scissorsState && houseChoice === Scissors)
    ) {
      setResultText("TIE");
    } else {
      setResultText("YOU LOSE");
    }
  }, [rockState, paperState, scissorsState, setResultText]);

  return (
    <>
      <div className="flex justify-center items-center mb-[62px] gap-[30px]">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-full h-full mobile:max-w-[130px] max-w-[79px] desktop:max-w-[190px] desktop:w-[190px] rounded-full cursor-pointer"
            src={
              rockState
                ? Rock
                : paperState
                ? Paper
                : scissorsState
                ? Scissors
                : ""
            }
            alt={
              rockState
                ? "Rock"
                : paperState
                ? "Paper"
                : scissorsState
                ? "Scissors"
                : ""
            }
          />
          <h1 className="desktop:translate-y-[-250px] desktop:text-[24px] desktop:leading-[32px] desktop:tracking-[3px] desktop:w-[285.38px] text-[11px] font-[700] leading-[16px] tracking-[1.88px] text-[#FFF] text-center h-[32px]">
            YOU PICKED
          </h1>
        </div>
        <div className="hidden tablet:flex flex-col">
          <h1 className="text-[56px] font-[700] leading-[67.2px] text-[#FFF] mb-[16px] text-center">
            {ResultText}
          </h1>
          <button
            onClick={() => {
              setShowResults(false);
              setRockState(false);
              setPaperState(false);
              setScissorsState(false);
              setResultText("");
            }}
            className="text-[16px] font-[600] leading-[19.2px] tracking-[2.5px] text-[#000] bg-[#FFF] border-[1px] rounded-lg px-[37px] py-[11px] outline-none"
          >
            PLAY AGAIN
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-full h-full mobile:max-w-[130px] desktop:max-w-[190px] desktop:w-[190px] max-w-[79px] rounded-full cursor-pointer"
            src={housePick}
          />
          <h1 className="desktop:translate-y-[-250px] desktop:text-[24px] desktop:leading-[32px] desktop:tracking-[3px] desktop:w-full text-[11px] font-[700] leading-[16px] tracking-[1.88px] text-[#FFF] text-center w-[84px] ">
            THE HOUSE PICKED
          </h1>
        </div>
      </div>
      <div className="tablet:hidden flex flex-col items-center mb-[52px]">
        <h1 className="text-[56px] font-[700] leading-[67.2px] text-[#FFF] mb-[16px] text-center">
          {ResultText}
        </h1>
        <button
          onClick={() => {
            setShowResults(false);
            setRockState(false);
            setPaperState(false);
            setScissorsState(false);
            setResultText("");
          }}
          className="text-[16px] font-[600] leading-[19.2px] tracking-[2.5px] text-[#000] bg-[#FFF] border-[1px] rounded-lg px-[37px] py-[11px] outline-none"
        >
          PLAY AGAIN
        </button>
      </div>
    </>
  );
}

export default GameResult;
