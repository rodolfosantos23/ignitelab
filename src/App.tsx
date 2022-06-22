import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  // Retorna um objeto lessons: Array de Lesson
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <div>
      <ul>
        {data?.lessons.map((lesson) => {
          return <li key={lesson.id}>{lesson.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
