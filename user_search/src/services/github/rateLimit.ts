import {octokit} from "@services/github/octokit";

export const getRateLimit = async () => {
    const { data: { resources: { search } } } = await octokit.request("GET /rate_limit");
    const resetDate = new Date(search.reset * 1000);
    const currentDate = new Date();

    const timeBeforeReset = resetDate.getTime() - currentDate.getTime()

    return {
        timeBeforeReset,
        ...search,
    };
};