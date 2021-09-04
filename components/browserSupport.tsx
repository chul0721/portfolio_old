const BrowserSupport = () => {
  return (
    <>
      <div className="text-lg font-semibold bg-yellow-200 px-4 py-2">
        IE와 일부 Safari 버전의 경우 스크롤이 제대로 작동하지 않을 수 있습니다.
        <a className="pl-2 font-bold underline" href="https://caniuse.com/?search=scroll-snap">자세히 알아보기</a>
      </div>
    </>
  )
}
export default BrowserSupport
