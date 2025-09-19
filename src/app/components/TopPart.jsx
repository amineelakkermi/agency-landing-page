import styles from "../styles/style";

export default function TopPart({ subtitle , title , description }){
    return(
        <>
        <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-blue-500 dark:text-purple-400">
                  {subtitle}
                </span>
                <h2 className={`${styles.title}`}>
                  {title}
                </h2>
                <p className={`${styles.paragraph} max-w-[800px] text-gray-600 dark:text-gray-300`}>
                  {description}
                </p>
              </div>
            </div>
      </div>
      </>
    )
  
}