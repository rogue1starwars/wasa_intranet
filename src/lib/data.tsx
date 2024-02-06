// 本来はAPIからデータを取得するが、今回はダミーデータを返す
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

type BoxData = {
  id: string;
  title: string;
  description: string;
  shelf: string;
  row: string;
};

export async function fetchCards() {
  const fetchedData: BoxData[] = [];
  const querySnapshot = await getDocs(collection(db, "map"));
  querySnapshot.forEach((doc) => {
    fetchedData.push({
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      shelf: doc.data().shelf,
      row: doc.data().row,
    });
    console.log(fetchedData);
  });
  fetchedData.map((data) => console.log(data));
  return fetchedData;
}

export async function fetchMapData(id: string) {
  const docRef = doc(db, "map", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { shelf: docSnap.data().shelf, row: docSnap.data().row };
} else {
    // docSnap.data() will be undefined in this case
    return { shelf: "undefined", row: "undefined" };
  }

}
