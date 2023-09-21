import { Router } from "express";

const v1 = Router();

// Auth routes
v1.post("/auth/signin");
v1.post("/auth/signin/:provider");
v1.post("/auth/signin/callback/:provider");
v1.get("/auth/signout");
v1.post("/auth/register");

// Organizations routes
v1.get("/organizations");
v1.get("/organizations/:id");
v1.post("/organizations");
v1.put("/organizations/:id");
v1.delete("/organizations/:id");

// Spaces routes
v1.get("/spaces");
v1.get("/spaces/:id");
v1.post("/spaces");
v1.put("/spaces/:id");
v1.delete("/spaces/:id");

// Threads routes
v1.get("/spaces/:spaceId/threads");
v1.get("/spaces/:spaceId/threads/:id");
v1.post("/spaces/:spaceId/threads");
v1.put("/spaces/:spaceId/threads/:id");
v1.delete("/spaces/:spaceId/threads/:id");

export default v1;
