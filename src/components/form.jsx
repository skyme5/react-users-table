import LinkTo from './Link'

const Form = ({ isLogin, errorMessage, onSubmit }) => (
  <form onSubmit={onSubmit}>
    {!isLogin && (
      <label htmlFor="firstName">
        <span>First Name</span>
        <input type="text" name="firstName" required />
      </label>
    )}

    {!isLogin && (
      <label htmlFor="lastName">
        <span>Last Name</span>
        <input type="text" name="lastName" required />
      </label>
    )}

    <label htmlFor="email">
      <span>Email</span>
      <input type="text" name="email" required />
    </label>

    <label htmlFor="password">
      <span>Password</span>
      <input type="password" name="password" required />
    </label>

    {!isLogin && (
      <label htmlFor="rpassword">
        <span>Repeat password</span>
        <input type="password" name="rpassword" required />
      </label>
    )}

    <div className="submit">
      {isLogin ? (
        <>
          <LinkTo href="/signup">I don&apos;t have an account</LinkTo>
          <button type="submit">Login</button>
        </>
      ) : (
        <>
          <LinkTo href="/login">I already have an account</LinkTo>
          <button type="submit">Signup</button>
        </>
      )}
    </div>

    {errorMessage && <p className="error">{errorMessage}</p>}

    <style jsx>{`
      form,
      label {
        display: flex;
        flex-flow: column;
      }
      label > span {
        font-weight: 600;
      }
      input {
        padding: 8px;
        margin: 0.3rem 0 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .submit {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        justify-content: space-between;
      }
      .submit > a {
        text-decoration: none;
      }
      .submit > button {
        padding: 0.5rem 1rem;
        cursor: pointer;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .submit > button:hover {
        border-color: #888;
      }
      .error {
        color: brown;
        margin: 1rem 0 0;
      }
    `}</style>
  </form>
)

export default Form
