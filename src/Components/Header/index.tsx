import Logo from "/src/assets/logo.svg";
import BonusLogo from "/src/assets/logo-bonus.svg";

function Header(props: { BonusGame: boolean; Score: number }) {
  return (
    <div className="flex justify-between items-center border-[3px] border-slate-500 rounded-lg w-full max-w-[700px] pl-[24px] pr-[12px] py-[24px] mb-[115px]">
      <img
        className="w-[116px] tablet:w-max"
        src={props.BonusGame ? BonusLogo : Logo}
        alt="Logo"
      />
      <div className="tablet:w-[150px] tablet:h-[114px] flex justify-center items-center flex-col w-[80px] h-[72px] rounded-lg bg-[#FFF] overflow-hidden">
        <h1 className="tablet:text-[16px] tablet:leading-[19.2px] tablet:tracking-[2.5px] text-[10px] font-[600] leading-[12px] tracking-[1.56px] text-[#2A45C2]">
          SCORE
        </h1>
        <span className="tablet:text-[64px] tablet:leading-[64px] text-[40px] font-[700] leading-[40px] text-[#000]">
          {props.Score}
        </span>
      </div>
    </div>
  );
}

export default Header;
