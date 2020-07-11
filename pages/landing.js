import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";

import withApollo from "../lib/apollo";

import { useQuery } from "@apollo/react-hooks";
import LISTINGS_QUERY from "../graphql/lists.query"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const { loading, error, data, fetchMore } = useQuery(LISTINGS_QUERY)



  console.log("Data", data)

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Dreamcatxer"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
    <Parallax filter responsive image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>TITULO</h1>
              <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl orci, iaculis eget ipsum eget, auctor rutrum nisl. Quisque facilisis sed ipsum in venenatis. Nam pellentesque ut nisl ac vehicula. In consectetur quis dui vel interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.             
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default withApollo({ ssr: true })(LandingPage);
