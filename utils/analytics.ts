import { redis } from "@/lib/redis";
import { getDate } from "@/utils";
import { parse } from "date-fns";

type AnalyticsArgs = {
  retention?: number;
};

type TrackOptions = {
  persist?: boolean;
};

export class Analytics {
  private retention: number = 60 * 60 * 24 * 7 * 8;

  constructor(opts?: AnalyticsArgs) {
    if (opts?.retention) {
      this.retention = opts.retention;
    }
  }

  async track(namespace: string, event: object = {}, opts?: TrackOptions) {
    let key = `analytics::${namespace}`;

    if (!opts?.persist) {
      key += `::${getDate()}`;
    }

    console.log("Tracking key: " + key);

    // db call to persist this event
    const after = await redis.hincrby(key, JSON.stringify(event), 1);
    console.log("After: " + after);
    if (!opts?.persist) {
      await redis.expire(key, this.retention);
    }
  }
}

export const analytics = new Analytics();
