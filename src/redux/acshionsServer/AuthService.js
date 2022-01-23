import $api from "./request";

export async function loginAuth(email, password) {
  return $api.post("/login", { email, password });
}

export async function registartionServer(email, password) {
  return $api.post("/registration", { email, password });
}
export async function logoutSite() {
  return $api.post("/logout");
}
