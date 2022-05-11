import http from "@/utils/http-common.js";

export const sendLoginForm = (payload) => http.post("/auth", payload);
