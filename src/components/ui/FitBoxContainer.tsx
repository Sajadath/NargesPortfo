import Image from "next/image";
import mainBg from "../../../public/main/mainBackground.png";

function FitBoxContainer({
  children,
  withBackground,
}: {
  children: React.ReactNode;
  withBackground?: boolean;
}) {
  return (
    <div className="p-5 w-full flex relative">
      {withBackground && (
        <Image fill className="object-cover -z-1" src={mainBg} alt="mainBG" />
      )}

      <div className=" grow p-7 border border-lightGray/50 rounded-2xl">
        {children}
      </div>
    </div>
  );
}

export default FitBoxContainer;
