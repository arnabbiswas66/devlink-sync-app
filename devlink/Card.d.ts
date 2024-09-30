import * as React from "react";
import * as Types from "./types";

declare function Card(props: {
  as?: React.ElementType;
  cardHeading?: React.ReactNode;
  cardText?: React.ReactNode;
}): React.JSX.Element;
