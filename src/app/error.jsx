"use client";

export default function Error({ error, reset }) {
  return (
    <>
      <h2>Error on page</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}
