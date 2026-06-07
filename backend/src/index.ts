import { Hono } from 'hono'
import { authRouter } from './routes/authRouter';
import { usersRouter } from './routes/usersRouter';
import { favouritesRouter } from './routes/favouritesRouter';
import { plantsRouter } from './routes/plantsRouter';
import { categoriesRouter } from './routes/categoriesRouter';
import { statsRouter } from './routes/statsRouter';
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors());
app.route("/api/v1/auth", authRouter);
app.route("/api/v1/plants", plantsRouter);
app.route("/api/v1/categories", categoriesRouter);
app.route("/api/v1/favourites", favouritesRouter);
app.route("/api/v1/stats", statsRouter);
// app.route("/search", searchRouter);
app.route("/api/v1/users", usersRouter);
// app.route("/admin", adminRouter);

app.get("/", (c) => c.text("Hello"));

export default app
