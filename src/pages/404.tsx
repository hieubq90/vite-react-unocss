import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="page-404 h-screen w-screen flex items-center justify-center">
      <div className="page-404__contain">
        <div className="text-2xl text-black mb-4">Xin lỗi, trang này không tồn tại.</div>
        <div className="text-center">
          <Link
            edso-bg="primary"
            edso-p="x-4 y-2"
            edso-border="rounded"
            edso-text="sm white hover:white/85"
            className="inline-block"
            to="/"
          >
            <i className="i-bi-arrow-left-square-fill mr-2" />
            Trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
