import css from "./styles.module.scss";



export interface ErrorFormProps {
  content: string;
}

export default function ErrorForm({ content }: ErrorFormProps) {
 
  return (
    <div className={css.ErrorForm}>
      <span>{content}</span>
    </div>
  );
}
