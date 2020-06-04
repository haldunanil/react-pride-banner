import React from "react";
import styled, { css } from "styled-components";

export interface BannerColors {
  red: string;
  orange: string;
  yellow: string;
  green: string;
  blue: string;
  violet: string;
}

export interface StyledPrideBannerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** colors to use for the banner */
  bannerColors?: BannerColors;
  /** determines whether the component should grow in height when the user hovers over it */
  expandOnHover?: boolean;
  /** position for the banner on the page */
  position?: "absolute" | "fixed";
}

export interface PrideBannerProps
  extends Omit<StyledPrideBannerProps, "expandOnHover"> {}

const getHoverCss = ({ expandOnHover }: StyledPrideBannerProps) => {
  if (!expandOnHover) {
    return null;
  }

  return css`
    &:hover {
      height: 50px;
      background-size: 1000% 1000%;
      animation: shift 15s infinite;
    }

    &:hover > span {
      opacity: 1;
    }
  `;
};

export const StyledPrideBanner = styled.div<StyledPrideBannerProps>`
  position: ${(props) => props.position};
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(
    to right,
    ${(props) => props.bannerColors?.red || "red"},
    ${(props) => props.bannerColors?.orange || "orange"},
    ${(props) => props.bannerColors?.yellow || "yellow"},
    ${(props) => props.bannerColors?.green || "green"},
    ${(props) => props.bannerColors?.blue || "blue"},
    ${(props) => props.bannerColors?.violet || "violet"}
  );
  z-index: 2000;
  transition: height 150ms ease-in-out;

  & > span {
    opacity: 0;
    transition: opacity 150ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: white;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 0 0 16px rgba(0, 0, 0, 0.1);
  }

  ${getHoverCss};

  @keyframes shift {
    0% {
      background-position: 0% 0%;
    }

    50% {
      background-position: 100% 100%;
    }

    100% {
      background-position: 0% 0%;
    }
  }
`;

const PrideBanner: React.FC<PrideBannerProps> = ({ children, ...props }) => {
  const expandOnHover = React.Children.count(children) > 0;

  return (
    <StyledPrideBanner {...props} expandOnHover={expandOnHover}>
      <span>{children}</span>
    </StyledPrideBanner>
  );
};

PrideBanner.defaultProps = {
  position: "fixed",
};

export default PrideBanner;
