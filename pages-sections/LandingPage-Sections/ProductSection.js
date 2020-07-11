import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import List from "@material-ui/icons/FormatListBulleted";
import Group from "@material-ui/icons/Group";
import Money from "@material-ui/icons/MonetizationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>TITULO 2</h2>
          <h4 className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl orci, iaculis eget ipsum eget, auctor rutrum nisl. Quisque facilisis sed ipsum in venenatis. Nam pellentesque ut nisl ac vehicula. In consectetur quis dui vel interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </h4>
          <h4 className={classes.description}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl orci, iaculis eget ipsum eget, auctor rutrum nisl. Quisque facilisis sed ipsum in venenatis. Nam pellentesque ut nisl ac vehicula. In consectetur quis dui vel interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </h4>            
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="SUBTITULO"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl orci, iaculis eget ipsum eget, auctor rutrum nisl. Quisque facilisis sed ipsum in venenatis."
              icon={List}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="SUBTITULO"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl orci, iaculis eget ipsum eget, auctor rutrum nisl. Quisque facilisis sed ipsum in venenatis."
              icon={Group}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="SUBTITULO"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl orci, iaculis eget ipsum eget, auctor rutrum nisl. Quisque facilisis sed ipsum in venenatis."
              icon={Money}
              iconColor="rose"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
