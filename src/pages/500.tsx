import { Link } from 'react-router-dom'

function PageErrorServer() {
  return (
    <div className="page-500 h-screen w-screen flex items-center justify-center">
      <div className="page-500__contain">
        <div className="text-2xl text-black mb-4">Xin lỗi, Máy chủ đang gặp sự cố.</div>
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

export default PageErrorServer
