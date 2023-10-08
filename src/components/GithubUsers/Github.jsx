import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  return (
    <div>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="git pic " width={300} />
    </div>
  );
};

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/SarmadRehman");
  return response.json();
};
