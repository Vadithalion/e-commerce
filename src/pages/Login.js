import React from "react";
// strapi functions
import loginUser from "../strapi/loginUser";
import registerUser from "../strapi/registerUser";
// handle user
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user";
export default function Login() {
  // react router history
  const history = useHistory();
  // login user
  const { userLogin, showAlert, alert } = React.useContext(UserContext);
  // input fields
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("default");
  const [isMember, setIsMember] = React.useState(true);
  // empty form fields
  let isEmpty = !email || !password || !username || alert.show;
  // handle member
  const toggleMember = () => {
    setIsMember(prevMember => {
      let isMember = !prevMember;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  };

  const handleSubmit = async e => {
    showAlert({
      msg: "accediendo..."
    });
    e.preventDefault();
    let response;

    if (isMember) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ email, password, username });
    }
    if (response) {
      const {
        jwt: token,
        user: { username }
      } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
      showAlert({
        msg: `Ha inicado sesión como : ${username}. A comprar!`
      });
      history.push("/products");
    } else {
      showAlert({
        msg: "Ha habido un error, intentelo de nuevo...",
        type: "danger"
      });
    }
  };

  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "sign in" : "register"}</h2>
      <form className="login-form">
        {/* single input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        {/*end of single input */}
        {/* single input */}

        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {/*end of single input */}

        {/* single input */}
        {!isMember && (
          <div className="form-control">
            <label html="username">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
        )}

        {/*end of single input */}
        {/* empty form text */}
        {isEmpty && (
          <p className="form-empty">Rellene todos los campos</p>
        )}

        {/* submit btn */}
        {!isEmpty && (
          <button
            type="submit"
            className="btn btn-block btn-primary"
            // disabled={isEmpty}
            onClick={handleSubmit}
          >
            enviar
          </button>
        )}

        {/* register link */}
        <p className="register-link">
          {isMember ? "Necesitas registrarte?" : "ya eres miembro?"}
          <button type="button" onClick={toggleMember}>
            click aqui
          </button>
        </p>
      </form>
    </section>
  );
}
