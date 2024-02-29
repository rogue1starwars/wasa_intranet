"use client";

import getWindowSize from "@/components/ui/getWindowSize";
import { useRouter } from "next/navigation";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function TopView() {
  const { width, height } = getWindowSize();
  const router = useRouter();

  const handleClick1 = () => {
    console.log('clicked')
    router.push('/map/1')
  }

  return (
    <TransformWrapper>
      <TransformComponent>
        <svg
          width={width}
          height={height}
          viewBox="0.00 0.00 1051.00 1500.00"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleClick1()}
        >
          <g strokeLinecap="round" > 
            <path
              d="M140.38,82.98 Q534.07,82.98 927.75,82.98 Q961.84,82.98 961.84,117.06 Q961.84,741.67 961.84,1366.28 Q961.84,1400.37 927.75,1400.37 Q534.07,1400.37 140.38,1400.37 Q106.30,1400.37 106.30,1366.28 Q106.30,741.67 106.30,117.06 Q106.30,82.98 140.38,82.98 Z"
              fill="none"
              stroke="rgb(0, 0, 0)"
              strokeWidth="5.00"
              strokeOpacity="1.00"
              strokeLinejoin="round"
            />
          </g>
          <g strokeLinecap="round" id="レイヤー_1">
            <path
              d="M206.86,109.01 Q541.13,109.01 875.39,109.01 Q907.52,109.01 907.32,135.47 Q906.81,201.40 906.30,267.33 Q906.10,293.79 873.97,293.79 Q539.71,293.79 205.44,293.79 Q173.31,293.79 173.52,267.33 Q174.02,201.40 174.53,135.47 Q174.73,109.01 206.86,109.01 Z"
              fill="none"
              stroke="rgb(0, 0, 0)"
              strokeWidth="5.00"
              strokeOpacity="1.00"
              strokeLinejoin="round"
            />
          </g>
          <g strokeLinecap="round" id="レイヤー_3">
            <path
              d="M719.66,341.12 Q787.59,341.12 855.53,341.12 Q885.53,341.12 885.53,371.12 Q885.53,603.93 885.53,836.74 Q885.53,866.74 855.53,866.74 Q787.59,866.74 719.66,866.74 Q689.66,866.74 689.66,836.74 Q689.66,603.93 689.66,371.12 Q689.66,341.12 719.66,341.12 Z"
              fill="none"
              stroke="rgb(0, 0, 0)"
              strokeWidth="5.00"
              strokeOpacity="1.00"
              strokeLinejoin="round"
            />
          </g>
          <g strokeLinecap="round" id="レイヤー_4">
            <path
              d="M753.07,896.33 Q800.85,896.33 848.63,896.33 Q878.63,896.33 878.63,926.33 Q878.63,1103.74 878.63,1281.15 Q878.63,1311.15 848.63,1311.15 Q800.85,1311.15 753.07,1311.15 Q723.07,1311.15 723.07,1281.15 Q723.07,1103.74 723.07,926.33 Q723.07,896.33 753.07,896.33 Z"
              fill="none"
              stroke="rgb(0, 0, 0)"
              strokeWidth="5.00"
              strokeOpacity="1.00"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </TransformComponent>
    </TransformWrapper>
  );
}
