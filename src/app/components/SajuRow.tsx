export default function SajuRow() {

  function TextSquare({ text1, text2 = null }) {
    return (
      <>
        <p>{text1}</p>
        <p>{text2 ? text2 : null}</p>
      </>
    );
  }

  function ImageSquare({ src, alt }) {
    return <img src={src} alt="{alt}" />;
  }
}