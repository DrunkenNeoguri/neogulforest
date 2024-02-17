"use client";
import { useCheckIn } from "@/hooks/useCheckin";
import { CheckInStyle } from "./page.styles";
import { Suspense } from "react";
import { CheckInComponent } from "./check-in-component";

export default function CheckIn() {
  return (
    <main>
      <Suspense fallback={<>Loading...</>}>
        <CheckInComponent />
      </Suspense>
    </main>
  );
}
