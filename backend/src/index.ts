import { Hono } from 'hono'
import { authRouter } from './routes/authRouter';
import { usersRouter } from './routes/usersRouter';
import { favoritesRouter } from './routes/favoritesRouter';
import { plantsRouter } from './routes/plantsRouter';
import { categoriesRouter } from './routes/categoriesRouter';
import { statsRouter } from './routes/statsRouter';

const app = new Hono()

app.route("/auth", authRouter);
app.route("/plants", plantsRouter);
app.route("/categories", categoriesRouter);
app.route("/favorites", favoritesRouter);
app.route("/stats", statsRouter);
// app.route("/search", searchRouter);
app.route("/users", usersRouter);
// app.route("/admin", adminRouter);

app.get("/", (c) => c.text("Hello"));

export default app
