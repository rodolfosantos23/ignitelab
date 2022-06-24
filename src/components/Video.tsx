import { DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";
import { DefaultUi, Player, Youtube } from "@vime/react";
import { Button } from "./Button";
import { LargeLink } from "./LargeLink";

// Importa o css padrão do vídeo
import "@vime/core/themes/default.css";

// Props
interface VideoProps {
  lessonSlug: string;
}

// Resposta
interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}

const GET_LESSON_BY_SLUG_QUERY = gql`
  query getLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      id
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;

export function Video(props: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug,
    },
    fetchPolicy: "no-cache", // Desabilita o cachê do Apollo para essa chamada
  });

  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* Video */}
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            {/* Controles padrões do vídeo */}
            <DefaultUi />
          </Player>
        </div>
      </div>

      {/* Class Details */}
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}{" "}
            </p>

            {/* Teacher Details */}
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL}
                alt={data.lesson.teacher.name}
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {data.lesson.teacher.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {data.lesson.teacher.bio}
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
