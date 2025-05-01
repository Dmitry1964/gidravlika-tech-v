import cls from './loading-page.module.scss'

const LoadingPage = () : React.ReactNode => {
  return (
    <div className={cls.loading}>
      <span className={cls.loading__elem}></span>

    </div>
  )
}

export default LoadingPage