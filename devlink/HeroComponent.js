"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeroComponent.module.css";

export function HeroComponent({
  as: _Component = _Builtin.Section,
  heading = "Our Blog Post",
  paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  buttonText = "Join Us!",
  buttonAction = {},
  heroBottom,
  heroImage = "",
}) {
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
        <_Builtin.Heading tag="h1">{heading}</_Builtin.Heading>
        <_Builtin.Block className={_utils.cx(_styles, "div-block")} tag="div">
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={heroImage}
          />
        </_Builtin.Block>
        <_Builtin.Paragraph>{paragraph}</_Builtin.Paragraph>
        <_Builtin.Link
          className={_utils.cx(_styles, "button")}
          button={true}
          block=""
          options={{
            href: "#",
          }}
          {...buttonAction}
        >
          {buttonText}
        </_Builtin.Link>
        <_Builtin.Block className={_utils.cx(_styles, "div-block")} tag="div">
          {heroBottom}
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
