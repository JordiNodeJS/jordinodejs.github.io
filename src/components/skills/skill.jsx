const Skill = ({ icon, title }) => {
  return (
    <figure
      title={title}
      className="col-span-1 group transition-color dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-emerald-500"
    >
      <div className="w-14 mx-auto">{icon}</div>
      <div className="text-center text-amber-900 group-hover:opacity-100 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3">
        {title}
      </div>
    </figure>
  )
}
export default Skill
