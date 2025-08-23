export default function Home() {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const hour = time.getHours();
  const minutes = time.getMinutes();

  function TextSquare({ text1, text2 = null }) {
    return (
      <>
        <p>{text1}</p>
        <p>{text2}</p>
      </>
    );
  }

  function ImageSquare({ src, alt }) {
    return <img src={src} alt="{alt}" />;
  }

  return (
    <main className="max-w-md">
      <div className="dialogue1">
        <p>이제 본격적으로</p>
        <p>OO님의 사주팔자를</p>
        <p>분석해볼 차례네요.</p>
      </div>

      <div className="dialogue2">
        <p>제가 OO님의 사주를</p>
        <p>보기 쉽게 표로 정리했어요</p>
      </div>

      <div className="saju">
        <h2>김로켓님의 사주</h2>

        <h2 className="time">
          {year}년 {month}월 {date}일 {hour}:
          {minutes < 10 ? '0' + minutes : minutes}
        </h2>

        {/* row 1 */}
        <div className="saju-table">
          <div className="saju-row">
            <TextSquare text1="" />
            <TextSquare text1="가" />
            <TextSquare text1="나" />
            <TextSquare text1="다" />
            <TextSquare text1="라" />
          </div>
          row 2
          <div className="saju-row">
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="나" text2="가나" />
            <TextSquare text1="다" text2="가나" />
            <TextSquare text1="라" text2="가나" />
            <TextSquare text1="마" text2="가나" />
          </div>
          {/* row 3 */}
          <div className="saju-row">
            <TextSquare text1="가" text2="가나" />
            <ImageSquare src="dummy-image.jpg" alt="dummy image" />
            <ImageSquare src="dummy-image.jpg" alt="dummy image" />
            <ImageSquare src="dummy-image.jpg" alt="dummy image" />
            <ImageSquare src="dummy-image.jpg" alt="dummy image" />
          </div>
          {/* row 4 */}
          <div className="saju-row">
            <TextSquare text1="가" text2="가나" />
            <ImageSquare src="dummy-image.jpg" alt="dummy image" />
            <ImageSquare src="dummy-image.jpg" alt="dummy image" />
            <ImageSquare src="dummy-image.jpg" alt="dummy image" />
            <ImageSquare src="dummy-image.jpg" alt="dummy image" />
          </div>
          {/* row 5 */}
          <div className="saju-row">
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
          </div>
          {/* row 6 */}
          <div className="saju-row">
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
          </div>
          {/* row 7 */}
          <div className="saju-row">
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
          </div>
          {/* row 8 */}
          <div className="saju-row">
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
            <TextSquare text1="가" text2="가나" />
          </div>
        </div>
      </div>

      <img src="chapter1.png" alt="chapter 1 image" />
    </main>
  );
}
