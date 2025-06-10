'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function UserFormClient() {
//  const names = ['Ali', 'Sara', 'John'];
// const greetings = names.map(name => `Hello, ${name}!`);

// console.log(greetings);
// Output: ['Hello, Ali!', 'Hello, Sara!', 'Hello, John!']
  const { register, handleSubmit, reset } = useForm();
  const [entries, setEntries] = useState([]);

  const onSubmit = (data) => {
    setEntries(prev => [...prev, data]);
    reset();
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">User Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register('name')}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        <input
          {...register('phone')}
          placeholder="Phone Number"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Submitted Users:</h2>
        <ul className="mt-2 space-y-2">
          {entries.map((entry, index) => (
            <li key={index} className="p-2 border rounded">
              👤 {entry.name} – 📞 {entry.phone}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
