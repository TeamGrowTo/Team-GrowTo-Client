import { useRouter } from "next/router";

function Process() {
  const router = useRouter();

  console.log(router);

  return <div>process</div>;
}

export default Process;
