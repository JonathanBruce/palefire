import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
// import CreateDownloadJob from '../queries/create_download_job.gql'

const CreateDownloadJob = gql`
  mutation CreateDownloadJob($playlist: String!) {
    createDownloadJob(playlist: $playlist) {
      id
    }
  }
`;

export default function() {
  const [input, setInput] = useState("");
  const [createJob, { data }] = useMutation<
    { id: string },
    { playlist: string }
  >(CreateDownloadJob);

  console.log(data);
  return (
    <div>
      <h1>Carne a suh dude</h1>
      <h2></h2>

      <input onChange={e => setInput(e.target.value)} value={input} />
      <button onClick={() => createJob({ variables: { playlist: input } })}>
        Submit
      </button>
    </div>
  );
}
