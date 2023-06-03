import React, { useState } from 'react';

function App() {
  const mahasiswa = Array.from({ length: 10 }).map((it, index) => {
    return { id: `mahasiswa${index + 1}`, name: `Mahasiswa ${index + 1}` };
  });
  const penelitian = Array.from({ length: 4 }).map((it, index) => {
    return {
      id: `aspek_penelitian_${index + 1}`,
      name: `Aspek Penelitian ${index + 1}`,
    };
  });
  const [result, setResult] = useState(
    penelitian.reduce(
      (research, { id }) => (
        (research[id] = mahasiswa.reduce(
          (acc, { id: mIdx }) => ((acc[mIdx] = 0), acc),
          {}
        )),
        research
      ),
      {}
    )
  );

  const handleChangeValue = (e, pId, mId) => {
    e.preventDefault();
    setResult({
      ...result,
      [pId]: {
        ...result[pId],
        [mId]: parseInt(e.target.value),
      },
    });
  };

  const [output, setOutput] = useState({});

  function Output() {
    if (Object.keys(output).length <= 0) {
      return <></>;
    }
    return <code>{JSON.stringify(output, null, 4)}</code>;
  }
  return (
    <>
      <div className="w-full container mx-auto flex flex-col gap-y-3 my-4">
        <table className="table-auto w-full text-sm text-center text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th className="px-6 py-3"></th>
              {penelitian.map(({ id: pId, name: pName }) => {
                return (
                  <th key={pId} className="px-6 py-3">
                    {pName}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map(({ id: mId, name: mahas }) => {
              return (
                <tr key={mId} className="bg-white border-b ">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {mahas}
                  </th>
                  {penelitian.map(({ id: pId }) => {
                    return (
                      <td key={pId} className="px-6 py-4">
                        <select
                          title="change student value"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          value={result[pId][mId]}
                          onChange={(e) => handleChangeValue(e, pId, mId)}
                        >
                          {Array.from({ length: 11 }).map((it, index) => (
                            <option key={index}>{index}</option>
                          ))}
                        </select>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-end">
          <button
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            onClick={() => setOutput(result)}
          >
            Simpan
          </button>
          <button
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            onClick={() => setOutput('')}
          >
            Reset
          </button>
        </div>
        <div className="bg-black w-full p-5 text-white whitespace-pre">
          Output: <br />
          <Output />
        </div>
      </div>
    </>
  );
}

export default App;
