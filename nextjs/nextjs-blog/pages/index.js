import Link from 'next/link'

export default function Home() {
  return (
    <Link href={"/about"}>
      about으로 갑시다
    </Link>
  )
}
