import cookie from "js-cookie";

export const SignIn = (user) => {
  return fetch("http://localhost:5000/api/signin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const SignUp = (user) => {
  return fetch("http://localhost:5000/api/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const SignOut = (next) => {
  RemoveCookie("token");
  RemoveLocalStorage("user");
  next();

  return fetch(`http://localhost:5000/api/signout`, {
    method: "GET",
  })
    .then((response) => {
      console.log("SignOut Success");
    })
    .catch((err) => console.log(err));
};

export const GetSingleUserDetails = (userid) => {
  return fetch("http://localhost:5000/api/user", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userid),
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const SetCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const RemoveCookie = (key) => {
  if (process.browser) {
    cookie.remove(key);
  }
};
export const GetCookie = (key) => {
  if (process.browser) {
    return cookie.get(key);
  }
};

export const SetLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const RemoveLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};

export const GetLocalStorage = (key) => {
  if (process.browser) {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const authenticate = (data, next) => {
  SetCookie("token", data.token);
  SetLocalStorage("user", data.user);
  next();
};

export const isAuth = () => {
  if (process.browser) {
    const cookiecheck = GetCookie("token");
    if (cookiecheck) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};
