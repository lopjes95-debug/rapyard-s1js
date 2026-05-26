#!/usr/bin/env node

import fs from "fs";
import path from "path";

function log(msg) {
  process.stdout.write(msg + "\n");
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function createModule(name) {
  const root = process.cwd();
  const moduleDir = path.join(root, "apps", "web", "app", name);

  if (fs.existsSync(moduleDir)) {
    log(`Module "${name}" already exists at ${moduleDir}`);
    process.exit(1);
  }

  fs.mkdirSync(moduleDir, { recursive: true });

  const page = `"use client";

export default function ${capitalize(name)}Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1>${capitalize(name)} module</h1>
    </main>
  );
}
`;

  fs.writeFileSync(path.join(moduleDir, "page.tsx"), page);
  log(`Created module "${name}" at ${moduleDir}`);
}

const [, , cmd, arg] = process.argv;

if (cmd === "create" && arg) {
  createModule(arg);
} else {
  log('Usage: ry create <module-name>');
  process.exit(1);
}
