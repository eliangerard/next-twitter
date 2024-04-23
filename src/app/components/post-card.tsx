'use client'
import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@nextui-org/react'
import { IconMessageCircle, IconHeartCode, IconRepeat } from '@tabler/icons-react'
export default function PostCard ({
  userFullName,
  userName,
  avatarUrl,
  content
}: {
  userFullName: string
  userName: string
  avatarUrl: string
  content: string
}
) {
  return (
    <Card className="bg-transparent border-[1px] border-white hover:bg-white/[0.02] transition rounded-2xl cursor-pointer border-white/20 m-2 p-2">
      <CardHeader className="justify-between">
        <div className="flex gap-2">
          <Avatar isBordered radius="full" size="sm" src={avatarUrl} />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">{'@' + userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-default-400 mb-2">
        <p className="text-white text-md">
          {content}
        </p>
      </CardBody>
    </Card>
  )
}
