import React from "react";

interface IonIconProps {
  name: string ;
  size?: string;
}

const IonIcon: React.FC<IonIconProps> = ({ name, size = "medium" }) => {
  return React.createElement("ion-icon", { name, size });
};

export default IonIcon;