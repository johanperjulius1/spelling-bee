import styles from "./inputForm.module.css";

export function WordInputForm({
  userInput,
  setUserInput,
  hasErrors,
  errorMessage,
  submitHandler,
  setMessage
}) {
  const handleInputChange = (event) => {
    setMessage(null)
    setUserInput(event.target.value);
  };

  // className logic
  const inputClassName = [styles.input, hasErrors && styles["error"]]
    .filter(Boolean)
    .join(" ");

  return (
    <form method="post" onSubmit={submitHandler}>
      <input
        name="wordInput"
        id="wordInput"
        className={inputClassName}
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Type or click"
      ></input>
      {hasErrors && <p className={styles.errorMessage}>{errorMessage}</p>}
      {submitHandler}
    </form>
  );
}
