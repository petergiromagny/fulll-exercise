import {octokit} from "@services/github/octokit";
import {getRateLimit} from "@services/github/rateLimit";

export const getUsers = async () => {
  const usersData = await octokit.request("GET /users");
  const rateLimit = await getRateLimit();

  return { usersData, rateLimit };
};

export const getUsersByName = async (userName?: string) => {
  const usersData = await octokit.request("GET /search/users?q={userName}", { userName });
  const rateLimit = await getRateLimit();

  return { usersData, rateLimit };
};
