import HelpSVG from "./help.svg";
import HelpSVG1 from "./help1.svg";

function help() {
  return (
    <div className="h-auto max-w-[80%] m-auto">
      <div className="flex mt-10 mx-10">
        <img className="w-[40%] m-auto" src={HelpSVG} alt="" />
        <div className="w-[50%] m-auto">
          <a
            href="http://localhost:3000/terms"
            className="font-bold text-4xl text-indigo-600"
          >
            Veja mais sobre o termos de uso e política de privacidade?
          </a>
        </div>
      </div>
      <div className="flex mt-10 mx-10">
        <div className="m-auto w-[50%]">
          <a
            href="http://localhost:3000/doubts"
            className="font-bold text-center text-4xl text-indigo-600"
          >
            Problemas com sua encomenda, deseja alguma ajuda?
          </a>
        </div>
        <img className="w-[40%]" src={HelpSVG1} alt="" />
      </div>
    </div>
  );
}

export default help;
