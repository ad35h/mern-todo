import './TodoCard.scss';

function TodoCard(props) {
    return (
      <div className="todo-card">
        <div className="todo-card__header">
          <span className="todo-card__time">8:00 am</span>
          <span className="todo-card__duration">45 min</span>
        </div>
        <div className="todo-card__body">
          <span className="todo-card__text">Public Relations Expert</span>
        </div>
        <div className="todo-card__footer">
          <span className="todo-card__text">Publicity</span>
        </div>
      </div>
    );
}

export default TodoCard;