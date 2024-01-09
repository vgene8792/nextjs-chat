import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'

export default function IndexPage() {
  const id = nanoid()

  return <Chat id={id} />
}
console.log('app/chat/page has been loaded.')
