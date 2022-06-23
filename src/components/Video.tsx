import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
import { Button } from "./Button";
import { LargeLink } from "./LargeLink";

export function Video() {
  return (
    <div className="flex-1">
      {/* Video */}
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          Video
        </div>
      </div>

      {/* Class Details */}
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 01 - Abertura do IgniteLab
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da
              aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
              realizar o setup do nosso projeto no GraphCMS criando as entidades
              da aplicação e integrando a API GraphQL gerada pela plataforma no
              nosso front-end utilizando Apollo Client.
            </p>

            {/* Teacher Details */}
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 rounded-full border-2 border-blue-500"
                src="https://github.com/rodolfosantos23.png"
                alt="Rodolfo Santos"
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Rodolfo Santos
                </strong>
                <span className="text-gray-200 text-sm block">
                  CEO @rodolfosantos#DEV
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4">
            <Button
              text="Comunidade do Discord"
              link="#"
              variant="success"
              logo={DiscordLogo}
              logoSize={24}
            />
            <Button
              text="Acesse o Desafio"
              link="#"
              variant="info"
              logo={Lightning}
              logoSize={24}
            />
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <LargeLink
            link="#"
            title="Material Complementar"
            description="Acesse o material complementar para acelerar o seu
            desenvolvimento"
            logo={FileArrowDown}
          />

          <LargeLink
            link="#"
            title="Wallpaper"
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            logo={FileArrowDown}
          />
        </div>
      </div>
    </div>
  );
}
