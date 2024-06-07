import { motion } from "framer-motion";
import Spock from "/src/assets/icon-spock.png";
import Lizard from "/src/assets/icon-lizard.png";

function BonusGameComponent(props: {
  setSpockState: (status: boolean) => void;
  setLizardState: (status: boolean) => void;
  setShowResults: (status: boolean) => void;
}) {
  return (
    <>
      <motion.img
        onClick={() => {
          props.setSpockState(true);
          props.setShowResults(true);
        }}
        className="absolute mobile:top-[15%] mobile:left-[-10%] top-[20%] left-[-15%] desktop:left-[-15%] w-full max-w-[90px] mobile:max-w-[96px] desktop:max-w-[120px] desktop:w-[120px] rounded-full cursor-pointer"
        src={Spock}
        alt="Spock"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.img
        onClick={() => {
          props.setLizardState(true);
          props.setShowResults(true);
        }}
        className="absolute mobile:top-[75%] mobile:right-[65%] top-[75%] right-[55%] desktop:right-[60%] w-full max-w-[90px] mobile:max-w-[96px] desktop:max-w-[120px] desktop:w-[120px] rounded-full cursor-pointer"
        src={Lizard}
        alt="Lizard"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );
}

export default BonusGameComponent;
