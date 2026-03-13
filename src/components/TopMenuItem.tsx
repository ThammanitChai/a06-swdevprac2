import Link from "next/link"

type Props = {
  title: string
  pageRef: string
}

export default function TopMenuItem({ title, pageRef }: Props) {
  return (
    <Link
      href={pageRef}
      className="px-4 py-2 text-gray-700 hover:text-blue-600"
    >
      {title}
    </Link>
  )
}