export type RateLimit = {
    limit: number;
    remaining: number;
    reset: number;
    used: number;
    timeBeforeReset: number;
}