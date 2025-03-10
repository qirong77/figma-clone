"use client";

import { ReactNode } from "react";
import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_ZuG7yp8ep3mAPSuETFJF2eHYvr-Go_AKbJjBS37XTbmHN8HeKiiV4iOmhY-vnwDB"}>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>{children}</ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
