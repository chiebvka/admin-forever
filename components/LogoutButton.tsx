export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className="py-2  rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
        Logout
      </button>
    </form>
  )
}