"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchTodos = async () => {
  const { data } = await axios.get('https://fake-json-api.mock.beeceptor.com/companies');
  return data;
};

export default function Todos() {
  const { data, isLoading, error } = useQuery({ queryKey: ['todos'], queryFn: fetchTodos });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
console.log(data)
  return (
    <ul>
      {/* {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))} */}
      hhhh
    </ul>
  );
}
