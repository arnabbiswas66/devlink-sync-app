"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Card.module.css";

export function Card({
  as: _Component = _Builtin.Block,
  cardHeading = "Heading",
  cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
}) {
  return (
    <_Component
      id={_utils.cx(
        _styles,
        "w-node-c65d8555-5a0d-a036-34bc-296c47d862ab-47d862ab"
      )}
      tag="div"
    >
      <_Builtin.Heading tag="h3">{cardHeading}</_Builtin.Heading>
      <_Builtin.Paragraph>{cardText}</_Builtin.Paragraph>
    </_Component>
  );
}
