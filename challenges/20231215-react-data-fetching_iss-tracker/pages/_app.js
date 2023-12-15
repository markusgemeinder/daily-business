import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

// ======================== Fetcher with general error handling
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// ======================== Fetcher with detailed error handling
const fetcher = async (...args) => {
  const res = await fetch(...args);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher, refreshInterval: 5000 }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  );
  // without refreshingInterval would be <SWRConfig value={{ fetcher }}>
}

// ======================== ORIGINAL CODE BELOW
// import GlobalStyle from "../styles";

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <GlobalStyle />
//       <Component {...pageProps} />
//     </>
//   );
// }
