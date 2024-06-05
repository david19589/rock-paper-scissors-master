import Rock from "/src/assets/icon-rock.png";
import Paper from "/src/assets/icon-paper.png";
import Scissors from "/src/assets/icon-scissors.png";
import Spock from "/src/assets/icon-spock.png";
import Lizard from "/src/assets/icon-lizard.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  spockState: boolean;
  setSpockState: React.Dispatch<React.SetStateAction<boolean>>;
  lizardState: boolean;
  setLizardState: React.Dispatch<React.SetStateAction<boolean>>;
  BonusGame: boolean;
}

function GameResult({
  rockState,
  setRockState,
  paperState,
  setPaperState,
  scissorsState,
  setScissorsState,
  spockState,
  setSpockState,
  lizardState,
  setLizardState,
  setShowResults,
  ResultText,
  setResultText,
  BonusGame,
}: GameResultProps) {
  const [housePick, setHousePick] = useState("");

  useEffect(() => {
    const images = BonusGame
      ? [Rock, Paper, Scissors, Spock, Lizard]
      : [Rock, Paper, Scissors];

    const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    };
    const houseChoice = getRandomImage();
    setHousePick(houseChoice);

    if (
      (rockState && (houseChoice === Scissors || houseChoice === Lizard)) ||
      (paperState && (houseChoice === Rock || houseChoice === Spock)) ||
      (scissorsState && (houseChoice === Paper || houseChoice === Lizard)) ||
      (spockState && (houseChoice === Scissors || houseChoice === Rock)) ||
      (lizardState && (houseChoice === Spock || houseChoice === Paper))
    ) {
      setResultText("YOU WIN");
    } else if (
      (rockState && houseChoice === Rock) ||
      (paperState && houseChoice === Paper) ||
      (scissorsState && houseChoice === Scissors) ||
      (spockState && houseChoice === Spock) ||
      (lizardState && houseChoice === Lizard)
    ) {
      setResultText("TIE");
    } else {
      setResultText("YOU LOSE");
    }
  }, [
    rockState,
    paperState,
    scissorsState,
    setResultText,
    spockState,
    lizardState,
    BonusGame,
  ]);

  const getStateValue = () => {
    if (rockState) return { src: Rock, alt: "Rock" };
    if (paperState) return { src: Paper, alt: "Paper" };
    if (scissorsState) return { src: Scissors, alt: "Scissors" };
    if (spockState) return { src: Spock, alt: "Spock" };
    if (lizardState) return { src: Lizard, alt: "Lizard" };
    return { src: "", alt: "" };
  };

  const { src, alt } = getStateValue();

  return (
    <>
      <div className="flex justify-center items-center mb-[62px] gap-[30px]">
        <div className="flex flex-col justify-center items-center">
          <motion.img
            className="w-full h-full max-w-[90px] mobile:max-w-[96px] desktop:max-w-[190px] desktop:w-[190px] rounded-full cursor-default"
            src={src}
            alt={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="desktop:translate-y-[-250px] desktop:text-[24px] desktop:leading-[32px] desktop:tracking-[3px] desktop:w-[285.38px] text-[11px] font-[700] leading-[16px] tracking-[1.88px] text-[#FFF] text-center h-[32px] min-w-[84px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            YOU PICKED
          </motion.h1>
        </div>
        <div className="hidden tablet:flex flex-col">
          <motion.h1
            className="text-[56px] font-[700] leading-[67.2px] text-[#FFF] mb-[16px] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {ResultText}
          </motion.h1>
          <motion.button
            onClick={() => {
              setShowResults(false);
              setRockState(false);
              setPaperState(false);
              setScissorsState(false);
              setSpockState(false);
              setLizardState(false);
              setResultText("");
            }}
            className="text-[16px] font-[600] leading-[19.2px] tracking-[2.5px] text-[#000] bg-[#FFF] border-[1px] rounded-lg px-[37px] py-[11px] outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            PLAY AGAIN
          </motion.button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <motion.img
            className="w-full h-full max-w-[90px] mobile:max-w-[96px] desktop:max-w-[190px] desktop:w-[190px] rounded-full cursor-default"
            src={housePick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="desktop:translate-y-[-250px] desktop:text-[24px] desktop:leading-[32px] desktop:tracking-[3px] desktop:w-full text-[11px] font-[700] leading-[16px] tracking-[1.88px] text-[#FFF] text-center h-[32px] w-[84px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            THE HOUSE PICKED
          </motion.h1>
        </div>
      </div>
      <div className="tablet:hidden flex flex-col items-center mb-[52px]">
        <motion.h1
          className="text-[56px] font-[700] leading-[67.2px] text-[#FFF] mb-[16px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {ResultText}
        </motion.h1>
        <motion.button
          onClick={() => {
            setShowResults(false);
            setRockState(false);
            setPaperState(false);
            setScissorsState(false);
            setSpockState(false);
            setLizardState(false);
            setResultText("");
          }}
          className="text-[16px] font-[600] leading-[19.2px] tracking-[2.5px] text-[#000] bg-[#FFF] border-[1px] rounded-lg px-[37px] py-[11px] outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          PLAY AGAIN
        </motion.button>
      </div>
    </>
  );
}

export default GameResult;
