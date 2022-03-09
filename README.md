# @RyanProMax/eslint-config

[![npm](https://img.shields.io/npm/v/@ryanpromax/eslint-config)](https://npmjs.com/package/@ryanpromax/eslint-config)

## Usage

### 1. Install

```bash
npm i -D eslint @ryanpromax/eslint-config
```

### 2. Config `.eslintrc`

```json
{
  "extends": [
    "@ryanpromax"
  ]
}
```

### 3. Config `.eslintignore`

```txt
dist
public
```

### 4. Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint \"**/*.{jsx,ts,js}\""
  }
}
```

### 5. Config VSCode auto fix

Create `.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
