const InputFeedback = ({ msg = 'Invalid field', theme  = 'error' }) => {
    return (
        <p className={`tst-form__msg tst-form__msg--${theme}`}>
            {msg}
        </p>
    );
};

export default InputFeedback;