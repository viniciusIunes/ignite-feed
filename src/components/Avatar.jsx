import styles from './Avatar.module.css'


/*
  Sempre que queremos que um componente tenha um elemento visual diferente, de acordo com o que ele é aplicado usamos a propriedade.
  
  No exemplo abaixo é usado uma desestruturação, onde ele está definindo por default o valor da hasBorder.
 */
export function Avatar({ hasBorder = true, src}) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar } 
      src={src} 
    />
  )
}