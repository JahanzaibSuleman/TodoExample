import { FC, useEffect, useState } from "react";
import { ToDo } from "./types";

const ExampleAPIToDos: FC = () => {
  const [toDoData, setToDoData] = useState<ToDo[]>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const fetchToDos = async () => {
      try {
        setLoading(true);

        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
          throw response.status;
        }
        const data = await response.json();
        setToDoData(data);
      } catch (error) {
        setError('Something went wrong.');
      } finally {
        setLoading(false);
      }
    };

    fetchToDos();
  }, []);

  return (
    <ul>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          {toDoData && toDoData.length === 0 && <p>List is empty</p>}
          {toDoData && toDoData.map(toDo => (
            <li key={toDo.id}>
              <b>User Id: </b>{toDo.userId}<br />
              <b>Title: </b>{toDo.title}<br />
              <b>Completed: </b>{toDo.completed ? 'Yes' : 'No'}<br />
            </li>
          ))}
        </>
      )}
    </ul>
  );

};

export default ExampleAPIToDos;
