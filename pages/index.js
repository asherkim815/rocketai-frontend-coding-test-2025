import Image from 'next/image';

export default function Home() {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const hour = time.getHours();
  const minutes = time.getMinutes();

  // 사용 방법은 70줄 즈음 코멘트로 남겼습니다.
  function SajuRow({ row, data }) {
    const dataResult = data.map((arr, i) => {
      if (arr[0] === 'text') {
        const textResult = arr[1].map((element, j) => {
          const textArrLength = arr[1].length;
          if (textArrLength > 2 && j < textArrLength - 1 && j % 2 === 1)
            return (
              <p key={j} className="even-line">
                {element}
              </p>
            );
          return <p key={j}>{element}</p>;
        });
        return (
          <div key={i} className={`saju-square row${row} col${i}`}>
            {textResult}
          </div>
        );
      }

      if (arr[0] === 'image') {
        return (
          <div key={i} className={`saju-square row${row} col${i}`}>
            <img src={arr[1][0]} alt={arr[1][1]} />
          </div>
        );
      }
      return <div key={i} className={`saju-square row${row} col${i}`}></div>;
    });

    return <div className="saju-row">{dataResult}</div>;
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
        <div className="deco deco-top"></div>
        <div className="deco deco-right"></div>
        <div className="deco deco-bottom"></div>
        <div className="deco deco-left"></div>

        <h2 className="saju-title">김로켓님의 사주</h2>

        <p className="saju-time">
          {year}년 {month}월 {date}일 {hour}:
          {minutes < 10 ? '0' + minutes : minutes}
        </p>

        {/* 사주팔자 표에 글자를 넣고 싶다면 ['text', ['가나', '다라, '마바']] 식으로 기입{배열이 비었다면 빈 칸 반환함} */}
        {/* 이미지를 넣고 싶다면 ['image', ['/dummy-image.jpg', 'dummy image']] 식으로 기입(배열엔 이미지의 src, alt 순으로 기입) */}
        {/* 첫 SajuRow 컴포넌트(첫 번째 사주팔자 줄)는 번호 0으로 시작 */}
        <div className="saju-table">
          <SajuRow
            row={0}
            data={[
              ['text', []],
              ['text', ['가나']],
              ['text', ['가나']],
              ['text', ['가나']],
              ['text', ['가나']],
            ]}
          />

          <SajuRow
            row={1}
            data={[
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
            ]}
          />

          <SajuRow
            row={2}
            data={[
              ['text', ['가나', '(다라)']],
              ['image', ['/dummy-image.jpg', 'dummy image']],
              ['image', ['/dummy-image.jpg', 'dummy image']],
              ['image', ['/dummy-image.jpg', 'dummy image']],
              ['image', ['/dummy-image.jpg', 'dummy image']],
            ]}
          />

          <SajuRow
            row={3}
            data={[
              ['text', ['가나', '(다라)']],
              ['image', ['/dummy-image.jpg', 'dummy image']],
              ['image', ['/dummy-image.jpg', 'dummy image']],
              ['image', ['/dummy-image.jpg', 'dummy image']],
              ['image', ['/dummy-image.jpg', 'dummy image']],
            ]}
          />

          <SajuRow
            row={4}
            data={[
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
            ]}
          />

          <SajuRow
            row={5}
            data={[
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
            ]}
          />

          <SajuRow
            row={6}
            data={[
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
            ]}
          />

          <SajuRow
            row={7}
            data={[
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)']],
              ['text', ['가나', '(다라)', '마바', '(사아)', '자차', '(카타)']],
            ]}
          />
        </div>
      </div>

      <img src="/chapter1.png" alt="chapter 1 image" />
    </main>
  );
}
