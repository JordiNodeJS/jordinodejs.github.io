const Article = ({ title, content, imageUrl }) => {
  return (
    <article className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>
      </header>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto mb-4 rounded"
        />
      )}
      <section className="text-gray-700 dark:text-gray-300">{content}</section>
    </article>
  )
}

export default Article
