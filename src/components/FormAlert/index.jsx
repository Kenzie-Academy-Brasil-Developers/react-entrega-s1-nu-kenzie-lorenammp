import "./style.css";

function FormAlert(props) {
  let myInterval;
  function closeAlert() {
    clearInterval(myInterval);
    myInterval = null;
    props.setAlert(false);
  }

  if (props.alert === true) {
    if (!myInterval) {
      myInterval = setInterval(closeAlert, 5000);
    }
  }
  return (
    <div className="alert-window">
      <div className="modal-header">
        <h3>Status</h3>
        <div className="close-btn" onClick={() => props.setAlert(false)}>
          x
        </div>
      </div>
      <div className="modal-body">
        <p>Transação adicionada com sucesso!</p>
      </div>

      <div className="modal-footer"></div>
    </div>
  );
}

export default FormAlert;
