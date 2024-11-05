import './GenericCard.scss';
export default function GenericCard(props: {
  width: string;
  minHeight?: string;
  title: string;
  picture: string;
  desc: string;
  button?: { butname: string; butlink: string };
}) {
  
  return (
    <div
      className="genericCard"
      style={{
        width: props.width,
        minHeight: props.minHeight === undefined ? "unset" : props.minHeight,
      }}
    >
      <div className="genericCard-header">
        <img src={props.picture} alt="genericCard-picture" />
      </div>
      <div className="genericCard-content">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <button
          style={{ display: props.button === undefined ? "none" : "unset" }}
        >
          {props.button?.butname}
        </button>
      </div>
    </div>
  );
}
