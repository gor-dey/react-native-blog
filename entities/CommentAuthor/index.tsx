import { imgUrl } from '@shared/utils'
import { Image } from 'react-native'
import { AuthorName, Wrapper } from './style'
import { observer } from 'mobx-react-lite'
import { Store } from '@shared/store'

type Prop = {
  username?: string
}

export const CommentAuthor = observer(({ username }: Prop) => {
  const store = Store
  return (
    <Wrapper>
      <Image
        source={{ uri: imgUrl }}
        width={30}
        height={30}
        style={{ borderRadius: 30 }}
      />
      <AuthorName>{username || store.AuthStore.username}</AuthorName>
    </Wrapper>
  )
})
