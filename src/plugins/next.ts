import nextjs from "@fastify/nextjs";
import fp from "fastify-plugin";

export default fp(async (fastify) => {
    fastify.register(nextjs)
})
