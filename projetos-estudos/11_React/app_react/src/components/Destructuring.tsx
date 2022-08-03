import React from 'react'

type Props = {
    title: string,
    content: string,
    commentsQty: number,
    tags: string[]
    //8 - enum
    category: Category
}
export enum Category{
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python"
}

const Destructuring = ({title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <div>
            {tags.map(item =>(
                    <span>#{item}</span>
            ))}
        </div>
        <p>Qtd de comentarios: {commentsQty}</p>
        <h4>Categoria: {category}</h4>
    </div>
  )
}
export default Destructuring