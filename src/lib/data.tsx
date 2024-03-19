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
// import { CardData, BoxData, MapData } from "./types";
import { db } from "./firebase";
import { MapBoxData, MapShelfData } from "./types";

const dummyCardData: { [key: string]: CardData } = {
  "1": {
    title: "title1",
    description: "description1",
    map: "shelf1",
  },
  "2": {
    title: "title2",
    description: "description2",
    map: "shelf2",
  },
  "3": {
    title: "title3",
    description: "description3",
    map: "shelf3",
  },
};

const dummyBoxData: { [key: string]: BoxData } = {
  "1": {
    title: "title1",
    shelf: 1,
    box: "M711.55,1177.03 Q742.70,1177.03 773.85,1177.03 Q803.85,1177.03 803.85,1207.03 Q803.85,1219.36 803.85,1231.70 Q803.85,1261.70 773.85,1261.70 Q742.70,1261.70 711.55,1261.70 Q681.55,1261.70 681.55,1231.70 Q681.55,1219.36 681.55,1207.03 Q681.55,1177.03 711.55,1177.03 Z",
    x_center: 742.43,
    y_center: 1220.54,
  },
  "2": {
    title: "title2",
    shelf: 2,
    box: "M233.98,802.40 Q295.27,802.40 356.55,802.40 Q386.55,802.40 386.55,828.89 Q386.55,828.89 386.55,828.89 Q386.55,855.37 356.55,855.37 Q295.27,855.37 233.98,855.37 Q203.98,855.37 203.98,828.89 Q203.98,828.89 203.98,828.89 Q203.98,802.40 233.98,802.40 Z",
    x_center: 294,
    y_center: 830,
  },
  "3": {
    title: "title3",
    shelf: 3,
    box: "M456.00,469.95 Q525.73,469.95 595.47,469.95 Q625.47,469.95 625.47,499.95 Q625.47,508.83 625.47,517.71 Q625.47,547.71 595.47,547.71 Q525.73,547.71 456.00,547.71 Q426.00,547.71 426.00,517.71 Q426.00,508.83 426.00,499.95 Q426.00,469.95 456.00,469.95 Z",
    x_center: 525.62,
    y_center: 511.29,
  },
};

const dummyDescriptionData: {
  [key: string]: { title: string; description: string };
} = {
  "1": {
    title: "title1",
    description: "description1",
  },
  "2": {
    title: "title2",
    description: "description2",
  },
  "3": {
    title: "title3",
    description: "description3",
  },
};

const dummyMapData: {
  [key: string]: MapBoxData | MapShelfData;
} = {
  0: {
    imgUrl: "/shelf1.jpg",
    title: "title1",
    type: "shelf",
    child: ["1", "2", "3", "4"],
  },
  1: {
    imgUrl: "box1",
    title: "box1",
    xCenter: 200,
    yCenter: 200,
    type: "box",
    description: "description1",
  },

  2: {
    imgUrl: "box2",
    title: "box2",
    xCenter: 400,
    yCenter: 400,
    type: "box",
    description: "description2",
  },

  3: {
    imgUrl: "box3",
    title: "box3",
    xCenter: 300,
    yCenter: 500,
    type: "box",
    description: "description3",
  },

  4: {
    imgUrl: "/shelf2.jpg",
    title: "shelf2",
    xCenter: 300,
    yCenter: 300,
    type: "shelf",
    child: [],
  },
};

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
    if (dot) {
      await updateDoc(q, {
        x_center: parseFloat(dot.match(regex)[0]),
        y_center: parseFloat(dot.match(regex)[1]),
      });
    }
  });
}

//検索画面でデーﾀを取得するための関数（検索ワードがある場合とない場合）
export async function fetchCards(searchQuery: string) {
  console.log("\nfetchCards\n");
  // const fetchedData: { [key: string]: CardData } = {};
  // const q = searchQuery
  //   ? query(collection(db, "map"), where("title", "==", searchQuery))
  //   : collection(db, "map");
  // console.log(`searchQuery:${searchQuery}`);
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   fetchedData[doc.id] = {
  //     title: doc.data().title,
  //     description: doc.data().description,
  //     map: doc.data().shelf,
  //   };
  // });
  // fetchedData.map((data) => console.log(data));
  return dummyCardData;
}

//棚のデータを取得するための関数（棚番号を指定して取得->タイトル、棚番号、ボックス番号、x座標、y座標を返却）
export async function fetchMapData(id: string) {
  console.log("\nfetchMapData\n");
  console.log(`id:${id}`);
  console.log(`dummyMapData:${dummyMapData[id]}`);
  // const fetchedData: { [key: string]: BoxData } = {};
  // const q = shelf
  //   ? query(collection(db, "map"), where("shelf", "==", shelf))
  //   : collection(db, "map");
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   fetchedData[doc.id] = {
  //     title: doc.data().title,
  //     shelf: doc.data().shelf,
  //     box: doc.data().box,
  //     x_center: doc.data().x_center,
  //     y_center: doc.data().y_center,
  //   };
  // });
  // fetchedData.map((data) => console.log(data));
  return dummyMapData[id];
}

export async function fetchDescription(id: string) {
  console.log(`\nfetchDescription ${id}\n`);
  // const q = doc(db, "map", id);
  // const q_snap = await getDoc(q);
  // return { title: q_snap.data().title, description: q_snap.data().description };
  return dummyDescriptionData[id];
}
