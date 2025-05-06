import * as React from "react";

declare module "*.module.css" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.svg" {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}