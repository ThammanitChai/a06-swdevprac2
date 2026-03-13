import Link from "next/link"

export default function TopMenu() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "16px",
        gap: "16px"
      }}
    >
      <Link href="/booking">Booking</Link>

      <img
        src="/img/logo.png"
        style={{ height: "40px" }}
      />
    </div>
  )
}