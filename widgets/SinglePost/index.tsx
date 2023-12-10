import { useRoute } from '@react-navigation/native'
import { Store } from '@shared/store'
import { Id, PostType } from '@shared/types'
import { Text, Image } from 'react-native'
import { imgUrl } from '@shared/utils'
import { observer } from 'mobx-react-lite'
import { PostWrapper } from '@shared/styles'
import { Title } from './style'
import { LikeButton } from '@entities'

export const SinglePost = observer(() => {
  const store = Store
  const route = useRoute()
  const { id } = route.params as { id: Id }
  const localPost: PostType | null = store.postsList[id - 1]

  if (!localPost) {
    return <Text>Loading...</Text>
  }

  return (
    <>
      <Image
        style={{ width: '100%', height: 300 }}
        source={{
          uri: imgUrl
        }}
        resizeMode="cover"
      />
      <PostWrapper>
        <Title>{localPost?.title}</Title>
        <Text>
          {localPost?.body} Далеко-далеко, за словесными горами в стране гласных
          и согласных живут рыбные тексты. Пустился пунктуация заманивший ручеек
          даже послушавшись за? Города до, собрал путь проектах они назад,
          буквенных пояс коварных рыбного, осталось но. Своих ее вопроса
          буквоград за рыбными возвращайся по всей заголовок пор толку даль,
          пояс однажды безорфографичный коварных безопасную текстов, большого,
          домах не грамматики мир текст родного взобравшись. То гор безопасную
          на берегу? Своих по всей всемогущая большого курсивных диких собрал
          послушавшись единственное, образ напоивший знаках! Они жаренные наш
          выйти. Наш семантика ручеек алфавит даже возвращайся ipsum безопасную
          имеет предупредила вопроса. Мир, осталось великий.
        </Text>
        <LikeButton {...localPost} />
      </PostWrapper>
    </>
  )
})
