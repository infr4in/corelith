import { hc } from "hono/client";

import { AddType } from "@/app/api/[[...route]]/route";

export const client = hc<AddType>(process.env.NEXT_PUBLIC_APP_URL!);
