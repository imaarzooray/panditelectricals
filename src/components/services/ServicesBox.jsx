import Cta from "../hero/navbar/Cta.jsx";

function ServicesBox({ icon, img, desc,classname="ntg" }) {


  if (!desc) return null;

  return (
    <div className="serv" id={classname}>

      <div className="upperFirst">
        <i className={icon}></i>
      </div>
      <div className="lowerServBox">

        <div className="lowerFirst">
          {desc.title}
        </div>

        <div className="long">
          {desc.description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="pointers">
          {
          desc.items.map((item, i) => (
            <span key={i}> {item}</span>
          ))
          }
        </div>

        <div className="btnBox">
            <Cta
            icon="ri-arrow-right-s-line"
            hvcolor="#B86E24"
                        bgColor="#C97A2B"
                        content="View More"
                        fontColor="#FFFFFF
"
textSize="14px"
                        width="140px"
                        height="45px"

                    />
        </div>

      </div>
    </div>
  );
}

export default ServicesBox;
