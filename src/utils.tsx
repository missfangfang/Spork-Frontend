import LoginForm from "./LoginForm/LoginForm";

export const login = (credential: LoginForm): Promise<Response | void> => {
  const loginUrl = `/login?username=${credential.username}&password=${credential.password}`;
  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Login failed");
    }
  }).catch((err) => {
    console.error(err);
  });
};

export const signUp = (data: { username: string; password: string }): void => {
  const signUpUrl = "/signup";
  fetch(signUpUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Sign Up Failed");
    }
  }).catch((err) => {
    console.error(err);
  });
};

export const getMenus = (restaurantId: number): Promise<Response> => {
  return fetch(`/restaurant/${restaurantId}/menu`)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Failed to retrieve menu");
      }
      return response.json();
    }).catch((err) => {
      console.log(err);
    });
};

export const getRestaurants = (): Promise<Response> => {
  return fetch("/restaurants")
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Failed to retrieve restaurants");
      }
      return response.json();
    }).catch((err) => {
      console.log(err);
    });
};

export const getCart = (): Promise<Response> => {
  return fetch("/cart")
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Failed to retrieve cart");
      }
      return response.json();
    }).catch((err) => {
      console.log(err);
    });
};

// TODO: revisit return type
export const checkout = (): Promise<void> => {
  return fetch("/checkout")
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Failed to check out");
      }
    }).catch((err) => {
      console.log(err);
    });
};

export const addItemToCart = (itemId: number): Promise<Response | void> => {
  return fetch(`/order/${itemId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Failed to add item to cart");
    }
  }).catch((err) => {
    console.error(err);
  });
};



