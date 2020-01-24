import { connect } from "react-redux";
import { deleteCompleteTodo } from "../redux-store";
import Footer from "../components/footer/Footer";

const getFooterVisibility = todos => {
  return todos.length > 0 ? true : false;
};
const getDeleteComleteVisibility = todos => {
  return todos.filter(todo => todo.completed).length > 0 ? true : false;
};

const mapStateToProps = state => ({
  visible: getFooterVisibility(state.todos),
  visibleCompleteDeleteLink: getDeleteComleteVisibility(state.todos),
  todosLength: state.todos.length
});
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(deleteCompleteTodo())
});
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
