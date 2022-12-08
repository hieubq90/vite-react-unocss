import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="page-404 h-screen w-screen flex items-center justify-center">
      <div className="page-404__contain">
        <div className="text-2xl text-black mb-4">Xin lỗi, trang này không tồn tại.</div>
        <div className="text-center">
          <Link
            className="bg-primary text-white px-4 py-2 text-sm rounded hover:text-white/85 inline-block"
            to="/"
          >
            <i className="i-bi-arrow-left-square-fill mr-2" />
            <i className="i-edso-react mr-2" />
            Trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
