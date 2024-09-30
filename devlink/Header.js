"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Header.module.css";

export function Header({ as: _Component = _Builtin.Section }) {
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
        <_Builtin.Section
          className={_utils.cx(_styles, "navbar-logo-left")}
          grid={{
            type: "section",
          }}
          tag="div"
        >
          <_Builtin.NavbarWrapper
            className={_utils.cx(
              _styles,
              "navbar-logo-left-container",
              "shadow-three"
            )}
            tag="div"
            config={{
              animation: "default",
              collapse: "medium",
              docHeight: false,
              duration: 400,
              easing: "ease",
              easing2: "ease",
              noScroll: false,
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "container-2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "navbar-wrapper")}
                tag="div"
              >
                <_Builtin.NavbarBrand
                  className={_utils.cx(_styles, "navbar-brand")}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="150"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/66e8119fa358d5d75b8724f9/66f8f162cf9938934f3d038d_wiley-logo-black%20(1).svg"
                  />
                </_Builtin.NavbarBrand>
                <_Builtin.NavbarMenu
                  className={_utils.cx(_styles, "nav-menu-wrapper")}
                  tag="nav"
                  role="navigation"
                >
                  <_Builtin.List
                    className={_utils.cx(_styles, "nav-menu-two")}
                    tag="ul"
                    unstyled={true}
                  >
                    <_Builtin.ListItem>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "nav-link-2")}
                        button={false}
                        block=""
                        options={{
                          href: "/",
                        }}
                      >
                        {"Feature"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "nav-link-2")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"User Examples"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "nav-link-2")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Pricing"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      <_Builtin.DropdownWrapper
                        className={_utils.cx(_styles, "nav-dropdown")}
                        tag="div"
                        delay={0}
                        hover={false}
                      >
                        <_Builtin.DropdownToggle
                          className={_utils.cx(_styles, "nav-dropdown-toggle")}
                          tag="div"
                        >
                          <_Builtin.Icon
                            className={_utils.cx(_styles, "nav-dropdown-icon")}
                            widget={{
                              type: "icon",
                              icon: "dropdown-toggle",
                            }}
                          />
                          <_Builtin.Block tag="div">
                            {"Resources"}
                          </_Builtin.Block>
                        </_Builtin.DropdownToggle>
                        <_Builtin.DropdownList
                          className={_utils.cx(
                            _styles,
                            "nav-dropdown-list",
                            "shadow-three",
                            "mobile-shadow-hide"
                          )}
                          tag="nav"
                        >
                          <_Builtin.DropdownLink
                            className={_utils.cx(_styles, "nav-dropdown-link")}
                            options={{
                              href: "#",
                            }}
                          >
                            {"Resource Link 1"}
                          </_Builtin.DropdownLink>
                          <_Builtin.DropdownLink
                            className={_utils.cx(_styles, "nav-dropdown-link")}
                            options={{
                              href: "#",
                            }}
                          >
                            {"Resource Link 2"}
                          </_Builtin.DropdownLink>
                          <_Builtin.DropdownLink
                            className={_utils.cx(_styles, "nav-dropdown-link")}
                            options={{
                              href: "#",
                            }}
                          >
                            {"Resource Link 3"}
                          </_Builtin.DropdownLink>
                        </_Builtin.DropdownList>
                      </_Builtin.DropdownWrapper>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "nav-divider")}
                        tag="div"
                      />
                    </_Builtin.ListItem>
                    <_Builtin.ListItem>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "nav-link-accent")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Docs"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(_styles, "mobile-margin-top-10")}
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "button-primary")}
                        button={true}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Get Started"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                  </_Builtin.List>
                </_Builtin.NavbarMenu>
                <_Builtin.NavbarButton
                  className={_utils.cx(_styles, "menu-button-2")}
                  tag="div"
                >
                  <_Builtin.Icon
                    widget={{
                      type: "icon",
                      icon: "nav-menu",
                    }}
                  />
                </_Builtin.NavbarButton>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.NavbarWrapper>
        </_Builtin.Section>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
