import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  
  const router = useRouter();

  const rerdirectToHome = () => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }
  
  useEffect(() => {
    rerdirectToHome();
  }, []);

  return (
    <>
      <Head>
        <title>Ninja List | 404 Error</title>
      </Head>
      <div className="not-found">
        <h1>Oooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a className="">Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
