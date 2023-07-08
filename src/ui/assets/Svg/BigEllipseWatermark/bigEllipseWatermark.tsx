import { FC } from "react";

interface IconProps {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
}

export const BigEllipseWatermark: FC<IconProps> = ({
  className,
  color = "#91A4AE",
  width = "620",
  height = "745",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 620 745"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: "overlay" }} opacity="0.7">
        <path
          d="M620 325.338C620 556.931 427.035 744.675 189 744.675C-49.0347 744.675 -242 556.931 -242 325.338C-242 93.7438 -49.0347 -94 189 -94C427.035 -94 620 93.7438 620 325.338ZM-165.724 325.338C-165.724 515.945 -6.90852 670.463 189 670.463C384.909 670.463 543.724 515.945 543.724 325.338C543.724 134.73 384.909 -19.7878 189 -19.7878C-6.90852 -19.7878 -165.724 134.73 -165.724 325.338Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
