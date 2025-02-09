export function Badge({ children, type }) {
  const badgeTypes = {
    done: {
      bgColor: 'bg-green-100 dark:bg-green-900',
      textColor: 'text-green-800 dark:text-green-300'
    },
    retired: {
      bgColor: 'bg-gray-100 dark:bg-gray-700',
      textColor: 'text-gray-800 dark:text-gray-300'
    },
    production: {
      bgColor: 'bg-blue-100 dark:bg-blue-900',
      textColor: 'text-blue-800 dark:text-blue-300'
    },
    default: {
      bgColor: 'bg-gray-100 dark:bg-gray-700',
      textColor: 'text-gray-800 dark:text-gray-300'
    }
  }

  const { bgColor, textColor } = badgeTypes[type] || badgeTypes.default

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}
    >
      {children}
    </span>
  )
}
