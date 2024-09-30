import * as React from "react";
import * as Types from "./types";

declare function HeroComponent(props: {
  as?: React.ElementType;
  heading?: React.ReactNode;
  paragraph?: React.ReactNode;
  buttonText?: React.ReactNode;
  buttonAction?: Types.Devlink.RuntimeProps;
  heroBottom?: Types.Devlink.Slot;
  heroImage?: Types.Asset.Image;
}): React.JSX.Element;
