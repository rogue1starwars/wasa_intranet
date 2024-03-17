export type item = {
  id: number;
  name: string;
  description: string;
  shelf: number;
};

export type BoxData = {
  title: string;
  shelf: number;
  box: string;
  x_center: number;
  y_center: number;
};

export type MapData = {
  id: string;
  imgUrl: string;
  title: string;
  xCenter?: number;
  yCenter?: number;
  type: "shelf" | "box";
  link: string;
  description?: string;
  child?: string[]; // This is going to be a string of ids
};

// export type MapData = {
//   parent: MapIndividualData
//   child: {[key: string]: {
//     imgUrl: string;
//     mapData: {
//       title: string;
//       xCenter: number;
//       yCenter: number;
//       type: "shelf" | "box";
//       link: string;
//       description?: string;
//     };
//   };}
// };
