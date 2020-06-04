import React from "react";
import { shallow } from "enzyme";

import PrideBanner, {
  BannerColors,
  PrideBannerProps,
  StyledPrideBanner,
} from "./PrideBanner";

const positions: PrideBannerProps["position"][] = ["absolute", "fixed"];
const bannerColors: BannerColors = {
  red: "#FF0000",
  orange: "#FFA500",
  yellow: "#FFFF00",
  green: "#008000",
  blue: "#0000FF",
  violet: "#EE82EE",
};

describe(`PrideBanner`, () => {
  let props: PrideBannerProps;

  beforeEach(() => {
    props = {
      children: "We support our LGBTQ+ users!",
    };
  });

  it(`should match snapshot`, () => {
    expect(shallow(<PrideBanner {...props} />)).toMatchSnapshot();
  });

  describe(`StyledPrideBanner`, () => {
    it.each(positions)(
      `should match snapshot when position is '%s'`,
      (position) => {
        expect(
          shallow(<StyledPrideBanner {...props} position={position} />)
        ).toMatchSnapshot();
      }
    );

    it.each([true, false])(
      `should match snapshot when 'expandOnHover' is '%s'`,
      (expandOnHover) => {
        expect(
          shallow(
            <StyledPrideBanner {...props} expandOnHover={expandOnHover} />
          )
        ).toMatchSnapshot();
      }
    );

    it(`should match snapshot when given a 'bannerColors' prop`, () => {
      expect(
        shallow(<StyledPrideBanner {...props} bannerColors={bannerColors} />)
      ).toMatchSnapshot();
    });
  });
});
