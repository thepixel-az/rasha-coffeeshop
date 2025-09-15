import { HTMLAttributes } from "react";
import "./Skeleton.css";

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
};

const Skeleton = ({ width = "100%", height = 16, radius = 8, className = "", style, ...rest }: SkeletonProps) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ width, height, borderRadius: radius, ...style }}
      {...rest}
    />
  );
};

export default Skeleton;


