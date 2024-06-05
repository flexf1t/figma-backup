<div align="center">
  <h1>Figma Backup Bot</h1>
  <p>A Node.js CLI to backup Figma files and store them as local <code>.fig</code> files.</p>
  <img src="https://img.shields.io/npm/dt/figma-backup?color=d900ff&labelColor=000000&style=for-the-badge" />
  <img src="https://img.shields.io/github/license/mimshins/figma-backup?color=d900ff&labelColor=000000&style=for-the-badge" />
  <img src="https://img.shields.io/npm/v/figma-backup?color=d900ff&labelColor=000000&style=for-the-badge" />
  <a title="twitter" href="https://twitter.com/mimshins" target="_blank"><img src="https://img.shields.io/twitter/follow/mimshins?color=d900ff&labelColor=000000&logo=twitter&style=for-the-badge" /></a>
</div>

<hr />

## Installation

1- Make sure you have [Node.js](https://nodejs.org) installed on your machine.\
(We follow the latest [maintenance LTS](https://github.com/nodejs/Release#release-schedule) version of Node.)

2- Run the following command on your terminal:
```bash
yarn
```
3- Build:
```bash
yarn run build
```

## Usage

To use, run:

```bash
node lib/index.js --debug true -e "<YOUR_EMAIL>" -p "<YOUR_PASSWORD>" -t "<YOUR_ACCESS_TOKEN>" --projects-ids "ID1" "ID2" ... "IDx"
```
---

> **To get `project_id` from project page's URL:**\
`https://www.figma.com/files/project/{project_id}/{project_name}`

> **To get `access_token`:**
> 1. Login to your Figma account.
> 2. Head to the account settings from the top-left menu inside Figma.
> 3. Find the personal access tokens section.
> 4. Click Create new token.
> 5. A token will be generated. This will be your only chance to copy the token, so make sure you keep a copy of this in a secure place.

---

## Output

The backup files will be found in system default download directory
