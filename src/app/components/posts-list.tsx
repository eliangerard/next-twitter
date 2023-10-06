import PostCard from './post-card'
import { type Post } from '@/app/types/posts'

export function PostLists ({ posts }: { posts: Post[] | null }) {
  return (
    <>

      {
        posts?.map(post => {
          const {
            user,
            content
          } = post

          const {
            username: userName,
            name: userFullName,
            avatar_url: avatarUrl
          } = user

          return (
            <PostCard
              key={post.id}
              userName={userName}
              userFullName={userFullName}
              avatarUrl={avatarUrl}
              content={content}
            />
          )
        })
      }
    </>
  )
}
