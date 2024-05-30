import Item from "../Item";


interface BasicStackProps {
    clase: clase;
  }
  
  export default function BasicStackClase({ clase }: BasicStackProps) { // Desestructuración de las props.
    return (
      <Item>
        {clase.nombre} 
      </Item>
    );
  }