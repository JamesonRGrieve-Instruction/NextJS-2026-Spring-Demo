ARG NODE_VERSION=24-slim

# -- Deps Installer --
FROM node:${NODE_VERSION} AS deps
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# -- Build --
FROM node:${NODE_VERSION} AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY --from=deps /app/node_modules ./node_modules
COPY . . 
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

## -- Run --
FROM node:${NODE_VERSION} AS run
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
COPY public /app/public
COPY --from=build /app/.next /app/.next
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

EXPOSE 3000
CMD ["pnpm", "start"]