// 本来はAPIからデータを取得するが、今回はダミーデータを返す
import {
  doc,
  updateDoc,
  query,
  where,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { CardData, BoxData } from "./index";
import { db } from "./firebase";

async function set_x_y() {
  const q = collection(db, "map");
  const querySnapshot = await getDocs(q);
  const id_list: string[] = [];
  querySnapshot.forEach((doc) => id_list.push(doc.id));
  id_list.map(async (id) => {
    const q = doc(db, "map", id);
    const regex = /[-+]?\d*\.\d+|\d+/g;
    const q_snap = await getDoc(q);
    const dot = q_snap.data().dot;
    console.log(dot);
    if (dot) {
      await updateDoc(q, {
        x_center: parseFloat(dot.match(regex)[0]),
        y_center: parseFloat(dot.match(regex)[1]),
      });
    }
  });
}

export async function fetchCards(searchQuery: string) {
  const fetchedData: { [key: string]: CardData } = {};
  const q = searchQuery
    ? query(collection(db, "map"), where("title", "==", searchQuery))
    : collection(db, "map");
  console.log(`searchQuery:${searchQuery}`);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    fetchedData[doc.id] = {
      title: doc.data().title,
      description: doc.data().description,
      map: doc.data().shelf,
    };
  });
  // fetchedData.map((data) => console.log(data));
  return fetchedData;
}

export async function fetchMapData(shelf?: number) {
  const fetchedData: { [key: string]: BoxData } = {};
  const q = shelf
    ? query(collection(db, "map"), where("shelf", "==", shelf))
    : collection(db, "map");
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    fetchedData[doc.id] = {
      title: doc.data().title,
      shelf: doc.data().shelf,
      box: doc.data().box,
      // dot: doc.data().dot,
      x_center: doc.data().x_center,
      y_center: doc.data().y_center,
    };
  });
  // fetchedData.map((data) => console.log(data));
  return fetchedData;
}

export async function fetchDescription(id: string) {
  const q = doc(db, "map", id);
  const q_snap = await getDoc(q);
  return { title: q_snap.data().title, description: q_snap.data().description };
}
