import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";

export default function Loading() {
  return <MoonLoader color="green" size={50} speedMultiplier={0.2} />
}

// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);
//const [data, setData] = useState(null);

