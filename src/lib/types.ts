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
  imgUrl: string;
  mapData: {
    title: string;
    xCenter: number;
    yCenter: number;
    type: "shelf" | "box";
    link: string;
    description?: string;
  };
};