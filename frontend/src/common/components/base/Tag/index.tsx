import { tagVariants } from './styled'
import { TagProps } from './types'

const Tag = (props: TagProps) => {
  const { text, className, variant, size, ...prop } = props
  return (
    <div className={tagVariants({ variant, size, className })} {...prop}>
      {text}
    </div>
  )
}

export default Tag
