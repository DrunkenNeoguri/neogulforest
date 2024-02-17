import { database } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const useLogin = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  const activeCheckin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const docRef = doc(database, "team", userName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      router.push(
        `/checkin?username=${userName}&first=${docSnap.data().first}&second=${
          docSnap.data().second
        }&third=${docSnap.data().third}`
      );
      console.log("Document data:", docSnap.data().first);
    } else {
      alert(`잘못된 닉네임입니다.\n다시 한번 입력해주세요!`);
    }

    // const dbRef = ref(database, "team");
    // get(child(dbRef, userName))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       router.push(`/checkin?"username="${userName}`);
    //       console.log(snapshot.val());
    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return { userName, setUserName, activeCheckin };
};
