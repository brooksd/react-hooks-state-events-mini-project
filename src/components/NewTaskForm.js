import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({text, category});
    setText("")
    setCategory("Code")
  }

  const onChangeCategory = (e) => setCategory(e.target.value);
  const onChangeText = (e) => setText(e.target.value);

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={text} onChange={onChangeText} />
      </label>
      <label>
        Category
        <select value={category} onChange={onChangeCategory}>
          {categories.map((categ) => (
            <option key={categ}>{categ}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
