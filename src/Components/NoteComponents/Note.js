function Note({ id, text, deleteNote, updateNote }) {
    return (
        <div className="note">
            <div className="note__body" onClick={() => updateNote(id)}>{text}</div>
            <div className="note__footer" style={{ justifyContent: "flex-end" }}>
                <div
                    className="note__delete"
                    onClick={() => deleteNote(id)}
                    aria-hidden="true"
                >Del</div>
            </div>
        </div>
    );
}

export default Note;