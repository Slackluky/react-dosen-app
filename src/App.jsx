import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // saya menggunakan array karena berdasarkan real-world use case (menggunakan id sebagai target), daripada menggunakan pola iterasi mahasiswa 1 sampai n
  const [mahasiswa, setMahasiswa] = useState([
    'mahasiswa_1',
    'mahasiswa_2',
    'mahasiswa_2',
    'mahasiswa_3',
    'mahasiswa_4',
    'mahasiswa_5',
    'mahasiswa_6',
    'mahasiswa_7',
    'mahasiswa_8',
    'mahasiswa_9',
    'mahasiswa_10',
  ]);
    // saya menggunakan array karena berdasarkan real-world use case (menggunakan id sebagai target), daripada menggunakan pola iterasi penelitian 1 sampai n
  const [penelitian, setPenelitian] = useState([
    'penelitian_1',
    'penelitian_2',
    'penelitian_3',
    'penelitian_4',
  ]);
  const [result, setResult] = useState(
    penelitian.reduce(
      (research, rIdx) => (
        (research[rIdx] = mahasiswa.reduce(
          (acc, curr) => ((acc[curr] = ''), acc),
          {}
        )),
        research
      ),
      {}
    )
  );
  return <>{JSON.stringify(result)}</>;
}

export default App;
