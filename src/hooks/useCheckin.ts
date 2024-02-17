import { useRouter, useSearchParams } from "next/navigation";

export const useCheckIn = () => {
  const searchParams = useSearchParams();
  const [username, first, second, third] = [
    searchParams.get("username"),
    searchParams.get("first"),
    searchParams.get("second"),
    searchParams.get("third"),
  ];
  console.log(username, first, second, third);
  return { username, first, second, third };
};
