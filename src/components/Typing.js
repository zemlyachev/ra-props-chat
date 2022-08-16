import PropTypes from "prop-types";

function Typing({ from, message }) {
  return (
    <>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div>
        <ul className="typing">
          <i className="fa fa-circle fa-fade typing1"></i>
          <i className="fa fa-circle fa-fade typing2"></i>
          <i className="fa fa-circle fa-fade typing3"></i>
        </ul>
      </div>
    </>
  );
}

Typing.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string,
  }),
  message: PropTypes.shape({
    id: PropTypes.string,
    from: PropTypes.shape({
      name: PropTypes.string,
    }),
    type: PropTypes.string,
    time: PropTypes.string,
  }),
};

export default Typing;
