// 本来はAPIからデータを取得するが、今回はダミーデータを返す
import { doc, query, where, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

type BoxData = {
  id: string;
  title: string;
  description: string;
  shelf: string;
  row: string;
};

export async function fetchCards(searchQuery: string) {
  const fetchedData: BoxData[] = [];
  const q = searchQuery? query(collection(db, "map"), where("title", "==", searchQuery)): collection(db, "map");
  console.log(`searchQuery:${searchQuery}`);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    fetchedData.push({
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      shelf: doc.data().shelf,
      row: doc.data().row,
    });
    // console.log(fetchedData);
  });
  // fetchedData.map((data) => console.log(data));
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
