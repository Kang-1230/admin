export default function ContentInputForm() {
  return (
    <>
      <form className="h-full w-full bg-amber-600">
        <div className="flex w-full">
          <h1 className="flex h-[60px] w-[130px] items-center justify-center bg-gray-200">
            콘텐츠 타입
          </h1>
          <input className="bg-amber-200"></input>
        </div>
        <div className="flex w-full">
          <h1>카테고리</h1>
          <input className="bg-amber-200"></input>
        </div>
        <div className="flex w-full">
          <h1>타이틀</h1>
          <input className="bg-amber-200"></input>
        </div>
        <div className="flex w-full">
          <h1>내용</h1>
          <input className="bg-amber-200"></input>
        </div>
        <div className="flex w-full">
          <h1>카드 이미지</h1>
          <input className="bg-amber-200"></input>
        </div>
        <div className="flex w-full">
          <h1>카드 비디오</h1>
          <input className="bg-amber-200"></input>
        </div>
        <div className="flex w-full">
          <h1>카드 태그</h1>
          <input className="bg-amber-200"></input>
        </div>
        <div className="flex w-full">
          <h1>카드 배경색</h1>
          <input className="bg-amber-200"></input>
        </div>
      </form>
    </>
  );
}
