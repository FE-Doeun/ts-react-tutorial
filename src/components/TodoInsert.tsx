import React, { useState } from "react";

type TodoInsertProp = {
  onInsert: (text: string) => void;
};

const TodoInsert = ({ onInsert }: TodoInsertProp) => {
  const [value, setValue] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
  };

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력하세요."
          value={value}
          onChange={onChange}
        />
        <button type="submit" onSubmit={onSubmit}>
          등록
        </button>
      </form>
    </>
  );
}

export default TodoInsert;
