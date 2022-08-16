import PropTypes from "prop-types";

function Message({ from, message }) {
  return (
    <>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </>
  );
}

Message.propTypes = {
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
    text: PropTypes.string,
  }),
};

export default Message;
