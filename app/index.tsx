import { observer } from 'mobx-react-lite'
import { Store } from '@shared/store'
import { Redirect } from 'expo-router'

const Init = () => {
  const { isAuthenticated } = Store.AuthStore

  if (isAuthenticated) {
    return <Redirect href={'/list-rout/'} />
  } else {
    return <Redirect href={'/auth/'} />
  }
}

export default observer(Init)
