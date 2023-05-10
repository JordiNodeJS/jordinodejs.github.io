export default function Container({ children }) {
  return (
    <div className="height-min">
      <div className="flex justify-center text-center">
        <div className="w-full">{children}</div>
      </div>
    </div>
  )
}
