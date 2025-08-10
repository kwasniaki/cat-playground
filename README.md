# Cats playground

## 1. Frontend section:

### DEVELOP

#### Prerequisites

- node - `package.json@engines`
- corepack

> Great tool for installing node is `n` node manager
>
> you can install it from https://github.com/tj/n
>
> then you run `cd ui && n engine`
>
> this will install proper version of node.js

check if corepack is installed

```bash
    corepack --version
```

if not run

```bash
    npm install -G corepack
```

#### Enable correct version of npm and install dependencies

```bash
    cd ui
    corepack enable npm
    npm ci
```

> When initial setup was done
>
> `npm ci` is enough to download new dependencies after changes

#### Start dev server

```bash
    cd ui
    npm run dev
```

### KNOWN ISSUES

#### x-prepare script

The `x-prepare` script in `package.json` is intended to run `npx simple-git-hooks` to set up git hooks automatically. However, this does **not** work until [simple-git-hooks issue #132](https://github.com/toplenboren/simple-git-hooks/issues/132) is fixed.

**Workaround:**
Copy the `pre-commit` hook from the `.git/hooks` folder in `ui` to the `.git/hooks` folder in the root of the repo after installing dependencies.

## 2. Backend section:

Before starting the application:

- get `db.properties` file from one of devs and put it into your project root

Run the following commands in Maven Tool:

#### Build:

```maven
mvn -f backend/pom.xml clean compile
```

#### Run tests:

```maven
mvn -f backend/pom.xml clean verify
```

#### Start application:

```maven
mvn -f backend/pom.xml spring-boot:run
```
