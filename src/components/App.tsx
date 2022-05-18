import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {
    const [text, setText] = useState<string>("");
    const { memos, addTodo, deleteTodo } = useMemoList()

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);
    const onClickedAdd = () => {
        addTodo(text);
        setText("");
    }
    const onClickDelete = useCallback((index: number) => {
        deleteTodo(index);
    }, [deleteTodo]);

    return (
        <div>
            <h1>簡単メモアプリ</h1>
            <input type="text" value={text} onChange={onChangeText} />
            <SButton onClick={onClickedAdd}>追加</SButton>
            <MemoList memos={memos} onClickDelete={onClickDelete}></MemoList>
        </div>
    );
};

const SButton = styled.button`
    margin-left: 16px;
`;
