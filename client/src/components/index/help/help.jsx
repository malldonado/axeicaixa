import React from "react";
import HelpSVG from "./help.svg";
import HelpSVG1 from "./help1.svg";

function help() {
  return (
    <div class="h-auto max-w-[70%] m-auto">
      <div class="flex mt-10 mx-10">
        <img className="w-[40%] m-auto" src={HelpSVG} alt="" />
        <card class="w-[50%] m-auto">
          <a
            href="http://localhost:3000/terms"
            class="font-bold text-4xl text-indigo-600"
          >
            Veja mais sobre o termos de uso e política de privacidade?
          </a>
        </card>
      </div>
      <div class="flex mt-10 mx-10">
        <card class="m-auto w-[50%]">
          <a
            href="http://localhost:3000/doubts"
            class="font-bold text-center text-4xl text-indigo-600"
          >
            Problemas com sua encomenda, deseja alguma ajuda?
          </a>
        </card>
        <img className="w-[40%]" src={HelpSVG1} alt="" />
      </div>
    </div>
  );
}

export default help;
