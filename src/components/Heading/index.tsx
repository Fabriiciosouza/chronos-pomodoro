import styles from './styles.module.css'

type HeadingProps = {
  children: React.ReactNode
  //tudo que o react aceita como children está nesse tipo
}
export function Heading(props: HeadingProps) {
  return <h1 className={styles.heading}>{props.children}</h1>
}
