import RulesImg from "/src/assets/image-rules.svg";
import Close from "/src/assets/icon-close.svg";
import BonusGameRules from "/src/assets/image-rules-bonus.svg";

function Rules(props: {
  showRules: boolean;
  setShowRules: React.Dispatch<React.SetStateAction<boolean>>;
  BonusGame: boolean;
}) {
  return (
    <div>
      {props.showRules && (
        <div className="tablet:w-[100vw] tablet:h-[100vh] tablet:absolute tablet:top-0 tablet:bg-[#00000069]">
          <div className="tablet:w-[400px] tablet:h-[415px] tablet:left-[25%] tablet:top-[25%] tablet:rounded-lg flex flex-col items-center justify-center absolute top-0 bottom-0 right-0 left-0 bg-[#FFF]">
            <div className="tablet:flex tablet:items-center tablet:mb-[40px] tablet:gap-[170px]">
              <h1 className="text-[32px] font-[700] leading-[32px] text-[#000] mb-[113px] tablet:mb-0">
                RULES
              </h1>
              <img
                onClick={() => {
                  props.setShowRules(false);
                }}
                className="hidden tablet:flex cursor-pointer"
                src={Close}
                alt="Close"
              />
            </div>
            <img
              className="tablet:mb-0 mb-[154px]"
              src={props.BonusGame ? BonusGameRules : RulesImg}
              alt="Rules"
            />
            <img
              onClick={() => {
                props.setShowRules(false);
              }}
              className="tablet:hidden cursor-pointer"
              src={Close}
              alt="Close"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Rules;
