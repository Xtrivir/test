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
          <h2 className={classes.title}>Como funciona</h2>
          <h4 className={classes.description}>
            Si eres de las parejas modernas que no le interesa la típica lista de novios 
            que te deja el dinero atrapado en una tarjeta sino que quieres darle una intención diferente, 
            prueba con nosotros, te depositamos los recaudado semanalmente en su cuenta corriente.
          </h4>
          <h4 className={classes.description}>
            Dreamcatxer es una plataforma de regalos virtuales que te permite recibir 
            el total de tus regalos dándole una intención diferente para que puedas 
            hacer uso de lo recuadado cuando lo desees.
          </h4>            
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Crea tu list de sueños"
              description="Crea tu lista de sueños (tenemos algunos pensado en ti pero en el caso que desees personalizarlos, puedes hacerlo agregándole un valor monetario) Una vez finalizada tu elección tendrás el total de regalos disponible."
              icon={List}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Tus seres queridos participan"
              description="Invita a tus amigos y familiares a que compren sus sueños, esto no tiene un costo adicional para ti, se le realizará un recargo del 10% sobre el valor que tu coloques, tú recibirás el 100% de tu detalle."
              icon={Group}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Recibe dinero semanalmente"
              description="Semanalmente depositaremos tu monto recudado en tu cuenta corriente para que puedas hacer uso de ello cuando lo desees."
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
