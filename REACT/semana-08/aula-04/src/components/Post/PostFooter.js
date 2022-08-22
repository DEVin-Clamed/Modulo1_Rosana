export default function PostFooter({ numeroDeCurtidas, curtidoPor }) {
  return (
    <div>
      <div className="FooterUp">
        <div className="HeartComments">
          <img
            className="Heart"
            src={
              numeroDeCurtidas >= 1
                ? "https://img.icons8.com/color/48/000000/hearts.png"
                : "https://img.icons8.com/windows/32/FA5252/hearts.png"
            }
            alt="curtir"
          />
          <span>Comments</span>
        </div>
        <p>Share</p>
      </div>
      {numeroDeCurtidas >= 1 && (
        <p className="Liked">
          Liked by{" "}
          <strong>
            {curtidoPor} and {numeroDeCurtidas} others{" "}
          </strong>
        </p>
      )}
    </div>
  );
}
