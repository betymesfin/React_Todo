import * as React from 'react';
import styles from './TodoListItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy} from '@fortawesome/free-solid-svg-icons';


function DoneTodoList() {
  const [doneTodos, setDoneTodos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchDoneTodos = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

   const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?filterByFormula={Done}`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();

      const todos = data.records.map((todo) => {
        return { id: todo.id, title: todo.fields.Title };
      });

      setDoneTodos(todos);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching done todos:", error);
    }
  };

  React.useEffect(() => {
    fetchDoneTodos(); 
  }, []);

  return (
    <>
      <h1 className={styles.h1}>Done Todo List  < FontAwesomeIcon icon={faTrophy} style={{ color: 'gold', fontSize: '4rem' }} /> </h1>
      {isLoading ? <p>Loading...</p> : 
      <ul>
        {doneTodos.map((todo) => (
          <li key={todo.id} className={styles.ListItem}>{todo.title}</li>
        ))}
      </ul>
      }
    </>
  );
}

export default DoneTodoList;
