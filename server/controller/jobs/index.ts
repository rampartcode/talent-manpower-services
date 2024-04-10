import auth from "~/server/middleware/auth";
import { prisma } from "~/server/utils/prisma.utils";

export const findAll = async () => {
  try {
    const result = await prisma.job.findMany();

    return result;
  } catch (error) {
    console.log(error);
  }
};
