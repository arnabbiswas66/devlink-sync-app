"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Card } from "./Card";
import * as _utils from "./utils";
import _styles from "./Cards.module.css";

export function Cards({ as: _Component = _Builtin.Section, grids }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "three-col")} tag="div">
          {grids ?? (
            <>
              <Card />
              <Card
                id={_utils.cx(
                  _styles,
                  "w-node-e84b5afe-04c3-174f-5be8-9db48a362e97-1139aed2"
                )}
              />
              <Card
                id={_utils.cx(
                  _styles,
                  "w-node-_22f72c4e-abea-f241-c3fe-ec8ca3585b43-1139aed2"
                )}
              />
              <Card
                id={_utils.cx(
                  _styles,
                  "w-node-_941abdbf-4d1e-22e6-0b83-f1bc5acac072-1139aed2"
                )}
              />
              <Card
                id={_utils.cx(
                  _styles,
                  "w-node-_64b634ad-9db9-b46e-b7b7-a6e92b575337-1139aed2"
                )}
              />
              <Card
                id={_utils.cx(
                  _styles,
                  "w-node-_1049906d-68ad-47ef-0716-672e525ed8f2-1139aed2"
                )}
              />
            </>
          )}
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
