import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const target = getRequestURL(event).href;

  if (target.includes("/api/v1/")) {
    const authorization = getHeader(event, "Authorization");

    if (!authorization) {
      throw createError({
        statusCode: 401,
        statusMessage: "You're not authorized to access this resource",
      });
    }

    const token = authorization?.split(" ")[1];

    const { id } = jwt.verify(token, "teste");

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: "You're not logged in",
      });
    }

    const { password, ...loggedUser } = user;

    event.context.user = loggedUser;
  }
});
