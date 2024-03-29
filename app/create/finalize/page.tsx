import Spinner from "@/components/loading-spinner"
import Redirect from "@/components/redirect"

export default function Page() {
  return (
    <div className="w-full space-y-4 text-center">
      <h1>Our AI is working on your CV. Please wait a moment.</h1>
      <div className="flex h-[300px] items-center justify-center">
        <Spinner />
      </div>
      <h1>You will be able to see you CV directly on your Google Docs.</h1>
      {/* <Button>Add to My Google Docs</Button> */}
      <Redirect to="/create/download" delay={5000} />
    </div>
  )
}
