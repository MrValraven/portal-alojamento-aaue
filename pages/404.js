import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    /* setTimeout(() => {
      router.push("/");
    }, 5000); */
  }, []);
  return (
    <div className="not-found">
      <h1>That page cannot be found</h1>
      <Link href="/">
        <a>Go back to homepage</a>
      </Link>
    </div>
  );
};

export default NotFound;
