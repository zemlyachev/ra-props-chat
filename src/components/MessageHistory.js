import PropTypes from "prop-types";
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

function MessageHistory(props) {
  const messages = props.list;

  return (
    <ul className="chat-list">
      {messages.map((message) => (
        <li
          className={message.type === "response" ? "clearfix" : ""}
          key={message.id}
        >
          {message.type === "message" && (
            <Message from={message.from} message={message} />
          )}
          {message.type === "response" && (
            <Response from={message.from} message={message} />
          )}
          {message.type === "typing" && (
            <Typing from={message.from} message={message} />
          )}
        </li>
      ))}
    </ul>
  );
}

MessageHistory.defaultProps = { props: [] };

MessageHistory.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      from: PropTypes.shape({
        name: PropTypes.string,
      }),
      type: PropTypes.string,
      time: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default MessageHistory;
